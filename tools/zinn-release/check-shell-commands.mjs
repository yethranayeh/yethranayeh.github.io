import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import sqliteInit from "@sqlite.org/sqlite-wasm";
import { prepare, proof, root } from "./prepare.mjs";
import {
  earlyCases,
  invalidCases,
  operationCases,
  files,
  comparable,
} from "../../proofs/zinn-release/conformance.js";
import { runCommandsSuite } from "../../proofs/zinn-shell-bridge/commands-suite.js";

const packageRoot = path.join(root, "node_modules/@everruns/bashkit-wasm");
const manifest = JSON.parse(await readFile(path.join(packageRoot, "package.json"), "utf8"));
const declarations = await readFile(path.join(packageRoot, "index.d.ts"), "utf8");
const wasm = await readFile(path.join(packageRoot, "bashkit_wasm_bg.wasm"));
assert.equal(manifest.version, "0.20.3");
assert.match(declarations, /commands\?: Record<string, CommandCallback>/);
assert.match(declarations, /Promise<number \| \{ exitCode: number \}>/);
assert.match(declarations, /=> string \| Promise<string>/);
const contextDeclaration = declarations.match(/export interface CommandContext \{[\s\S]*?\n\}/)[0];
assert.doesNotMatch(contextDeclaration, /isTTY|destination|columns/);
const lock = JSON.parse(await readFile(path.join(root, "package-lock.json"), "utf8"));
assert.equal(
  lock.packages["node_modules/@everruns/bashkit-wasm"].integrity,
  "sha512-Yau4chwoMe/vHsuCZU/TopP6KAKaQiAJRYG5eP3hTzlRBhkwv6AnzArPt04pxidACbZ7reo1US8AJU99+/eQCA==",
);
await initBashkit(wasm);
await prepare();
const runtime = await import(pathToFileURL(path.join(proof, "generated/browser-cli.js")));
runtime.initialize(await sqliteInit(), { files });
const { parsedRoutes } = await import(
  pathToFileURL(path.join(root, "node_modules/@zinn-dev/cli/src/routes/routes.js"))
);
const cases = [
  ...[...earlyCases, ...parsedRoutes.map(({ command }) => [...command.split(" "), "--help"])].map(
    (argv) => ({ argv, readonly: true }),
  ),
  ...invalidCases
    .flatMap((argv) => [argv, ...(argv.includes("--json") ? [] : [[...argv, "--json"]])])
    .map((argv) => ({ argv, readonly: true })),
  ...operationCases.map((argv) => ({ argv })),
];
// Expected booleans are independent fixtures, checked against the actual native CLI.
const policies = [
  ["plain-default", {}, false],
  ["no-color", { NO_COLOR: "1" }, false],
  ["no-color-zero", { NO_COLOR: "0" }, false],
  ["force-off", { FORCE_COLOR: "0" }, false],
  ["force-on", { FORCE_COLOR: "1" }, true],
  ["force-wins", { FORCE_COLOR: "2", NO_COLOR: "1" }, true],
  ["force-literal-false", { FORCE_COLOR: "false", NO_COLOR: "1" }, true],
  ["empty-overrides", { FORCE_COLOR: "", NO_COLOR: "" }, false],
  ["empty-force-no-color", { FORCE_COLOR: "", NO_COLOR: "yes" }, false],
];
for (const columns of [40, 80, 120])
  for (const [policy, env, color] of policies)
    for (const argv of [
      ["task", "list", "PLAY"],
      ["task", "view", "PLAY-1"],
    ])
      cases.push({ argv, columns, policy, env, color });

const temp = await mkdtemp(path.join(os.tmpdir(), "port-zinn-commands-"));
const store = path.join(temp, "store");
const home = path.join(temp, "home");
const note = path.join(temp, "note.txt");
await mkdir(store);
await mkdir(home);
await writeFile(note, files["/visitor/note.txt"]);
let opened = false;
const evidence = await runCommandsSuite({
  Bash,
  runtime,
  cases,
  async reference(item) {
    const { argv, env = {}, columns = 80, readonly } = item;
    if (!readonly && !opened) {
      assert.deepEqual(runtime.inspect().opens > 0, true);
      await assert.rejects(readFile(path.join(store, "data/zinn.sqlite")), { code: "ENOENT" });
      opened = true;
    }
    const native = spawnSync(
      process.execPath,
      [
        "--import",
        path.join(root, "tools/zinn-release/native-terminal.mjs"),
        path.join(root, "node_modules/@zinn-dev/cli/index.js"),
        ...argv.map((arg) => arg.replaceAll("/visitor/note.txt", note)),
      ],
      {
        cwd: temp,
        encoding: "utf8",
        timeout: 15_000,
        env: {
          PATH: process.env.PATH,
          HOME: home,
          ZINN_DIR: store,
          ZINN_HOOKS: "0",
          TZ: "UTC",
          NODE_NO_WARNINGS: "1",
          PORT_PROOF_COLUMNS: String(columns),
          GIT_CONFIG_NOSYSTEM: "1",
          GIT_CONFIG_GLOBAL: path.join(temp, "no-git-config"),
          GIT_CONFIG_COUNT: "1",
          GIT_CONFIG_KEY_0: "user.name",
          GIT_CONFIG_VALUE_0: "Visitor",
          // Explicit plain default on a native terminal with matching caller geometry.
          NO_COLOR: "1",
          ...env,
          ...(!(env.FORCE_COLOR ?? "").length && !(env.NO_COLOR ?? "1").length
            ? { FORCE_COLOR: "0" }
            : {}),
        },
      },
    );
    assert.ifError(native.error);
    assert.equal(native.signal, null);
    return comparable(
      { stdout: native.stdout, stderr: native.stderr, status: native.status },
      { store, note },
    );
  },
});
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
const summary = {
  bashkit: manifest.version,
  node: process.version,
  wasmSha256: hash(wasm),
  declarationsSha256: hash(declarations),
  passed: evidence.rows.length,
  nativeComparisons: cases.length,
  policyComparisons: cases.filter((item) => item.policy).length,
  ...evidence,
};
const output = path.join(root, "proofs/zinn-shell-bridge");
await writeFile(
  path.join(output, "commands-results.json"),
  JSON.stringify(summary, null, 2) + "\n",
);
await writeFile(
  path.join(output, "commands-reference.json"),
  JSON.stringify(
    {
      cases: evidence.rows
        .filter(({ id }) => id.startsWith("released-"))
        .map(({ argv, columns, policy, env, color, readonly, expected }) => ({
          argv,
          columns,
          policy,
          env,
          color,
          readonly,
          expected,
        })),
      expectedRows: evidence.rows.length,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `PASS: ${summary.passed} commands checks, ${cases.length} native/released comparisons, ${summary.policyComparisons} explicit color/width cases. Automatic TTY unavailable, deferred to PORT-18.`,
);
