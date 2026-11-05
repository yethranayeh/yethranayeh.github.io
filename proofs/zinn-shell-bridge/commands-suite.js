import { commandContext, zinnCommand } from "./commands-adapter.js";
import { comparable } from "../zinn-release/conformance.js";

const encode = (text) => new TextEncoder().encode(text);
const result = (stdout = "", stderr = "", exitCode = 0) => ({ stdout, stderr, exitCode });
const capture = ({ stdout, stderr, exitCode }) => ({ stdout, stderr, exitCode });
const shellQuote = (text) => `'${text.replaceAll("'", "'\\''")}'`;
export function equal(actual, expected, label) {
  if (JSON.stringify(actual) !== JSON.stringify(expected))
    throw new Error(`${label}: ${JSON.stringify(actual)} != ${JSON.stringify(expected)}`);
}

/** The same assertions run with the real WASM in Node and a browser worker. */
export async function runCommandsSuite({ Bash, runtime, cases, reference }) {
  equal(
    runtime.inspect(),
    { exists: false, opens: 0, fileReads: 0, directoryWrites: 0, bytes: 0 },
    "fresh runtime",
  );
  const rows = [];
  async function check(id, bash, script, expected, files = {}) {
    const execution = await bash.execute(script);
    equal(capture(execution), expected, id);
    equal([...execution.stdoutBytes], [...encode(expected.stdout)], `${id}: stdout bytes`);
    equal([...execution.stderrBytes], [...encode(expected.stderr)], `${id}: stderr bytes`);
    equal([execution.stdoutTruncated, execution.stderrTruncated], [false, false], `${id}: capture`);
    for (const [file, text] of Object.entries(files))
      equal([...bash.readFileBytes(file)], [...encode(text)], `${id}: ${file}`);
    rows.push({ id, script, expected, observed: capture(execution), files, verdict: "pass" });
    return execution;
  }
  const targets = {
    t0: { stdout: "O0\n", stderr: "", status: 0 },
    t0err: { stdout: "O0\n", stderr: "E0", status: 0 },
    t2: { stdout: "O2\n", stderr: "E2", status: 2 },
    t7: { stdout: "O7\n", stderr: "E7", status: 7 },
    unicode: {
      stdout: "İstanbul 🦀 日本語\n\n",
      stderr: "é diagnostic without newline",
      status: 7,
    },
    large: { stdout: "🦀é\0".repeat(1500) + "\n\n", stderr: "終\n", status: 0 },
  };
  const events = [];
  const bash = new Bash({
    commands: {
      target: zinnCommand(async (argv) => {
        equal(argv.length, 1, "command argv excludes its name");
        events.push(`start:${argv[0]}`);
        await new Promise((resolve) => setTimeout(resolve, 1));
        events.push(`end:${argv[0]}`);
        return targets[argv[0]];
      }),
    },
    customBuiltins: {
      legacy: () => "LEGACY\n",
      rejected: () => {
        throw new Error("ERR");
      },
    },
  });
  for (const [name, value] of Object.entries(targets))
    await check(
      `transport-${name}`,
      bash,
      `target ${name}`,
      result(value.stdout, value.stderr, value.status),
    );
  await check("legacy-return", bash, "legacy", result("LEGACY\n"));
  await check("legacy-rejection", bash, "rejected", result("", "rejected: ERR\n", 1));
  for (const status of [0, 2, 7]) {
    const value = targets[`t${status}`];
    await check(
      `immediate-${status}`,
      bash,
      `target t${status}; printf 'status=%s\\n' "$?"`,
      result(value.stdout + `status=${status}\n`, value.stderr),
    );
  }
  for (const [id, script, expected, files] of [
    ["and-success", "target t0 && echo YES", result("O0\nYES\n")],
    ["and-failure", "target t7 && echo NEVER", result("O7\n", "E7", 7)],
    ["or-success", "target t0 || echo NEVER", result("O0\n")],
    ["or-failure", "target t2 || echo RECOVERED", result("O2\nRECOVERED\n", "E2")],
    ["stdout-pipe", "target t7 | cat", result("O7\n", "E7")],
    ["pipefail", "set -o pipefail; target t7 | cat", result("O7\n", "E7", 7)],
    ["reset-pipefail", "set +o pipefail", result()],
    [
      "stdout-file",
      "target unicode > /tmp/out",
      result("", targets.unicode.stderr, 7),
      { "/tmp/out": targets.unicode.stdout },
    ],
    [
      "stderr-file",
      "target unicode 2> /tmp/err",
      result(targets.unicode.stdout, "", 7),
      { "/tmp/err": targets.unicode.stderr },
    ],
    [
      "separate-files",
      "target unicode > /tmp/out 2> /tmp/err",
      result("", "", 7),
      { "/tmp/out": targets.unicode.stdout, "/tmp/err": targets.unicode.stderr },
    ],
    [
      "combined-file",
      "target unicode > /tmp/both 2>&1",
      result("", "", 7),
      { "/tmp/both": targets.unicode.stdout + targets.unicode.stderr },
    ],
    [
      "redirect-order",
      "target t7 2>&1 > /tmp/order",
      result("E7", "", 7),
      { "/tmp/order": "O7\n" },
    ],
    ["combined-pipe", "target t7 2>&1 | cat", result("O7\nE7")],
    [
      "large-file",
      "target large > /tmp/large",
      result("", "終\n"),
      { "/tmp/large": targets.large.stdout },
    ],
    ["async-sequence", "target t0; target t7; target t2", result("O0\nO7\nO2\n", "E7E2", 2)],
    ["next-call-isolation", "target t0", result("O0\n")],
  ])
    await check(id, bash, script, expected, files);
  for (let index = 0; index < events.length; index += 2)
    equal(
      events[index].replace("start:", ""),
      events[index + 1].replace("end:", ""),
      "awaited calls",
    );

  // Assert await semantics even when each writer is delayed, and no argv rewriting.
  const argv = ["--", "-literal", "quoted title"];
  const writes = [];
  const status = await zinnCommand(async (received) => {
    if (received !== argv) throw new Error("Adapter rewrote argv");
    return targets.unicode;
  })({
    argv,
    env: {},
    ...Object.fromEntries(
      ["stdout", "stderr"].map((channel) => [
        channel,
        {
          async write(bytes) {
            await new Promise((resolve) => setTimeout(resolve, 1));
            writes.push([channel, new TextDecoder().decode(bytes)]);
          },
        },
      ]),
    ),
  });
  equal(
    [status, writes],
    [
      7,
      [
        ["stdout", targets.unicode.stdout],
        ["stderr", targets.unicode.stderr],
      ],
    ],
    "await writes",
  );
  rows.push({ id: "await-writers-unchanged-argv", verdict: "pass" });
  const failure = new Error("original invocation failure");
  let caught;
  try {
    await zinnCommand(async () => {
      throw failure;
    })({ argv, env: {} });
  } catch (error) {
    caught = error;
  }
  if (caught !== failure) throw new Error("Adapter changed the invocation error");
  rows.push({ id: "invocation-error-preserved", verdict: "pass" });

  const contexts = [];
  const probe = new Bash({
    env: { TERM: "xterm-256color", COLUMNS: "999" },
    commands: {
      async context(ctx) {
        contexts.push({
          keys: Object.keys(ctx).sort(),
          argv: ctx.argv,
          env: ctx.env,
          cwd: ctx.cwd,
          stdout: Object.keys(ctx.stdout),
          stderr: Object.keys(ctx.stderr),
        });
        await ctx.stdout.write(encode("CONTEXT\n"));
        return { exitCode: 0 };
      },
    },
  });
  for (const script of ["context arg", "context arg | cat", "context arg > /tmp/context"])
    await probe.execute(script);
  equal(contexts[0], contexts[1], "pipe has no declared destination metadata");
  equal(contexts[0], contexts[2], "redirect has no declared destination metadata");
  equal(
    contexts[0].keys,
    ["argv", "cwd", "env", "fs", "name", "stderr", "stdin", "stdout"],
    "context fields",
  );

  let last;
  const shells = new Map();
  const calls = [];
  function shell(columns = 80) {
    const instance = new Bash({
      env: { TERM: "xterm-256color", COLUMNS: "999" },
      commands: {
        zinn: zinnCommand(
          async (argv, context) => {
            const invocation = await runtime.invoke(argv, context);
            last = { argv, context, ...invocation };
            calls.push(last);
            return invocation;
          },
          { columns },
        ),
      },
    });
    return instance;
  }
  for (const [index, item] of cases.entries()) {
    const { argv, columns = 80, env = {}, readonly = false } = item;
    const prefix = Object.entries(env)
      .map(([key, value]) => `${key}=${shellQuote(value)}`)
      .join(" ");
    const script = `${prefix ? prefix + " " : ""}zinn ${argv.map(shellQuote).join(" ")}`;
    if (!shells.has(columns)) shells.set(columns, shell(columns));
    const before = runtime.inspect();
    const execution = await shells.get(columns).execute(script);
    equal(last.argv, argv, "released argv excludes zinn and preserves expanded arguments");
    equal(
      capture(execution),
      result(last.stdout, last.stderr, last.status),
      `released transport ${index}`,
    );
    equal([...execution.stdoutBytes], [...encode(last.stdout)], `released stdout bytes ${index}`);
    equal([...execution.stderrBytes], [...encode(last.stderr)], `released stderr bytes ${index}`);
    if (readonly) equal(runtime.inspect(), before, `read-only metrics ${index}`);
    if (item.color !== undefined)
      equal(last.stdout.includes("\x1b["), item.color, `explicit ANSI policy ${index}`);
    const expected = reference ? await reference(item, last) : item.expected;
    equal(comparable(last), expected, `native/released comparison ${index}`);
    rows.push({
      id: `released-${index}`,
      ...item,
      expected,
      observed: comparable(last),
      context: last.context,
      verdict: "pass",
    });
  }
  const help = await runtime.invoke(["--help"]);
  const version = await runtime.invoke(["--version"]);
  const invalid = await runtime.invoke(["--definitely-invalid"]);
  const routing = shell();
  await check(
    "zinn-help-pipe",
    routing,
    "zinn --help | cat",
    result(help.stdout, help.stderr, help.status),
  );
  await check("zinn-version-file", routing, "zinn --version > /tmp/version", result(), {
    "/tmp/version": version.stdout,
  });
  await check(
    "zinn-invalid-stderr",
    routing,
    "zinn --definitely-invalid 2> /tmp/error",
    result("", "", invalid.status),
    { "/tmp/error": invalid.stderr },
  );
  for (const columns of [40, 80, 120]) {
    for (const [policy, env] of [
      ["plain", {}],
      ["no-color", { NO_COLOR: "1" }],
      ["forced", { FORCE_COLOR: "1", NO_COLOR: "1" }],
    ]) {
      const direct = await runtime.invoke(["task", "view", "PLAY-1"], commandContext(env, columns));
      const instance = shell(columns);
      const prefix = Object.entries(env)
        .map(([key, value]) => `${key}=${shellQuote(value)}`)
        .join(" ");
      const command = `${prefix} zinn task view PLAY-1`;
      await check(
        `color-pipe-${columns}-${policy}`,
        instance,
        `${command} | cat`,
        result(direct.stdout, direct.stderr, direct.status),
      );
      await check(
        `color-redirect-${columns}-${policy}`,
        instance,
        `${command} > /tmp/view 2> /tmp/err`,
        result("", "", direct.status),
        { "/tmp/view": direct.stdout, "/tmp/err": direct.stderr },
      );
      await check(
        `color-combined-${columns}-${policy}`,
        instance,
        `${command} > /tmp/combined 2>&1`,
        result("", "", direct.status),
        { "/tmp/combined": direct.stdout + direct.stderr },
      );
    }
  }
  const overlapping = await Promise.all([
    shell().execute("zinn --version"),
    shell().execute("zinn --help"),
  ]);
  equal(
    overlapping.map(capture),
    [result(version.stdout), result(help.stdout)],
    "runtime queue isolation",
  );
  rows.push({ id: "overlapping-runtime-isolation", verdict: "pass" });
  return {
    rows,
    contexts,
    asyncEvents: events,
    calls: calls.length,
    metrics: runtime.inspect(),
    automaticTTY: { verdict: "unavailable", deferred: "PORT-18", gating: false },
    identity: runtime.identity,
  };
}
