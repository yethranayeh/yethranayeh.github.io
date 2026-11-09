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
    banner: { js: "const self = globalThis.__terminalSelf;" },
  });
  return `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
}

const workerUrl = await bundleDataUrl(
  path.join(root, "src/features/TerminalWindow/zinn.worker.ts"),
);
const adapterUrl = await bundleDataUrl(
  path.join(root, "src/features/TerminalWindow/sqlite-driver.ts"),
);
const { openMemoryDatabase } = await import(adapterUrl);

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
  globalThis.__terminalSelf = fakeSelf;
  workerSequence += 1;
  await import(`${workerUrl}#worker-${workerSequence}`);

  return {
    request(args, bytes, context) {
      const requestId = ++id;
      return new Promise((resolve, reject) => {
        pending.set(requestId, { resolve, reject });
        fakeSelf.onmessage({ data: { id: requestId, args, bytes, context } });
      });
    },
  };
}

async function readStoredSnapshot() {
  const database = await new Promise((resolve, reject) => {
    const request = indexedDB.open("portfolio-zinn-cli-0.43.0-core-0.32.0-browser.1", 1);
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
    const request = indexedDB.open("portfolio-zinn-cli-0.43.0-core-0.32.0-browser.1", 1);
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

async function ok(worker, args, bytes, context) {
  const result = await worker.request(args, bytes, context);
  assert.equal(result.status, 0, result.stderr);
  return result;
}
const list = ["task", "list", "PLAY", "--json"];

test("released worker help/version and extension help never initialize SQLite or storage", async () => {
  useFreshIndexedDb();
  globalThis.__terminalSqliteInitModule = () => {
    throw new Error("Must not initialize");
  };
  const worker = await makeWorker();
  for (const args of [
    [],
    ["--help"],
    ["-h"],
    ["-v"],
    ["--version"],
    ["task", "create", "--help", "--description-file", "never"],
    ["reset", "--yes", "-h"],
    ["export", "-h"],
    ["import", "--help"],
  ]) {
    const result = await ok(worker, args);
    assert.ok(result.stdout.length);
    assert.equal(result.persistence, undefined);
  }
  assert.equal((await ok(worker, ["--version"])).stdout, "0.43.0\n");
  assert.deepEqual(await indexedDB.databases(), []);
});

test("released operations, aliases, archive, reload, reset, and binary export/import persist", async () => {
  useFreshIndexedDb();
  const worker = await makeWorker();
  const tasks = JSON.parse((await ok(worker, list)).stdout);
  assert.match(JSON.stringify(tasks), /Explore the desktop/);
  assert.equal(tasks.length, 3);
  await ok(worker, ["task", "new", "PLAY", "--title=A durable sample", "--priority=high"]);
  await ok(worker, ["task", "edit", "PLAY-4", "--title=The saved sample"]);
  await ok(worker, ["task", "move", "PLAY-4", "Review"]);
  assert.match((await ok(worker, ["task", "search", "saved sample", "PLAY"])).stdout, /PLAY-4/);
  await ok(worker, ["task", "archive", "PLAY-4"]);
  assert.doesNotMatch((await ok(worker, list)).stdout, /The saved sample/);
  await ok(worker, ["task", "unarchive", "PLAY-4"]);
  const backup = await ok(worker, ["export"]);
  assert.ok(backup.bytes instanceof Uint8Array);
  const reloaded = await makeWorker();
  assert.match((await ok(reloaded, ["task", "show", "PLAY-4"])).stdout, /The saved sample/);
  const beforeReset = await readStoredSnapshot();
  assert.equal((await worker.request(["reset"])).status, 1);
  assert.deepEqual(await readStoredSnapshot(), beforeReset);
  await ok(worker, ["reset", "--yes"]);
  assert.equal(JSON.parse((await ok(worker, list)).stdout).length, 3);
  await ok(worker, ["import", "backup.sqlite"], backup.bytes);
  assert.match((await ok(worker, ["task", "view", "PLAY-4"])).stdout, /The saved sample/);
  assert.equal((await ok(worker, list)).identity.core, "0.32.0");
});

async function changedImage(bytes, sql) {
  const sqlite = await sqlite3InitModule();
  const raw = openMemoryDatabase(sqlite, bytes);
  try {
    raw.exec(sql);
    return new Uint8Array(sqlite.capi.sqlite3_js_db_export(raw.pointer));
  } finally {
    raw.close();
  }
}

test("incompatible formats, owner images, schemas, corrupt bytes and board shape are refused atomically", async () => {
  useFreshIndexedDb();
  const worker = await makeWorker();
  const backup = (await ok(worker, ["export"])).bytes;
  const original = await readStoredSnapshot();
  for (const bytes of [
    new Uint8Array([1, 2, 3]),
    new Uint8Array(5 * 1024 * 1024 + 1),
    await changedImage(
      backup,
      "UPDATE portfolio_playground SET value='portfolio-zinn-playground-v1'",
    ),
    await changedImage(backup, "UPDATE portfolio_playground SET value='future-format'"),
    await changedImage(backup, "DROP TABLE portfolio_playground"),
    await changedImage(backup, "PRAGMA user_version=2"),
    await changedImage(backup, "PRAGMA user_version=4"),
    await changedImage(backup, "UPDATE project SET key='OWNER'"),
    await changedImage(backup, "UPDATE project_column SET name='Unknown' WHERE name='Review'"),
    await changedImage(backup, "PRAGMA foreign_keys=OFF; UPDATE task SET project_id='missing'"),
  ]) {
    const result = await worker.request(["import", "backup.sqlite"], bytes);
    assert.equal(result.status, 1);
    assert.deepEqual(await readStoredSnapshot(), original);
    assert.equal(JSON.parse((await ok(worker, list)).stdout).length, 3);
  }
  await replaceStoredSnapshot(new Uint8Array([0, 1, 2, 3]));
  const recovery = await makeWorker();
  assert.equal((await recovery.request(list)).status, 1);
  assert.equal((await ok(recovery, ["--version"])).stdout, "0.43.0\n");
  await ok(recovery, ["import", "backup.sqlite"], backup);
  assert.equal(JSON.parse((await ok(recovery, list)).stdout).length, 3);
  await replaceStoredSnapshot(new Uint8Array([0, 1]));
  assert.equal((await recovery.request(list)).status, 1);
  assert.equal((await recovery.request(list)).status, 1);
  await ok(recovery, ["reset", "--yes"]);
  assert.equal(JSON.parse((await ok(recovery, list)).stdout).length, 3);
});

test("failed persistence rolls the active image back, and same-generation concurrent tabs conflict", async () => {
  useFreshIndexedDb();
  const first = await makeWorker();
  await ok(first, list);
  const second = await makeWorker();
  await ok(second, list);
  const original = await readStoredSnapshot();
  const prototype = (await import("fake-indexeddb")).IDBObjectStore.prototype;
  const put = prototype.put;
  prototype.put = function (...args) {
    if (args[1] === "board") {
      this.transaction.abort();
      return;
    }
    return put.apply(this, args);
  };
  try {
    const result = await first.request(["task", "edit", "PLAY-1", "--title=Must roll back"]);
    assert.equal(result.status, 1);
  } finally {
    prototype.put = put;
  }
  assert.deepEqual(await readStoredSnapshot(), original);
  assert.match((await ok(first, ["task", "view", "PLAY-1"])).stdout, /Explore the desktop/);
  const results = await Promise.all([
    first.request(["task", "create", "PLAY", "--title=first tab"]),
    second.request(["task", "create", "PLAY", "--title=second tab"]),
  ]);
  assert.equal(results.filter((r) => r.status === 0).length, 1);
  assert.match(results.find((r) => r.status === 1).stderr, /changed in another tab/);
  assert.equal(JSON.parse((await ok(second, list)).stdout).length, 4);
});

test("old namespace is left intact and creates a fresh generation with a separate notice", async () => {
  useFreshIndexedDb();
  const request = indexedDB.open("portfolio-zinn-playground", 1);
  const old = await new Promise((resolve) => {
    request.onupgradeneeded = () => request.result.createObjectStore("snapshots");
    request.onsuccess = () => resolve(request.result);
  });
  await new Promise((resolve) => {
    const tx = old.transaction("snapshots", "readwrite");
    tx.objectStore("snapshots").put({ revision: 7, bytes: new Uint8Array([9]) }, "board");
    tx.oncomplete = resolve;
  });
  const worker = await makeWorker();
  const result = await ok(worker, list);
  assert.match(result.notices.join(" "), /demo was updated/);
  assert.doesNotMatch(result.stdout + result.stderr, /demo was updated/);
  assert.equal(JSON.parse(result.stdout).length, 3);
  const tx = old.transaction("snapshots");
  assert.equal(
    await new Promise((resolve) => {
      const r = tx.objectStore("snapshots").get("board");
      r.onsuccess = () => resolve(r.result.revision);
    }),
    7,
  );
  old.close();
});

test("unavailable IndexedDB gives a usable session board and exact separate output", async () => {
  useFreshIndexedDb();
  globalThis.indexedDB = undefined;
  const worker = await makeWorker();
  const result = await ok(worker, list);
  assert.equal(result.persistence, "session");
  assert.match(result.notices.join(" "), /session-only/);
  assert.doesNotMatch(result.stdout, /session-only/);
});

test("actual production shell and worker preserve pipes, redirection, statuses, native argv and per-call files", async () => {
  useFreshIndexedDb();
  const { Bash, initBashkit } = await import("@everruns/bashkit-wasm");
  await initBashkit(
    fs.readFileSync(path.join(root, "node_modules/@everruns/bashkit-wasm/bashkit_wasm_bg.wasm")),
  );
  const { TerminalShell } = await import(
    await bundleDataUrl(path.join(root, "src/features/TerminalWindow/terminal-shell.ts"))
  );
  const worker = await makeWorker();
  const shell = new TerminalShell(Bash);
  const context = {
    columns: 40,
    history: [],
    open: () => false,
    download: () => {},
    zinn: (args, bytes, ctx) => worker.request(args, bytes, ctx),
  };
  const execute = async (script) => {
    const result = await shell.execute(script, context);
    assert.equal(result.exitCode, 0, result.stderr);
    return result;
  };
  assert.match((await execute("zinn task list PLAY | grep PLAY")).stdout, /PLAY-1/);
  const shown = await execute("zinn task view PLAY-1 --json > task.json; cat task.json");
  assert.equal(JSON.parse(shown.stdout).title, "Explore the desktop");
  const failed = await execute(
    "zinn task view PLAY-999 --json > out.json 2> err.json; echo $?; cat err.json",
  );
  assert.match(failed.stdout, /^1\n/);
  assert.equal(JSON.parse(failed.stdout.slice(2)).error.code, "not_found");
  assert.equal(
    (await execute("zinn task view PLAY-999 > out.txt 2> err.txt || echo failed")).stdout,
    "failed\n",
  );
  const created = await execute(
    'mkdir notes; cd notes; printf "first callback" > description.txt; zinn task new PLAY --title="from virtual file" --description-file description.txt --json',
  );
  assert.equal(JSON.parse(created.stdout).description, "first callback");
  const edited = await execute(
    'printf "updated callback" > description.txt; zinn task edit PLAY-4 --description-file /home/guest/notes/description.txt --json',
  );
  assert.equal(JSON.parse(edited.stdout).description, "updated callback");
  const missingAlias = await shell.execute(
    "zinn task edit PLAY-4 --description-file /visitor/notes/description.txt",
    context,
  );
  assert.equal(missingAlias.exitCode, 1);
  shell.workspace.write("/home/guest/notes/binary", new Uint8Array([0, 255]));
  assert.match(
    (await shell.execute("zinn task edit PLAY-4 --description-file binary", context)).stderr,
    /UTF-8|binary/,
  );
  shell.workspace.write("/home/guest/notes/large", new Uint8Array(1024 * 1024 + 1));
  assert.match(
    (await shell.execute("zinn task edit PLAY-4 --description-file large", context)).notices.join(
      " ",
    ),
    /1 MB/,
  );
  assert.equal(
    (await shell.execute("zinn task edit PLAY-4 --description-file .", context)).exitCode,
    1,
  );
  const plain = await execute("zinn task view PLAY-1");
  assert.equal(plain.stdout.includes("\x1b"), false);
  const forced = await execute("FORCE_COLOR=1 NO_COLOR=1 zinn task view PLAY-1 | cat");
  assert.equal(forced.stdout.includes("\x1b["), true);
  await execute("zinn export backup.sqlite; zinn reset --yes; zinn import backup.sqlite");
  assert.match((await execute("zinn task view PLAY-4")).stdout, /from virtual file/);
  assert.equal((await execute("cat description.txt")).stdout, "updated callback");
});
