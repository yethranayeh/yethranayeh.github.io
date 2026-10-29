import type { OpenOptions, SqliteDriver } from "./database.js";
import { openWith } from "./database.js";

let browserDriver: SqliteDriver | null = null;

/** Registers the worker-owned SQLite driver used by path-based core helpers. */
export function configureBrowserDriver(driver: SqliteDriver) {
  browserDriver = driver;
}

export function openDatabase(path: string, options?: OpenOptions) {
  if (browserDriver === null) {
    throw new Error("The browser SQLite driver has not been configured");
  }

  return openWith(browserDriver, path, options);
}
