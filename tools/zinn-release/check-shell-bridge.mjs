import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import sqliteInit from "@sqlite.org/sqlite-wasm";
import { prepare, proof, root } from "./prepare.mjs";

const output = path.join(root, "proofs/zinn-shell-bridge");
const packageRoot = path.join(root, "node_modules/@everruns/bashkit-wasm");
const manifest = JSON.parse(await readFile(path.join(packageRoot, "package.json"), "utf8"));
const declarations = await readFile(path.join(packageRoot, "index.d.ts"), "utf8");
const wasm = await readFile(path.join(packageRoot, "bashkit_wasm_bg.wasm"));
assert.equal(manifest.version, "0.18.2", "Reassess the report after a BashKit release change");
assert.match(declarations, /=> string \| Promise<string>/);
await initBashkit(wasm);

const rows = [];
const shellResult = (stdout = "", stderr = "", exitCode = 0) => ({ stdout, stderr, exitCode });
const invocation = (stdout = "", stderr = "", status = 0) => ({ stdout, stderr, status });
const capture = ({ stdout, stderr, exitCode }) => ({ stdout, stderr, exitCode });
const asShell = ({ stdout, stderr, status }) => shellResult(stdout, stderr, status);
function record(id, script, desired, observed, api, verdict = "pass") {
  rows.push({ id, script, desired, observed, api, verdict });
}
async function check(id, bash, script, expected, api, files = {}) {
  const observed = capture(await bash.execute(script));
  assert.deepEqual(observed, expected, id);
  const observedFiles = {};
  for (const [file, contents] of Object.entries(files)) {
    observedFiles[file] = bash.readFile(file);
    assert.equal(observedFiles[file], contents, `${id}: ${file}`);
  }
  record(id, script, { ...expected, files }, { ...observed, files: observedFiles }, api);
}

// Baseline callbacks only use the declared string and rejection mechanisms.
const asyncCalls = [];
const bash = new Bash({
  customBuiltins: {
    ok: () => "OUT\n",
    bad: async () => {
      throw new Error("ERR");
    },
    later: async ({ argv }) => {
      asyncCalls.push(`start:${argv[0]}`);
      await Promise.resolve();
      asyncCalls.push(`end:${argv[0]}`);
      return `${argv[0]}\n`;
    },
  },
});
const error = "bad: ERR\n";
const execute = "Bash.execute, CustomBuiltin string/rejection";
await check("baseline-return", bash, "ok", shellResult("OUT\n"), execute);
await check("baseline-reject", bash, "bad", shellResult("", error, 1), execute);
await check(
  "immediate-success",
  bash,
  'ok; printf "status=%s\\n" "$?"',
  shellResult("OUT\nstatus=0\n"),
  execute,
);
await check(
  "immediate-failure",
  bash,
  'bad; printf "status=%s\\n" "$?"',
  shellResult("status=1\n", error),
  execute,
);
await check("and-success", bash, "ok && echo YES", shellResult("OUT\nYES\n"), execute);
await check("and-failure", bash, "bad && echo NEVER", shellResult("", error, 1), execute);
await check("or-success", bash, "ok || echo NEVER", shellResult("OUT\n"), execute);
await check(
  "or-failure",
  bash,
  "bad || echo RECOVERED",
  shellResult("RECOVERED\n", error),
  execute,
);
await check("stdout-pipe", bash, "ok | cat", shellResult("OUT\n"), execute);
await check(
  "pipe-failure",
  bash,
  "bad | cat",
  shellResult("", error),
  `${execute}, default pipeline status is last command`,
);
await check("pipefail", bash, "set -o pipefail; bad | cat", shellResult("", error, 1), execute);
await bash.execute("set +o pipefail");
await check("stdout-file", bash, "ok > /tmp/out", shellResult(), `${execute}, VFS readFile`, {
  "/tmp/out": "OUT\n",
});
await check(
  "stderr-file",
  bash,
  "bad 2> /tmp/err",
  shellResult("", "", 1),
  `${execute}, VFS readFile`,
  { "/tmp/err": error },
);
await check(
  "combined-file",
  bash,
  "bad > /tmp/both 2>&1",
  shellResult("", "", 1),
  `${execute}, VFS readFile`,
  { "/tmp/both": error },
);
await check(
  "combined-sequence",
  bash,
  "{ ok; bad; } > /tmp/group 2>&1",
  shellResult("", "", 1),
  `${execute}, VFS readFile`,
  { "/tmp/group": `OUT\n${error}` },
);
await check(
  "async-sequence",
  bash,
  "later first; bad; later second",
  shellResult("first\nsecond\n", error),
  execute,
);
assert.deepEqual(asyncCalls, ["start:first", "end:first", "start:second", "end:second"]);
await check("next-call-isolation", bash, "later third", shellResult("third\n"), execute);

// Desired InvocationResults are test-runner values, never returned as objects to BashKit.
const targets = {
  t0: invocation("O0\n"),
  t0err: invocation("O0\n", "E0", 0),
  t2: invocation("O2\n", "E2", 2),
  t7: invocation("O7\n", "E7", 7),
};
function availableMechanism(result) {
  if (result.status !== 0 || result.stderr) throw new Error(result.stderr);
  return result.stdout;
}
const bridge = new Bash({
  customBuiltins: { target: ({ argv }) => availableMechanism(targets[argv[0]]) },
});
for (const [name, desired] of Object.entries(targets)) {
  const observed = capture(await bridge.execute(`target ${name}`));
  const supported = name === "t0";
  assert.deepEqual(
    observed,
    supported ? asShell(desired) : shellResult("", `target: ${desired.stderr}\n`, 1),
  );
  if (!supported) assert.notDeepEqual(observed, asShell(desired));
  record(
    `transport-${name}`,
    `target ${name}`,
    desired,
    observed,
    "CustomBuiltin string or Error rejection only",
    supported ? "pass" : "unsupported",
  );
}
const status7 = capture(await bridge.execute('target t7; printf "status=%s\\n" "$?"'));
assert.deepEqual(status7, shellResult("status=1\n", "target: E7\n"));
record(
  "transport-status7-immediate",
  'target t7; printf "status=%s\\n" "$?"',
  shellResult("O7\nstatus=7\n", "E7"),
  status7,
  execute,
  "unsupported",
);

// Compare only callback-supplied context. Never inspect raw script text to infer tty.
const requests = [];
const contextBash = new Bash({
  cwd: "/tmp",
  env: { TERM: "xterm-256color", COLUMNS: "80" },
  customBuiltins: {
    context: (request) => {
      const { name, argv, stdin, env, cwd, fs } = request;
      requests.push({
        keys: Object.keys(request).sort(),
        name,
        argv,
        stdin,
        env,
        cwd,
        fsMethods: Object.keys(fs).sort(),
      });
      return "CONTEXT\n";
    },
  },
});
for (const [destination, script, expected, files] of [
  ["direct", "context arg", shellResult("CONTEXT\n"), {}],
  ["pipe", "context arg | cat", shellResult("CONTEXT\n"), {}],
  ["redirect", "context arg > /tmp/context", shellResult(), { "/tmp/context": "CONTEXT\n" }],
]) {
  const observed = capture(await contextBash.execute(script));
  assert.deepEqual(observed, expected);
  const observedFiles = {};
  for (const [file, text] of Object.entries(files)) {
    observedFiles[file] = contextBash.readFile(file);
    assert.equal(observedFiles[file], text);
  }
  const request = requests.at(-1);
  assert.deepEqual(request.keys, ["argv", "cwd", "env", "fs", "name", "stdin"]);
  assert.deepEqual(request.argv, ["arg"]);
  record(
    `tty-${destination}`,
    script,
    { tty: destination === "direct", columns: 80, color: destination === "direct" },
    { ...observed, files: observedFiles, request },
    "BuiltinRequest, BashOptions.env/cwd",
    "unsupported",
  );
}
assert.deepEqual(requests[0], requests[1]);
assert.deepEqual(requests[0], requests[2]);
await check(
  "stdin-context",
  contextBash,
  "printf INPUT | context arg",
  shellResult("CONTEXT\n"),
  "BuiltinRequest.stdin",
);
assert.equal(requests.at(-1).stdin, "INPUT");

// Use the existing preparation and its source-integrity checks, not runtime.js in Node.
await prepare();
const runtime = await import(pathToFileURL(path.join(proof, "generated/browser-cli.js")));
runtime.initialize(await sqliteInit());
assert.equal(runtime.identity.cli, "0.43.0");
assert.equal(runtime.identity.core, "0.32.0");
const plainContext = { tty: false, columns: 80, color: false };
const runtimeCalls = [];
function runtimeShell() {
  return new Bash({
    customBuiltins: {
      zinn: async ({ argv }) => {
        const result = await runtime.invoke(argv, plainContext);
        runtimeCalls.push({ argv, ...result });
        // An explicitly limited probe, not a production adapter or accepted fallback.
        return availableMechanism(result);
      },
    },
  });
}
const zinn = runtimeShell();
const outputs = {};
for (const [name, argv] of [
  ["help", ["--help"]],
  ["version", ["--version"]],
  ["invalid", ["--definitely-invalid"]],
]) {
  const direct = await runtime.invoke(argv, plainContext);
  outputs[name] = direct;
  const script = `zinn ${argv.join(" ")}`;
  const observed = capture(await zinn.execute(script));
  const call = runtimeCalls.at(-1);
  assert.deepEqual(call.argv, argv, "BashKit argv excludes command name");
  assert.deepEqual(call, { argv, ...direct });
  assert.equal(direct.metrics.opens, 0);
  assert.equal(direct.metrics.exists, false);
  assert.equal(direct.metrics.bytes, 0);
  assert.equal(direct.metrics.fileReads, 0);
  assert.equal(direct.metrics.directoryWrites, 0);
  if (name === "invalid") {
    assert.notEqual(direct.status, 0);
    assert.deepEqual(observed, shellResult("", `zinn: ${direct.stderr}\n`, 1));
    assert.notDeepEqual(observed, asShell(direct));
  } else {
    assert.equal(direct.status, 0);
    assert.equal(direct.stderr, "");
    assert.deepEqual(observed, asShell(direct));
  }
  record(
    `zinn-${name}`,
    script,
    direct,
    { ...observed, metrics: call.metrics },
    "runtime.invoke(argv, explicit plain context), CustomBuiltin",
    name === "invalid" ? "unsupported" : "pass",
  );
}
await check(
  "zinn-help-pipe",
  zinn,
  "zinn --help | cat",
  asShell(outputs.help),
  "runtime.invoke, explicit plain context, Bash.execute",
);
await check(
  "zinn-version-file",
  zinn,
  "zinn --version > /tmp/version",
  shellResult(),
  "runtime.invoke, VFS readFile",
  { "/tmp/version": outputs.version.stdout },
);
await check(
  "zinn-invalid-stderr-file",
  zinn,
  "zinn --definitely-invalid 2> /tmp/zinn-error",
  shellResult("", "", 1),
  "runtime.invoke, VFS readFile (already degraded diagnostic)",
  { "/tmp/zinn-error": `zinn: ${outputs.invalid.stderr}\n` },
);

// Overlap separate interpreters against the runtime's invocation queue. Do not
// claim that simultaneous execute calls on one Bash instance are supported.
const [versionCall, helpCall] = await Promise.all([
  runtimeShell().execute("zinn --version"),
  runtimeShell().execute("zinn --help"),
]);
assert.deepEqual(capture(versionCall), asShell(outputs.version));
assert.deepEqual(capture(helpCall), asShell(outputs.help));
record(
  "async-runtime-isolation",
  "Promise.all([shellA.execute('zinn --version'), shellB.execute('zinn --help')])",
  [asShell(outputs.version), asShell(outputs.help)],
  [capture(versionCall), capture(helpCall)],
  "Bash.execute on separate instances, runtime.invoke queue",
);
assert.equal(runtime.inspect().opens, 0);
assert.equal(runtime.snapshot(), undefined);
assert.ok(rows.some(({ verdict }) => verdict === "unsupported"));

const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const evidence = {
  verdict: "unsupported",
  node: process.version,
  bashkit: manifest.version,
  wasmSha256: sha256(wasm),
  declarationsSha256: sha256(declarations),
  runtime: runtime.identity,
  plainContext,
  asyncCalls,
  outputs,
  rows,
};
await writeFile(path.join(output, "results.json"), JSON.stringify(evidence, null, 2) + "\n");

// Keep a reviewable, deterministic matrix beside the fixture. H/V/I expand to
// exact released text below, avoiding repeated help pages inside table cells.
const symbols = new Map([
  [outputs.help.stdout, "<H>"],
  [outputs.version.stdout, "<V>"],
  [outputs.invalid.stderr, "<I>"],
  [`zinn: ${outputs.invalid.stderr}\n`, "<BRIDGED-I>"],
]);
const summarize = (value) =>
  JSON.stringify(value, (key, item) => {
    if (typeof item === "string" && symbols.has(item)) return symbols.get(item);
    if (key === "fsMethods") return "FileSystem methods (see results.json)";
    return item;
  });
const cell = (value) => `\`${summarize(value).replaceAll("|", "\\|").replaceAll("`", "&#96;")}\``;
const table = rows
  .map(
    ({ id, script, desired, observed, api, verdict }) =>
      `| ${id} | ${cell(script)} | ${cell(desired)} | ${cell(observed)} | ${api} | ${verdict} |`,
  )
  .join("\n");
const report = `# BashKit shell bridge capabilities

Overall verdict: **unsupported** for the required InvocationResult contract on installed BashKit ${manifest.version}. Shell routing and plain successful stdout work. The callback cannot transport independent stdout, stderr and arbitrary status, and provides no documented per-invocation stdout destination/TTY context. A passing research command confirms these measured limitations, not integration readiness. PORT-13 still waits for an agreed and verified remedy.

## Reproduce

Run from the repository root with the lockfile dependencies installed:

\`\`\`sh
npm run test:zinn-shell-bridge
npm run test:zinn-release
npm run test:terminal
npm run lint
npm run build
\`\`\`

The first command runs real BashKit WASM in Node, verifies expected successes and failures, reuses prepare() with all released-source drift checks, and bundles/initializes the released runtime with in-memory SQLite WASM. It regenerates this report and ignored [results.json](./results.json), including full output, callback fields, metrics and hashes. Unexpected behavior fails assertions. No browser check is required for this negative result. No browser suitability is claimed.

Measured with ${process.version}, BashKit ${manifest.version}, CLI ${runtime.identity.cli}, core ${runtime.identity.core}, and SQLite WASM 3.51.2-build8. BashKit WASM SHA-256: \`${evidence.wasmSha256}\`. Declaration SHA-256: \`${evidence.declarationsSha256}\`. No dependencies, installed package sources, production imports or existing proof behavior are changed.

On 2026-11-05 the bridge's 33 rows reproduced 25 passes and 8 unsupported cases. Companion verification passed all 196 released-runtime conformance comparisons, all 42 terminal tests, lint and the production TypeScript/Vite build. The build emitted advisories about chunk size, the console script, dependency annotations and baseline-browser-mapping. Node emitted its localStorage experimental warning. No dependency update was made.

## Declared API versus measurements

The installed [index.d.ts](../../node_modules/@everruns/bashkit-wasm/index.d.ts) and [README](../../node_modules/@everruns/bashkit-wasm/README.md) declare CustomBuiltin as string or Promise<string>. A thrown/rejected Error becomes stderr and status 1. BuiltinRequest declares name, argv (without command name), stdin, env, cwd and fs. There is no declared stderr writer, status setter, terminal width or stdout destination/TTY field. Bash.execute returns ExecResult.exitCode, while runtime.invoke returns InvocationResult.status. The matrix preserves those distinct names.

Measurements additionally show a command-name prefix and trailing newline added to rejection text. That exact formatting is an observation pinned by the fixture, not a promised callback contract. Direct, piped and redirected callbacks supplied identical context with the same exported TERM/COLUMNS. COLUMNS is an explicit environment value, not measured terminal width. Environment color overrides cannot establish automatic destination detection. Bash.analyze sees script syntax, not documented per-invocation TTY metadata. executeWithOutput is an execution-output observer, not a callback stderr/status injection mechanism.

## Matrix

Each pass is scoped to its stated desired result. Shell-semantic rows use the representable stdout/status-0 and rejection/status-1 baselines. They do not prove arbitrary InvocationResult transport. Files are inside each Bash instance's isolated in-memory VFS. Direct callback is invoked as a terminal candidate, but even that row cannot establish tty=true from the API. The three TTY rows require destination-aware context and therefore fail the required criterion.

H, V, I and BRIDGED-I are exact strings expanded below. String newlines are JSON-escaped. For desired runtime results, status is compared with observed exitCode. Metrics.opens is cumulative in this runtime and remains zero throughout. The redirection rows for actual Zinn validate shell routing after the callback limitation, not faithful diagnostic transport.

| Case | Input script | Desired | Observed | Documented API used | Verdict |
| --- | --- | --- | --- | --- | --- |
${table}

## Minimal unsupported reproductions

The fixture's desired test runner returns these InvocationResult values separately from the BashKit callback:

\`\`\`js
const desired = {
  t0err: { stdout: "O0\\n", stderr: "E0", status: 0 },
  t2: { stdout: "O2\\n", stderr: "E2", status: 2 },
  t7: { stdout: "O7\\n", stderr: "E7", status: 7 },
};
// After initBashkit(wasmBytes), use the only declared failure channel:
const bash = new Bash({ customBuiltins: {
  target: ({ argv }) => { throw new Error(desired[argv[0]].stderr); },
} });
await bash.execute("target t7");
// stdout: "", stderr: "target: E7\\n", exitCode: 1
// t2 also becomes 1. t0err becomes a failure. All lose their stdout.
\`\`\`

Returning a string instead would supply only stdout/status 0 and no independent stderr. These are deliberately incomplete mechanism probes. No structured object is returned to a string API and no shell exit/false command substitutes for callback status propagation. Synthetic statuses 2 and 7 do not assert any Zinn failure code.

For missing destination context, after the same initialization:

\`\`\`js
const requests = [];
const bash = new Bash({ customBuiltins: { probe: (ctx) => {
  requests.push({ keys: Object.keys(ctx), argv: ctx.argv,
    stdin: ctx.stdin, env: ctx.env, cwd: ctx.cwd });
  return "text\\n";
} } });
await bash.execute("probe");
await bash.execute("probe | cat");
await bash.execute("probe > /tmp/probe");
// Same callback fields and values in all three requests. No tty/destination.
\`\`\`

The released-runtime reproduction is the zinn custom builtin in [check-shell-bridge.mjs](../../tools/zinn-release/check-shell-bridge.mjs). It awaits invoke(argv, {tty:false, columns:80, color:false}), returns stdout only for a clean success, and rejects Error(stderr) otherwise. Help and version match direct invoke byte for byte and open no board. The invalid invocation has direct status 1 and observed exitCode 1, but gains the zinn prefix/newline through rejection, so it fails exact diagnostic transport. The forced plain context is explicit fixture configuration and does not pass the automatic TTY requirement.

## Exact released output references

\`\`\`json
${JSON.stringify({ H: outputs.help.stdout, V: outputs.version.stdout, I: outputs.invalid.stderr, "BRIDGED-I": `zinn: ${outputs.invalid.stderr}\n` }, null, 2)}
\`\`\`

## Bounded next research

Evaluate a separately versioned BashKit API or upstream change that accepts {stdout, stderr, exitCode} from a custom builtin and exposes effective per-command output destinations, isTTY and width. Re-run this matrix, then require an isolated browser check before any supported verdict. Adoption, package patching and a shell replacement require separate work. An always-plain stdout-only fallback could retain help/version but would still fail diagnostics, arbitrary statuses and automatic TTY detection. It is not accepted as satisfying this contract.

Async calls are awaited in sequence on one interpreter. Overlapping calls use two independent Bash instances and the existing runtime queue, verifying per-call output isolation. Concurrent execute on one instance, streaming, cancellation, persistence and production integration are not claimed. The fixture invokes only help, version and invalid syntax in the released runtime, without project/task mutations or visitor-file projection.
`;
await writeFile(path.join(output, "CAPABILITIES.md"), report);
const passed = rows.filter(({ verdict }) => verdict === "pass").length;
console.log(
  `PASS research assertions: ${passed} pass rows, ${rows.length - passed} unsupported rows. Overall invocation contract: UNSUPPORTED.`,
);
console.log("Report: proofs/zinn-shell-bridge/CAPABILITIES.md (full evidence: results.json)");
