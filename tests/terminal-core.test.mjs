import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import sqlite3InitModule from "@sqlite.org/sqlite-wasm";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

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
  },
};

const bundle = await build({
  stdin: {
    contents: `import * as core from "./src/features/TerminalWindow/zinn-core/index.ts";
import * as wasm from "./src/features/TerminalWindow/sqlite-driver.ts";
export { core, wasm };`,
    resolveDir: root,
    sourcefile: "terminal-core-loader.ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  plugins: [resolveSrcAlias],
});
const adapterUrl = `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
const { core, wasm } = await import(adapterUrl);
const adapter = { ...core, ...wasm };

const actor = { name: "Test User", email: null, kind: "human" };

test("vendored Zinn core runs real task rules on the SQLite WASM adapter", async () => {
  const sqlite = await sqlite3InitModule();
  let raw = adapter.openMemoryDatabase(sqlite);
  let database = adapter.createDatabase(adapter.createWasmDriver(sqlite, raw));

  try {
    adapter.setDatabase(database);
    adapter.initializeFreshDatabase(database);

    assert.equal(adapter.getDatabaseSchemaVersion(database), 3);
    assert.equal(adapter.getLatestSchemaVersion(), 3);

    const board = adapter.project.create({ key: "PLAY", name: "Playground" }, actor);
    const columns = adapter.column.getAllByProjectKey(board.key);
    assert.deepEqual(
      columns.map((entry) => entry.name),
      ["Backlog", "TODO", "In Progress", "Review", "Done"],
    );

    const first = adapter.task.create(
      { project_id: board.id, title: "Trace a browser task", description: "shared core wasm" },
      actor,
    );
    const second = adapter.task.create(
      { project_id: board.id, title: "A rollback probe", columnName: "Review" },
      actor,
    );
    assert.equal(first.key, "PLAY-1");
    assert.equal(second.key, "PLAY-2");

    const found = adapter.task.search({ projectKey: board.key, query: "browser task" });
    assert.equal(found.tasks[0]?.key, first.key);

    const edited = adapter.task.edit(
      { taskKey: first.key, title: "A shared browser task", priority: "high" },
      actor,
    );
    assert.equal(edited.changed, true);
    assert.equal(
      adapter.task.search({ projectKey: board.key, query: "shared browser" }).tasks[0]?.key,
      first.key,
    );

    const moved = adapter.task.move({ taskKey: first.key, targetColumn: "In Progress" }, actor);
    assert.equal(moved.column_id, columns.find((entry) => entry.name === "In Progress").id);
    assert.equal(
      adapter.task.getAll({ projectKey: board.key, columnName: "In Progress" })[0]?.key,
      first.key,
    );

    adapter.task.archive(first.key, actor);
    assert.equal(
      adapter.task.getAll({ projectKey: board.key }).some((entry) => entry.key === first.key),
      false,
    );
    adapter.task.unarchive(first.key, actor);
    assert.equal(adapter.task.getByKey(first.key).archived_at, null);

    assert.throws(
      () =>
        adapter.task.create(
          { project_id: board.id, title: "Should roll back", columnName: "Missing" },
          actor,
        ),
      /column/i,
    );
    assert.equal(adapter.task.getAll({ projectKey: board.key, archive: "all" }).length, 2);
    const afterRollback = adapter.task.create(
      { project_id: board.id, title: "Counter still matches" },
      actor,
    );
    assert.equal(afterRollback.key, "PLAY-3");

    assert.throws(() => database.query("SELECT 9007199254740993 AS too_large").get(), RangeError);

    const nestedBefore = adapter.task.getAll({ projectKey: board.key, archive: "all" }).length;
    adapter.writeTransaction(() => {
      adapter.task.create({ project_id: board.id, title: "Outer write" }, actor);
      assert.throws(
        () =>
          adapter.writeTransaction(() => {
            adapter.task.create({ project_id: board.id, title: "Nested rollback" }, actor);
            throw new Error("rollback savepoint");
          }),
        /rollback savepoint/,
      );
      assert.equal(
        adapter.task.getAll({ projectKey: board.key, archive: "all" }).length,
        nestedBefore + 1,
      );
    });
    const finalTasks = adapter.task.getAll({ projectKey: board.key, archive: "all" });
    assert.equal(finalTasks.length, nestedBefore + 1);
    assert.equal(
      finalTasks.some((entry) => entry.title === "Nested rollback"),
      false,
    );

    const snapshot = new Uint8Array(sqlite.capi.sqlite3_js_db_export(raw));
    adapter.resetDatabaseForTests();
    raw = adapter.openMemoryDatabase(sqlite, snapshot);
    database = adapter.createDatabase(adapter.createWasmDriver(sqlite, raw));
    adapter.setDatabase(database);
    assert.equal(adapter.task.getByKey("PLAY-1").title, "A shared browser task");
    assert.equal(
      adapter.task.getAll({ projectKey: "PLAY", archive: "all" }).length,
      finalTasks.length,
    );
  } finally {
    adapter.resetDatabaseForTests();
  }
});
