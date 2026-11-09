import { invokeReleased } from "./generated/cli/index.js";
import { resetDatabaseForTests } from "./generated/core/src/db.js";
import { setLegacyReadAllowed } from "./generated/cli/src/lib.js";
import { beginInvocation, inspect, state } from "./adapters/host.js";
import { resolve } from "path-browserify";
import baseline from "./baseline.json";

export const identity = {
  cli: baseline.cli,
  core: baseline.core,
  adaptation: baseline.adaptation,
  storageNamespace: baseline.storageNamespace,
};
let pending = Promise.resolve();

/** One board per worker/module. The queue owns upstream module caches and per-call output sinks. */
export function invoke(argv, context = {}) {
  const run = pending.then(async () => {
    if (context.projection) projectFiles(context.projection, context.cwd);
    else if (context.cwd) state.cwd = resolve(context.cwd);
    beginInvocation(argv, context);
    setLegacyReadAllowed(false);
    try {
      await invokeReleased([...argv]);
    } finally {
      // A fresh native process closes its connection and forgets policy/settings after every invocation.
      resetDatabaseForTests();
    }
    return {
      stdout: state.stdout,
      stderr: state.stderr,
      status: state.status,
      metrics: inspect(),
      needsStorage: state.needsStorage,
      notices: [...state.notices],
    };
  });
  pending = run.catch(() => {});
  return run;
}

/** SQLite initialization does not open a board. Call once from the worker before invocation. */
export function initialize(sqlite, { snapshot, files = {} } = {}) {
  if (state.sqlite) throw new Error("Use a dedicated worker for each browser CLI runtime");
  state.sqlite = sqlite;
  state.bytes = snapshot?.slice();
  state.exists = snapshot !== undefined;
  projectFiles(
    Object.entries(files).map(([path, text]) => ({ path, text })),
    "/visitor",
  );
}

export const snapshot = () => state.bytes?.slice();
export { inspect };

/** Replace only between invocations, after the released close/reset helper ran. */
export function replaceSnapshot(bytes) {
  const run = pending.then(() => {
    if (bytes !== undefined && (!(bytes instanceof Uint8Array) || bytes.length > 5 * 1024 * 1024))
      throw new Error("A playground snapshot must be a Uint8Array of at most 5 MB");
    resetDatabaseForTests();
    state.bytes = bytes?.slice();
    state.exists = bytes !== undefined;
  });
  pending = run.catch(() => {});
  return run;
}

// A read-only projection, refreshed once per callback. /board is never visitor-controlled.
function projectFiles(entries, cwd = "/visitor") {
  state.cwd = resolve(cwd);
  state.files.clear();
  state.fileErrors.clear();
  state.directories = new Set(["/", "/board"]);
  for (const entry of entries) {
    const path = resolve(entry.path);
    if (
      !(
        path === "/visitor" ||
        path.startsWith("/visitor/") ||
        path === "/home" ||
        path === "/home/guest" ||
        path.startsWith("/home/guest/")
      )
    )
      throw new Error("Virtual files must live in the visitor filesystem");
    if (entry.directory) state.directories.add(path);
    else if (entry.error) state.fileErrors.set(path, entry.error);
    else state.files.set(path, new TextEncoder().encode(entry.text ?? ""));
    let parent = path;
    while (parent !== "/") {
      parent = resolve(parent, "..");
      state.directories.add(parent);
    }
  }
}
