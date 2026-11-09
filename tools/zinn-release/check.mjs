import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import sqliteInit from "@sqlite.org/sqlite-wasm";
import { prepare, proof, root } from "./prepare.mjs";
import {
  earlyCases,
  invalidCases,
  operationCases,
  files,
  comparable,
} from "../../proofs/zinn-release/conformance.js";

await prepare();
const browser = await import(pathToFileURL(path.join(proof, "generated/browser-cli.js")));
browser.initialize(await sqliteInit(), { files });
const { parsedRoutes } = await import(
  pathToFileURL(path.join(root, "node_modules/@zinn-dev/cli/src/routes/routes.js"))
);
const helpCases = parsedRoutes.map(({ command }) => [...command.split(" "), "--help"]);
const temp = await mkdtemp(path.join(os.tmpdir(), "port-zinn-release-"));
const store = path.join(temp, "store");
const home = path.join(temp, "home");
const note = path.join(temp, "note.txt");
await mkdir(store);
await mkdir(home);
await writeFile(note, files["/visitor/note.txt"]);
const rows = [];
const hash = (bytes) => (bytes ? createHash("sha256").update(bytes).digest("hex") : null);
const env = {
  PATH: process.env.PATH,
  HOME: home,
  ZINN_DIR: store,
  ZINN_HOOKS: "0",
  NO_COLOR: "1",
  FORCE_COLOR: "0",
  TZ: "UTC",
  NODE_NO_WARNINGS: "1",
  GIT_CONFIG_NOSYSTEM: "1",
  GIT_CONFIG_GLOBAL: path.join(temp, "no-git-config"),
  GIT_CONFIG_COUNT: "1",
  GIT_CONFIG_KEY_0: "user.name",
  GIT_CONFIG_VALUE_0: "Visitor",
};
function native(argv, color = false, columns) {
  const nativeArgv = argv.map((arg) => arg.replaceAll("/visitor/note.txt", note));
  const result = spawnSync(
    process.execPath,
    [
      "--import",
      path.join(root, "tools/zinn-release/native-terminal.mjs"),
      path.join(root, "node_modules/@zinn-dev/cli/index.js"),
      ...nativeArgv,
    ],
    {
      cwd: temp,
      env: {
        ...env,
        FORCE_COLOR: color ? "1" : "0",
        NO_COLOR: color ? "" : "1",
        ...(columns ? { PORT_PROOF_COLUMNS: String(columns) } : {}),
      },
      encoding: "utf8",
      timeout: 15_000,
    },
  );
  assert.ifError(result.error);
  assert.equal(result.signal, null);
  return { stdout: result.stdout, stderr: result.stderr, status: result.status };
}
async function check(argv, { readonly = false, color = false, columns, expectStatus } = {}) {
  const before = browser.inspect();
  const bytesBefore = hash(browser.snapshot());
  const nativeBefore = readonly
    ? hash(await readFile(path.join(store, "data/zinn.sqlite")).catch(() => undefined))
    : null;
  const expected = native(argv, color, columns);
  if (readonly)
    assert.equal(
      hash(await readFile(path.join(store, "data/zinn.sqlite")).catch(() => undefined)),
      nativeBefore,
      "native board unchanged",
    );
  const actual = await browser.invoke(argv, { color, columns, tty: columns !== undefined });
  const nativeNormalized = comparable(expected, { store, note });
  const browserNormalized = comparable(actual);
  assert.deepEqual(browserNormalized, nativeNormalized, `native/browser: ${JSON.stringify(argv)}`);
  if (expectStatus !== undefined) assert.equal(actual.status, expectStatus, JSON.stringify(argv));
  if (readonly) {
    assert.deepEqual(
      actual.metrics,
      before,
      `must not open board/read files: ${JSON.stringify(argv)}`,
    );
    assert.equal(hash(browser.snapshot()), bytesBefore, "snapshot unchanged");
  }
  rows.push({
    argv,
    color,
    columns,
    readonly,
    expected: nativeNormalized,
    metrics: actual.metrics,
  });
}
try {
  for (const argv of [...earlyCases, ...helpCases])
    await check(argv, { readonly: true, expectStatus: 0 });
  for (const argv of invalidCases) {
    await check(argv, { readonly: true, expectStatus: 1 });
    if (!argv.includes("--json"))
      await check([...argv, "--json"], { readonly: true, expectStatus: 1 });
  }
  assert.equal(browser.inspect().exists, false);
  await assert.rejects(readFile(path.join(store, "data/zinn.sqlite")), { code: "ENOENT" });
  for (const argv of operationCases) await check(argv);
  for (const argv of [...earlyCases, ...helpCases, ...invalidCases])
    await check(argv, { readonly: true });
  for (const argv of [
    ["task", "list", "PLAY"],
    ["task", "view", "PLAY-1"],
    ["task", "search", "Edited", "PLAY"],
  ]) {
    await check(argv, { color: true, expectStatus: 0 });
  }
  for (const columns of [40, 80, 120]) {
    await check(["task", "list", "PLAY"], { columns, color: true, expectStatus: 0 });
    await check(["task", "view", "PLAY-1"], { columns, color: true, expectStatus: 0 });
  }
  // Validate persisted operations beyond normalized output, then reload that SQLite image.
  const listed = JSON.parse((await browser.invoke(["task", "list", "PLAY", "--json"])).stdout);
  assert.match(JSON.stringify(listed), /Edited browser task/);
  assert.match(JSON.stringify(listed), /Virtual file content/);
  const view = JSON.parse((await browser.invoke(["task", "view", "PLAY-1", "--json"])).stdout);
  assert.equal(view.column, "Done");
  assert.equal(view.priority, null);
  assert.equal(view.due_at, 1893456000000);
  assert.match(view.description, /- literal text\n\nappend text/);
  const bytes = browser.snapshot();
  const restored = await import(
    `${pathToFileURL(path.join(proof, "generated/browser-cli.js"))}?restored`
  );
  restored.initialize(await sqliteInit(), { snapshot: bytes });
  assert.deepEqual(
    JSON.parse((await restored.invoke(["task", "list", "PLAY", "--json"])).stdout),
    listed,
  );
  assert.equal(new TextDecoder().decode(bytes.slice(0, 16)), "SQLite format 3\0");
  const nativeIdentity = JSON.parse(native(["whoami", "--json"]).stdout);
  const visitorResult = await browser.invoke(["whoami", "--json"]);
  const visitorIdentity = JSON.parse(visitorResult.stdout);
  assert.equal(visitorResult.status, 0);
  assert.equal(nativeIdentity.actor_source, "git-config");
  assert.equal(visitorIdentity.actor_source, "os-user");
  assert.equal(visitorIdentity.actor_name, "Visitor");
  assert.deepEqual({ ...nativeIdentity, actor_source: "os-user" }, visitorIdentity);
  const differences = [
    {
      argv: ["whoami", "--json"],
      native: nativeIdentity,
      browser: visitorIdentity,
      reason: "virtual visitor identity instead of native Git identity",
    },
  ];
  const sink = [];
  const queued = await Promise.all([
    browser.invoke(["--version"], { stdout: (text) => sink.push(text) }),
    browser.invoke(["task", "create", "--help"]),
  ]);
  assert.deepEqual(sink, ["0.44.0\n"]);
  assert.equal(queued[0].stdout, "0.44.0\n");
  assert.match(queued[1].stdout, /^Usage: zinn task create/);
  assert.equal(hash(browser.snapshot()), hash(bytes));
  const noChanges = hash(bytes);
  const hostOnly = await browser.invoke(["backup"]);
  assert.equal(hostOnly.status, 1);
  assert.match(hostOnly.stderr, /Browser capability unavailable/);
  assert.equal(hash(browser.snapshot()), noChanges);
  await mkdir(path.join(proof, "results"), { recursive: true });
  await writeFile(
    path.join(proof, "generated/native-reference.json"),
    JSON.stringify({ identity: browser.identity, differences, rows }, null, 2) + "\n",
  );
  await writeFile(
    path.join(proof, "results/conformance.json"),
    JSON.stringify(
      {
        passed: rows.length,
        differences,
        node: process.version,
        sqliteBytes: bytes.length,
        metrics: browser.inspect(),
        normalizedFields: [
          "UUIDs",
          "creation/update times",
          "local timestamp display",
          "temporary store/file paths",
        ],
      },
      null,
      2,
    ) + "\n",
  );
  console.log(
    `PASS: ${rows.length} native/browser comparisons, read-only help/invalid guards, canonical mutations, color and virtual text file.`,
  );
} finally {
  await rm(temp, { recursive: true, force: true });
}
