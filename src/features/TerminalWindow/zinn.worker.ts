import sqlite3InitModule, {
  type Database as WasmDatabase,
  type Sqlite3Static,
} from "@sqlite.org/sqlite-wasm";
import sqliteWasmUrl from "@sqlite.org/sqlite-wasm/sqlite3.wasm?url";
import {
  createDatabase,
  setDatabase,
  initializeFreshDatabase,
  getDatabaseSchemaVersion,
  getLatestSchemaVersion,
  upgradeDatabase,
  resetDatabaseForTests,
  project,
  task,
  column,
} from "./zinn-core";
import { createWasmDriver, openMemoryDatabase } from "./sqlite-driver";
import { executeZinn, playgroundKey, seedPlayground } from "./zinn-commands";
import { PlaygroundStorage } from "./playground-storage";
import type { PlaygroundResult } from "./zinn-client";

let sqlite: Sqlite3Static;
let raw: WasmDatabase | undefined;
let storage: PlaygroundStorage | undefined;
let revision = 0;
let initialized = false;
let sqlitePromise: Promise<Sqlite3Static> | undefined;

const marker = "portfolio-zinn-playground-v1";

function snapshot() {
  return sqlite.capi.sqlite3_js_db_export(raw!.pointer!);
}

function install(bytes?: Uint8Array, allowUpgrade = false) {
  const candidate = openMemoryDatabase(sqlite, bytes);
  const wrapper = createDatabase(createWasmDriver(sqlite, candidate));
  let upgraded = false;
  try {
    if (bytes) {
      if (
        wrapper
          .query<{ value: string }>("SELECT value FROM portfolio_playground WHERE key = 'format'")
          .get()?.value !== marker
      ) {
        throw new Error("Choose a backup exported by this Zinn playground.");
      }
      const version = getDatabaseSchemaVersion(wrapper);
      if (allowUpgrade && version >= 1 && version < getLatestSchemaVersion()) {
        upgradeDatabase(wrapper);
        upgraded = true;
      } else if (version !== getLatestSchemaVersion()) {
        throw new Error(
          "This backup uses a different Zinn schema. Choose a backup exported by this playground.",
        );
      }
      const integrity = wrapper.query<{ integrity_check: string }>("PRAGMA integrity_check").all();
      if (
        integrity.length !== 1 ||
        integrity[0].integrity_check !== "ok" ||
        wrapper.query("PRAGMA foreign_key_check").all().length
      ) {
        throw new Error("This backup is damaged. Your current board has been kept.");
      }
      if (!wrapper.query("SELECT id FROM project WHERE key = 'PLAY'").get()) {
        throw new Error("This backup doesn't contain a playground board.");
      }
    } else {
      initializeFreshDatabase(wrapper);
      wrapper.exec("CREATE TABLE portfolio_playground (key TEXT PRIMARY KEY, value TEXT NOT NULL)");
      wrapper
        .query("INSERT INTO portfolio_playground (key, value) VALUES ('format', ?)")
        .run(marker);
    }
  } catch (error) {
    wrapper.close();
    throw error;
  }
  resetDatabaseForTests();
  raw = candidate;
  setDatabase(wrapper);
  if (!bytes) seedPlayground();
  // Validate the operation graph before allowing an imported image to replace the saved board.
  if (!project.getByKey(playgroundKey) || column.getAllByProjectKey(playgroundKey).length !== 5) {
    throw new Error("This backup doesn't contain the playground's five columns.");
  }
  task.getAll({ projectKey: playgroundKey, archive: "all" });
  return upgraded;
}

async function initialize(recovery?: Uint8Array | null) {
  if (initialized) return false;
  // The package's declarations omit the Emscripten options its initializer forwards.
  const initializeSqlite = sqlite3InitModule as (options: {
    locateFile: () => string;
    print: () => void;
    printErr: () => void;
  }) => Promise<Sqlite3Static>;
  sqlitePromise ??= initializeSqlite({
    locateFile: () => sqliteWasmUrl,
    print: () => {},
    printErr: () => {},
  }).catch((error) => {
    sqlitePromise = undefined;
    throw error;
  });
  sqlite = await sqlitePromise;
  storage = await PlaygroundStorage.open().catch(() => undefined);
  const saved = await storage?.read();
  revision = saved?.revision ?? 0;
  let upgraded = false;
  let recovered = false;
  try {
    upgraded = install(saved?.bytes, true);
  } catch (error) {
    // Recovery commands must remain available when a stored image cannot be loaded.
    if (recovery === undefined) {
      const reason = error instanceof Error ? error.message : "The saved board couldn't be loaded.";
      throw new Error(
        `${reason} Import a playground backup or type zinn reset --yes to start again.`,
      );
    }
    install(recovery ?? undefined);
    recovered = true;
  }
  if (storage && (!saved || upgraded || recovered))
    revision = await storage.save(snapshot(), revision);
  initialized = true;
  return recovered;
}

async function execute(args: string[], bytes?: Uint8Array): Promise<PlaygroundResult> {
  const recovery =
    args[0] === "reset" && args.length === 2 && args[1] === "--yes"
      ? null
      : args[0] === "import"
        ? bytes
        : undefined;
  const recovered = await initialize(recovery);
  const persistence = storage ? "saved" : "session";
  if (recovered)
    return {
      text:
        recovery === null
          ? "Your board has been reset to the three sample tasks."
          : "Imported your playground backup. Type zinn to see the board.",
      persistence,
    };
  if (storage) {
    const saved = await storage.read();
    if ((saved?.revision ?? 0) !== revision) {
      try {
        const upgraded = install(saved?.bytes, true);
        revision = saved?.revision ?? 0;
        if (!saved || upgraded) revision = await storage.save(snapshot(), revision);
      } catch (error) {
        initialized = false;
        if (recovery !== undefined) return execute(args, bytes);
        throw error;
      }
    }
  }
  const before = snapshot();
  let result: PlaygroundResult;
  let mutated = false;
  try {
    if (args[0] === "reset") {
      if (args.length !== 2 || args[1] !== "--yes")
        throw new Error(
          "To replace this board with fresh samples, type zinn reset --yes. Export a backup first to keep your tasks.",
        );
      install();
      mutated = true;
      result = { text: "Your board has been reset to the three sample tasks.", persistence };
    } else if (args[0] === "import") {
      if (!bytes) throw new Error("Use Import backup above and select a playground backup.");
      install(bytes);
      mutated = true;
      result = {
        text: "Imported your playground backup. Type zinn to see the board.",
        persistence,
      };
    } else if (args[0] === "export") {
      result = {
        text: "Exported zinn-playground.sqlite. Import this backup here to restore the board.",
        persistence,
        bytes: before,
      };
    } else {
      const response = executeZinn(args);
      mutated = response.mutated;
      result = { text: response.text, persistence };
    }
    if (mutated && storage) revision = await storage.save(snapshot(), revision);
    return result;
  } catch (error) {
    // An invalid import, command failure, or failed persistent write must retain the previous image.
    install(before);
    throw error;
  }
}

// Serialize RPC, including storage writes: two commands must never share a live transaction.
let queue = Promise.resolve();
self.onmessage = (event: MessageEvent<{ id: number; args: string[]; bytes?: Uint8Array }>) => {
  const { id, args, bytes } = event.data;
  queue = queue.then(async () => {
    try {
      const result = await execute(args, bytes);
      self.postMessage({ id, result });
    } catch (error) {
      const text = error instanceof Error ? error.message : "The Zinn command failed.";
      self.postMessage({ id, error: text });
    }
  });
};
