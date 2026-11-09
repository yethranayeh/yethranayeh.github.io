import type { Database as WasmDatabase, Sqlite3Static, SqlValue } from "@sqlite.org/sqlite-wasm";
import type { SqliteDriver, DriverArgs } from "@zinn-dev/core/src/sqlite/database.js";

export function createWasmDriver(sqlite: Sqlite3Static, connection: WasmDatabase): SqliteDriver {
  return {
    connect: () => ({
      prepare: (sql) => {
        function execute(args: DriverArgs, firstOnly: boolean) {
          const statement = connection.prepare(sql);
          try {
            if (args.length) {
              const first = args[0];
              const bindings =
                first !== null && typeof first === "object" && !ArrayBuffer.isView(first)
                  ? first
                  : args;
              statement.bind(bindings as SqlValue[] | Record<string, SqlValue>);
            }
            const rows: unknown[] = [];
            while (statement.step()) {
              const row: Record<string, SqlValue> = {};
              // Keep INTEGER values as bigint until Zinn's wrapper checks the safe range.
              for (let index = 0; index < statement.columnCount; index++) {
                row[statement.getColumnName(index)] =
                  sqlite.capi.sqlite3_column_type(statement.pointer!, index) ===
                  sqlite.capi.SQLITE_INTEGER
                    ? sqlite.capi.sqlite3_column_int64(statement.pointer!, index)
                    : statement.get(index);
              }
              rows.push(row);
              if (firstOnly) break;
            }
            return rows;
          } finally {
            statement.finalize();
          }
        }
        return {
          get: (...args) => execute(args, true)[0] ?? null,
          all: (...args) => execute(args, false),
          run: (...args) => {
            execute(args, false);
          },
        };
      },
      exec: (sql) => {
        connection.exec(sql);
      },
      get inTransaction() {
        return sqlite.capi.sqlite3_get_autocommit(connection.pointer!) === 0;
      },
      close: () => {
        connection.close();
      },
    }),
    resultCode: (error) => (error instanceof sqlite.SQLite3Error ? error.resultCode : null),
  };
}

export function openMemoryDatabase(sqlite: Sqlite3Static, bytes?: Uint8Array) {
  const connection = new sqlite.oo1.DB(":memory:", "c");
  try {
    if (bytes) {
      if (
        bytes.length > 5 * 1024 * 1024 ||
        new TextDecoder().decode(bytes.slice(0, 16)) !== "SQLite format 3\u0000"
      ) {
        throw new Error("Choose a valid Zinn playground SQLite backup smaller than 5 MB.");
      }
      const pointer = sqlite.wasm.allocFromTypedArray(bytes);
      const flags =
        sqlite.capi.SQLITE_DESERIALIZE_FREEONCLOSE | sqlite.capi.SQLITE_DESERIALIZE_RESIZEABLE;
      const rc = sqlite.capi.sqlite3_deserialize(
        connection.pointer!,
        "main",
        pointer,
        bytes.length,
        bytes.length,
        flags,
      );
      if (rc !== sqlite.capi.SQLITE_OK) {
        sqlite.wasm.dealloc(pointer);
        throw new Error("The playground backup could not be opened.");
      }
    }
    connection.exec("PRAGMA foreign_keys = ON; PRAGMA trusted_schema = OFF;");
    return connection;
  } catch (error) {
    connection.close();
    throw error;
  }
}
