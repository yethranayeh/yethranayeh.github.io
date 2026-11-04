import { openWith } from "../generated/core/src/sqlite/database.js";
import {
  createWasmDriver,
  openMemoryDatabase,
} from "../../../src/features/TerminalWindow/sqlite-driver.ts";
import { boardPath } from "./fs.js";
import { state, unsupported } from "./host.js";

// Uses the released Database/Statement/transaction wrapper above the existing WASM driver.
export function openDatabase(path, options = {}) {
  if (path !== boardPath) unsupported(`SQLite path ${path}`);
  if (!state.exists && (options.create === false || options.readonly)) {
    throw Object.assign(new Error(`Cannot open ${path}`), { code: "ENOENT" });
  }
  const raw = openMemoryDatabase(state.sqlite, state.bytes);
  state.opens++;
  state.exists = true;
  const driver = createWasmDriver(state.sqlite, raw);
  const connect = driver.connect;
  driver.connect = (...args) => {
    const connection = connect(...args);
    const close = connection.close;
    connection.close = () => {
      state.bytes = new Uint8Array(state.sqlite.capi.sqlite3_js_db_export(raw));
      close();
    };
    return connection;
  };
  return openWith(driver, path, options);
}
