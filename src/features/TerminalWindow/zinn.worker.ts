import sqlite3InitModule, { type Sqlite3Static } from "@sqlite.org/sqlite-wasm";
import sqliteWasmUrl from "@sqlite.org/sqlite-wasm/sqlite3.wasm?url";
import * as runtime from "../../../proofs/zinn-release/generated/browser-cli.js";
import baseline from "../../../proofs/zinn-release/baseline.json";
import { openMemoryDatabase } from "./sqlite-driver";
import { PlaygroundStorage, hasOldPlayground, storageNamespace } from "./playground-storage";
import { parseExtension } from "./zinn-extensions";
import type { PlaygroundResult, InvocationContext } from "./zinn-client";

let sqlite: Sqlite3Static;
let engine: Promise<void> | undefined;
let storage: PlaygroundStorage | undefined;
let opened = false;
let loaded = false;
let revision = 0;
let notice = "";

async function initializeEngine() {
  engine ??= (async () => {
    const init = sqlite3InitModule as (options: object) => Promise<Sqlite3Static>;
    sqlite = await init({ locateFile: () => sqliteWasmUrl, print: () => {}, printErr: () => {} });
    runtime.initialize(sqlite);
  })().catch((error) => {
    engine = undefined;
    throw error;
  });
  await engine;
}

function validate(bytes: Uint8Array) {
  const db = openMemoryDatabase(sqlite, bytes);
  try {
    const scalar = (sql: string) => db.selectValue(sql);
    if (scalar("SELECT value FROM portfolio_playground WHERE key = 'format'") !== storageNamespace)
      throw new Error("Unsupported playground format. Choose a backup exported by this release.");
    if (scalar("PRAGMA user_version") !== baseline.schema)
      throw new Error("Unsupported Zinn schema. Choose a backup exported by this release.");
    const integrity = db.selectArrays("PRAGMA integrity_check");
    if (
      integrity.length !== 1 ||
      integrity[0][0] !== "ok" ||
      db.selectArrays("PRAGMA foreign_key_check").length
    )
      throw new Error("The playground backup is damaged.");
    const columns = db.selectArrays(
      "SELECT c.name FROM project_column c JOIN project p ON p.id = c.project_id WHERE p.key = 'PLAY' ORDER BY c.column_order",
    );
    if (
      JSON.stringify(columns.flat()) !==
      JSON.stringify(["Backlog", "TODO", "In Progress", "Review", "Done"])
    )
      throw new Error("This backup is missing the required PLAY board and five columns.");
    db.selectArrays("SELECT id, title, column_id FROM task LIMIT 1");
  } catch (error) {
    throw new Error(
      `Invalid playground backup: ${error instanceof Error ? error.message : "unreadable image"}. Your current board has been kept.`,
    );
  } finally {
    db.close();
  }
}

async function seed() {
  await runtime.replaceSnapshot(undefined);
  for (const args of [
    ["project", "create", "PLAY", "--name", "Your playground"],
    ["task", "create", "PLAY", "--title", "Explore the desktop", "--column", "Done"],
    ["task", "create", "PLAY", "--title", "Try moving a task", "--column", "In Progress"],
    ["task", "create", "PLAY", "--title", "Make something of your own", "--column", "Backlog"],
  ]) {
    const result = await runtime.invoke(args);
    if (result.status) throw new Error(result.stderr);
  }
  const db = openMemoryDatabase(sqlite, runtime.snapshot());
  let marked: Uint8Array;
  try {
    db.exec("CREATE TABLE portfolio_playground (key TEXT PRIMARY KEY, value TEXT NOT NULL)");
    db.exec({
      sql: "INSERT INTO portfolio_playground VALUES ('format', ?)",
      bind: [storageNamespace],
    });
    marked = new Uint8Array(sqlite.capi.sqlite3_js_db_export(db.pointer!));
  } finally {
    db.close();
  }
  await runtime.replaceSnapshot(marked);
}

async function load(recovery = false) {
  await initializeEngine();
  if (!opened) {
    storage = await PlaygroundStorage.open().catch(() => undefined);
    opened = true;
  }
  const saved = await storage?.read();
  const nextRevision = saved?.revision ?? 0;
  if (loaded && nextRevision === revision) return;
  loaded = false;
  revision = nextRevision;
  if (recovery) {
    loaded = false;
    if (saved) {
      try {
        validate(saved.bytes);
        await runtime.replaceSnapshot(saved.bytes);
        loaded = true;
      } catch {
        /* Confirmed recovery remains available for damaged stored bytes. */
      }
    }
    return;
  }
  if (saved) {
    validate(saved.bytes);
    await runtime.replaceSnapshot(saved.bytes);
  } else {
    const before = runtime.snapshot();
    try {
      await seed();
      if (storage) revision = await storage.save(runtime.snapshot()!, revision);
      if (storage && (await hasOldPlayground().catch(() => false)))
        notice =
          "The Zinn demo was updated, so its sample board has been reset. Your visitor files and preferences are kept.";
    } catch (error) {
      await runtime.replaceSnapshot(before);
      throw error;
    }
  }
  loaded = true;
}

const same = (a?: Uint8Array, b?: Uint8Array) =>
  a?.length === b?.length && (!a || a.every((v, i) => v === b![i]));
function metadata() {
  return {
    persistence: storage ? ("saved" as const) : ("session" as const),
    identity: runtime.identity,
    notices: [
      notice,
      ...(!storage
        ? [
            "Zinn storage is unavailable. This board is session-only. Export and download a backup before leaving.",
          ]
        : []),
    ].filter(Boolean),
  };
}

async function execute(
  args: string[],
  bytes?: Uint8Array,
  context: InvocationContext = {},
): Promise<PlaygroundResult> {
  const extension = parseExtension(args);
  if (extension?.help) return { stdout: extension.help, stderr: "", status: 0 };
  if (!extension) {
    // Route with the real released definitions first. The capability boundary defers
    // storage handlers, so help/version remain independent of even damaged storage.
    const probe = await runtime.invoke(args, { ...context, deferStorage: true });
    if (!probe.needsStorage) return probe;
  }
  const recovery = extension?.name === "reset" || extension?.name === "import";
  await load(recovery);
  const before = runtime.snapshot();
  const wasLoaded = loaded;
  try {
    let result: PlaygroundResult;
    if (extension?.name === "reset") {
      await seed();
      result = {
        stdout: "Your board has been reset to the three sample tasks.\n",
        stderr: "",
        status: 0,
      };
    } else if (extension?.name === "import") {
      if (!bytes) throw new Error("Choose a playground backup in the visitor filesystem.");
      validate(bytes);
      await runtime.replaceSnapshot(bytes);
      result = { stdout: "Imported your playground backup.\n", stderr: "", status: 0 };
    } else if (extension?.name === "export") {
      result = { stdout: "", stderr: "", status: 0, bytes: before };
    } else result = await runtime.invoke(args, context);
    const after = runtime.snapshot();
    if (after && after.length > 5 * 1024 * 1024)
      throw new Error("The playground reached its 5 MB limit. The last change was rolled back.");
    if (!same(before, after) && storage) revision = await storage.save(after!, revision);
    loaded = true;
    const details = metadata();
    const response = {
      ...result,
      ...details,
      notices: [...(result.notices ?? []), ...details.notices],
    };
    notice = "";
    return response;
  } catch (error) {
    await runtime.replaceSnapshot(before);
    loaded = wasLoaded;
    throw error;
  }
}

// RPC owns the complete invocation and commit, including after Bash cancellation.
let queue = Promise.resolve();
self.onmessage = (
  event: MessageEvent<{
    id: number;
    args: string[];
    bytes?: Uint8Array;
    context?: InvocationContext;
  }>,
) => {
  const { id, args, bytes, context } = event.data;
  queue = queue.then(async () => {
    try {
      self.postMessage({ id, result: await execute(args, bytes, context) });
    } catch (error) {
      self.postMessage({
        id,
        result: {
          stdout: "",
          stderr: `${error instanceof Error ? error.message : "Zinn failed"}\n`,
          status: 1,
        },
      });
    }
  });
};
