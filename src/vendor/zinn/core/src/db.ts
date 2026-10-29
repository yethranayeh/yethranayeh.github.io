import type { Database } from "./sqlite/database.js";

import { withChangeHooks } from "./hooks.js";
import { rethrowSearchError } from "./search-error.js";

let db: Database | null = null;
let policyConfigured = false;

/** Sets the client policy once, matching the native core bootstrap boundary. */
export function configureDatabase(_openPolicy: unknown) {
  if (db !== null || policyConfigured) {
    throw new Error("The database is already configured, so its policy can no longer change");
  }

  policyConfigured = true;
}

/** Installs the worker-created SQLite connection before any operation runs. */
export function setDatabase(database: Database) {
  if (db !== null) {
    throw new Error("The browser database is already open");
  }

  db = database;
}

export function getDb() {
  if (db === null) {
    throw new Error("The browser database has not been initialized");
  }

  return db;
}

/** Browser storage has no read-only migration policy. */
export function assertWritable() {
  getDb();
}

/** Runs the same immediate or nested transaction boundary as upstream core. */
export function writeTransaction<T>(fn: () => T): T {
  const connection = getDb();
  const write = () => {
    try {
      return connection.transaction(fn).immediate();
    } catch (error) {
      rethrowSearchError(error);
    }
  };

  return connection.inTransaction ? write() : withChangeHooks(write);
}

/** Clears worker-local state for isolated browser-core scenarios. */
export function resetDatabaseForTests() {
  db?.close();
  db = null;
  policyConfigured = false;
}
