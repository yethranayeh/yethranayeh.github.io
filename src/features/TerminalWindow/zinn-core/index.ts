import type { SqliteDriver } from "@/vendor/zinn/core/src/sqlite/database.js";

import { column } from "@/vendor/zinn/core/src/operations/column.js";
import { project } from "@/vendor/zinn/core/src/operations/project.js";
import { task } from "@/vendor/zinn/core/src/operations/task.js";
import { createSchema, readSchemaVersion } from "@/vendor/zinn/core/src/migrations/runner.js";
export { upgradeSchema as upgradeDatabase } from "@/vendor/zinn/core/src/migrations/runner.js";
import { latestVersion, MIGRATIONS } from "@/vendor/zinn/core/src/migrations/registry.js";
import type { Migration } from "@/vendor/zinn/core/src/migrations/registry.js";
import { configureBrowserDriver } from "@/vendor/zinn/core/src/sqlite/browser.js";
import { openWith, type Database } from "@/vendor/zinn/core/src/sqlite/database.js";
import {
  assertWritable,
  configureDatabase,
  getDb,
  resetDatabaseForTests,
  setDatabase,
  writeTransaction,
} from "@/vendor/zinn/core/src/db.js";

export { column, project, task };
export {
  assertWritable,
  configureDatabase,
  getDb,
  resetDatabaseForTests,
  setDatabase,
  writeTransaction,
};
export { MIGRATIONS };
export type { Migration };
export type {
  Database,
  DriverArgs,
  DriverConnection,
  DriverStatement,
  NamedBindings,
  OpenOptions,
  SqliteDriver,
  SqliteParams,
  SqliteValue,
} from "@/vendor/zinn/core/src/sqlite/database.js";
export type {
  Actor,
  ActorKind,
  Project,
  Column,
  Task,
  TaskWithKey,
  TaskChange,
} from "@/vendor/zinn/core/src/types.js";
export type {
  ProjectCreateInput,
  ProjectEditInput,
} from "@/vendor/zinn/core/src/schemas/project.js";
export type {
  ColumnCreateInput,
  ColumnEditInput,
  ColumnOrderInput,
} from "@/vendor/zinn/core/src/schemas/column.js";
export type { TaskPriority } from "@/vendor/zinn/core/src/schemas/task.js";
export type {
  TaskCreateInput,
  TaskEditInput,
  TaskListInput,
} from "@/vendor/zinn/core/src/schemas/task.js";

/** Opens the worker's SQLite connection through the unchanged upstream wrapper. */
export function createDatabase(driver: SqliteDriver, path = ":memory:") {
  configureBrowserDriver(driver);
  return openWith(driver, path);
}

/** Creates the exact upstream baseline and applies each registered migration to a fresh database. */
export function initializeFreshDatabase(database: Database) {
  createSchema(database, MIGRATIONS);
  database.exec("PRAGMA foreign_keys = ON");
}

/** Reads the migration marker from the supplied database. */
export function getDatabaseSchemaVersion(database: Database) {
  return readSchemaVersion(database);
}

/** Returns the current version produced by the registered migration chain. */
export function getLatestSchemaVersion(migrations: ReadonlyArray<Migration> = MIGRATIONS) {
  return latestVersion(migrations);
}
