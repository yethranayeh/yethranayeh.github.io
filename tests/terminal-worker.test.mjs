import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import sqlite3InitModule from "@sqlite.org/sqlite-wasm";
import { IDBFactory, IDBKeyRange } from "fake-indexeddb";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let workerSequence = 0;

const resolveSrcAlias = {
  name: "portfolio-src-alias",
  setup(esbuild) {
    esbuild.onResolve({ filter: /^@\// }, ({ path: specifier }) => {
      const sourcePath = path.resolve(root, "src", specifier.slice(2));
      return { path: fs.existsSync(sourcePath) ? sourcePath : sourcePath.replace(/\.js$/, ".ts") };
    });
    esbuild.onResolve({ filter: /\.js$/ }, ({ path: specifier, resolveDir }) => {
      const resolved = path.resolve(resolveDir, specifier);
      const sourcePath = resolved.replace(/\.js$/, ".ts");
      if (!fs.existsSync(resolved) && fs.existsSync(sourcePath)) return { path: sourcePath };
    });
    esbuild.onResolve({ filter: /^@sqlite\.org\/sqlite-wasm$/ }, () => ({
      path: "sqlite-wasm-test-shim",
      namespace: "terminal-test",
    }));
    esbuild.onLoad({ filter: /^sqlite-wasm-test-shim$/, namespace: "terminal-test" }, () => ({
      // The Node build resolves its adjacent WASM itself; ignore the browser locateFile URL.
      contents: "export default () => globalThis.__terminalSqliteInitModule();",
      loader: "js",
    }));
    esbuild.onResolve({ filter: /\.wasm\?url$/ }, () => ({
      path: "wasm-url-test-shim",
      namespace: "terminal-test",
    }));
    esbuild.onLoad({ filter: /^wasm-url-test-shim$/, namespace: "terminal-test" }, () => ({
      contents: 'export default "";',
      loader: "js",
    }));
  },
};

async function bundleDataUrl(entryPoint) {
  const bundle = await build({
    entryPoints: [entryPoint],
    bundle: true,
    platform: "node",
    format: "esm",
    write: false,
    plugins: [resolveSrcAlias],
  });
  return `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
}

const workerUrl = await bundleDataUrl(
  path.join(root, "src/features/TerminalWindow/zinn.worker.ts"),
);
const adapterUrl = await bundleDataUrl(
  path.join(root, "src/features/TerminalWindow/sqlite-driver.ts"),
);
const { openMemoryDatabase, createWasmDriver } = await import(adapterUrl);

function useFreshIndexedDb() {
  globalThis.indexedDB = new IDBFactory();
  globalThis.IDBKeyRange = IDBKeyRange;
  globalThis.__terminalSqliteInitModule = sqlite3InitModule;
}

async function makeWorker() {
  const pending = new Map();
  let id = 0;
  const fakeSelf = {
    onmessage: undefined,
    postMessage(message) {
      const request = pending.get(message.id);
      if (!request) return;
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error));
      else request.resolve(message.result);
    },
  };
  globalThis.self = fakeSelf;
  workerSequence += 1;
  await import(`${workerUrl}#worker-${workerSequence}`);

  return {
    request(args, bytes) {
      const requestId = ++id;
      return new Promise((resolve, reject) => {
        pending.set(requestId, { resolve, reject });
        fakeSelf.onmessage({ data: { id: requestId, args, bytes } });
      });
    },
  };
}

async function readStoredSnapshot() {
  const database = await new Promise((resolve, reject) => {
    const request = indexedDB.open("portfolio-zinn-playground", 1);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction("snapshots", "readonly");
      const request = transaction.objectStore("snapshots").get("board");
      transaction.oncomplete = () => resolve(request.result);
      transaction.onabort = transaction.onerror = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
}

async function replaceStoredSnapshot(bytes) {
  const database = await new Promise((resolve, reject) => {
    const request = indexedDB.open("portfolio-zinn-playground", 1);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  try {
    const current = await readStoredSnapshot();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction("snapshots", "readwrite");
      transaction.objectStore("snapshots").put({ revision: current.revision + 1, bytes }, "board");
      transaction.oncomplete = resolve;
      transaction.onabort = transaction.onerror = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
}

async function makeSchemaV2Snapshot(bytes) {
  const sqlite = await sqlite3InitModule();
  const connection = openMemoryDatabase(sqlite, bytes);
  const driver = createWasmDriver(sqlite, connection);
  const database = driver.connect(":memory:");
  try {
    database.exec("ALTER TABLE task DROP COLUMN due_at; PRAGMA user_version = 2;");
    return new Uint8Array(sqlite.capi.sqlite3_js_db_export(connection.pointer));
  } finally {
    database.close();
  }
}

test("worker RPC persists, exports, imports, upgrades, and recovers the isolated Zinn playground", async () => {
  useFreshIndexedDb();
  const firstWorker = await makeWorker();

  const board = await firstWorker.request([]);
  assert.match(board.text, /YOUR ZINN BOARD/);
  assert.match(board.text, /Explore the desktop/);

  const created = await firstWorker.request(["task", "create", "A durable sample"]);
  assert.match(created.text, /Created PLAY-4/);
  const edited = await firstWorker.request([
    "task",
    "edit",
    "PLAY-4",
    "--title",
    "The saved sample",
  ]);
  assert.match(edited.text, /Updated PLAY-4: The saved sample/);

  const backup = await firstWorker.request(["export"]);
  assert.ok(backup.bytes instanceof Uint8Array);
  assert.equal(new TextDecoder().decode(backup.bytes.slice(0, 16)), "SQLite format 3\0");

  await firstWorker.request(["task", "edit", "PLAY-4", "--title", "A later change"]);
  assert.match((await firstWorker.request(["task", "show", "PLAY-4"])).text, /A later change/);

  const imported = await firstWorker.request(["import", "backup.sqlite"], backup.bytes);
  assert.match(imported.text, /Imported your playground backup/);
  assert.match((await firstWorker.request(["task", "show", "PLAY-4"])).text, /The saved sample/);

  const beforeBadImport = await readStoredSnapshot();
  await assert.rejects(
    firstWorker.request(["import", "backup.sqlite"], new Uint8Array([1, 2, 3, 4])),
    /valid Zinn playground SQLite backup/,
  );
  const afterBadImport = await readStoredSnapshot();
  assert.equal(afterBadImport.revision, beforeBadImport.revision);
  assert.match((await firstWorker.request(["task", "show", "PLAY-4"])).text, /The saved sample/);

  // A new worker models a page reload: only IndexedDB, not the old worker's memory, survives.
  const secondWorker = await makeWorker();
  assert.match((await secondWorker.request(["task", "show", "PLAY-4"])).text, /The saved sample/);

  // Emulate an older supported database saved by a previous portfolio build.
  const v2Snapshot = await makeSchemaV2Snapshot(backup.bytes);
  await replaceStoredSnapshot(v2Snapshot);
  const beforeUpgrade = await readStoredSnapshot();
  const upgradeWorker = await makeWorker();
  assert.match((await upgradeWorker.request(["task", "show", "PLAY-4"])).text, /The saved sample/);
  const afterUpgrade = await readStoredSnapshot();
  assert.equal(afterUpgrade.revision, beforeUpgrade.revision + 1);

  // A corrupt stored image must still allow an explicit reset recovery in that same worker.
  await replaceStoredSnapshot(new Uint8Array([0, 1, 2, 3]));
  const recoveryWorker = await makeWorker();
  const corruptSnapshot = await readStoredSnapshot();
  for (const args of [
    ["-h"],
    ["--version"],
    ["task", "create", "--help"],
    ["reset", "--yes", "-h"],
    ["import", "--help"],
    ["export", "-h"],
  ]) {
    const info = await recoveryWorker.request(args);
    assert.match(info.text, /ZINN PLAYGROUND|Zinn playground/);
    assert.equal(info.bytes, undefined);
    assert.equal(info.persistence, undefined);
  }
  assert.deepEqual(await readStoredSnapshot(), corruptSnapshot);
  await assert.rejects(
    recoveryWorker.request([]),
    /Import a playground backup or type zinn reset --yes/,
  );
  const recovered = await recoveryWorker.request(["reset", "--yes"]);
  assert.match(recovered.text, /reset to the three sample tasks/);
  const resetBoard = await recoveryWorker.request([]);
  assert.match(resetBoard.text, /YOUR ZINN BOARD/);
  assert.match(resetBoard.text, /Explore the desktop/);
  assert.doesNotMatch(resetBoard.text, /The saved sample/);
  const resetSnapshot = await readStoredSnapshot();
  assert.equal(new TextDecoder().decode(resetSnapshot.bytes.slice(0, 16)), "SQLite format 3\0");
});

test("worker help and version work before SQLite or storage initialization", async () => {
  useFreshIndexedDb();
  globalThis.__terminalSqliteInitModule = () => {
    throw new Error("Help and version must not initialize SQLite.");
  };
  const worker = await makeWorker();
  for (const args of [
    ["help"],
    ["--help"],
    ["-h"],
    ["-v"],
    ["--version"],
    ["task", "-h"],
    ["help", "task", "list"],
  ]) {
    const info = await worker.request(args);
    assert.match(info.text, /ZINN PLAYGROUND|Zinn playground/);
    assert.equal(info.persistence, undefined);
  }
  assert.deepEqual(await indexedDB.databases(), []);
});

test("worker parses options consistently and help or invalid arguments cannot mutate tasks", async () => {
  useFreshIndexedDb();
  const worker = await makeWorker();
  const original = await worker.request(["task", "list"]);
  const before = await readStoredSnapshot();
  for (const args of [
    ["task", "create", "-h"],
    ["task", "create", "A title", "--priority=high", "--help"],
    ["task", "edit", "PLAY-1", "--title=Changed", "--help"],
    ["task", "archive", "PLAY-1", "-h"],
    ["reset", "--yes", "--help"],
  ]) {
    assert.match((await worker.request(args)).text, /Usage: zinn/);
  }
  for (const [args, error] of [
    [["task", "create", "-x"], /Unknown option: -x/],
    [["task", "create", "Title", "--unknown=value"], /Unknown option/],
    [["task", "create", "Title", "--priority"], /Provide a value/],
    [["task", "create", "Title", "--description", "-h"], /Provide a value/],
    [["task", "create", "Title", "--priority=high", "--priority", "low"], /only once/],
    [["task", "edit", "PLAY-1", "extra", "--title=Changed"], /Usage:/],
    [["task", "show", "PLAY-1", "extra"], /Usage:/],
    [["columns", "--unknown"], /Unknown option/],
    [["search", "-x"], /Unknown option/],
    [["export", "one.sqlite", "two.sqlite"], /Usage:/],
    [["import"], /Usage:/],
    [["reset"], /type zinn reset --yes/],
    [["reset", "--yes=false"], /does not take a value/],
    [["reset", "--yes", "--yes"], /only once/],
    [["help", "unknown"], /Unknown Zinn command/],
  ]) {
    await assert.rejects(worker.request(args), error);
  }
  assert.equal((await worker.request(["task", "list"])).text, original.text);
  assert.deepEqual(await readStoredSnapshot(), before);

  const created = await worker.request([
    "task",
    "create",
    "An option sample",
    "--column=Review",
    "--description=value=with spaces",
    "--priority=high",
  ]);
  assert.match(created.text, /Created PLAY-4/);
  const shown = await worker.request(["task", "show", "PLAY-4"]);
  assert.match(shown.text, /Column: Review\nPriority: high/);
  assert.match(shown.text, /value=with spaces/);
  assert.match((await worker.request(["task", "list", "--column=Review"])).text, /PLAY-4/);

  const literal = await worker.request(["task", "create", "--description=--help", "--", "-h"]);
  assert.match(literal.text, /Created PLAY-5: -h/);
  const literalTask = await worker.request(["task", "show", "PLAY-5"]);
  assert.match(literalTask.text, /PLAY-5  -h/);
  assert.match(literalTask.text, /\n\n--help$/);
  await worker.request(["task", "edit", "PLAY-5", "--title=-v"]);
  assert.match((await worker.request(["task", "show", "PLAY-5"])).text, /PLAY-5  -v/);
  assert.doesNotMatch((await worker.request(["search", "--", "-h"])).text, /ZINN PLAYGROUND/);
});
