import { invokeReleased } from "./generated/cli/index.js";
import { resetDatabaseForTests } from "./generated/core/src/db.js";
import { setLegacyReadAllowed } from "./generated/cli/src/lib.js";
import { beginInvocation, inspect, state } from "./adapters/host.js";
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
    beginInvocation(argv, context);
    setLegacyReadAllowed(false);
    try {
      await invokeReleased([...argv]);
    } finally {
      // A fresh native process closes its connection and forgets policy/settings after every invocation.
      resetDatabaseForTests();
    }
    return { stdout: state.stdout, stderr: state.stderr, status: state.status, metrics: inspect() };
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
  for (const [path, text] of Object.entries(files)) {
    if (!path.startsWith("/visitor/")) throw new Error("Virtual text files must live in /visitor");
    state.files.set(path, new TextEncoder().encode(text));
  }
}

export const snapshot = () => state.bytes?.slice();
export { inspect };
