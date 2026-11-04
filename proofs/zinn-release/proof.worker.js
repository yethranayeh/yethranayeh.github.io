import sqliteInit from "@sqlite.org/sqlite-wasm";
import wasmUrl from "@sqlite.org/sqlite-wasm/sqlite3.wasm?url";
import { initialize, invoke, snapshot, inspect, identity } from "./generated/browser-cli.js";
import { files } from "./conformance.js";

let ready;
self.onmessage = async ({ data }) => {
  const { id, action, argv, context, bytes } = data;
  try {
    ready ??= sqliteInit({ locateFile: () => wasmUrl }).then((sqlite) =>
      initialize(sqlite, { files, snapshot: bytes }),
    );
    await ready;
    if (action === "snapshot") {
      self.postMessage({ id, bytes: snapshot(), identity });
      return;
    }
    if (action === "inspect") {
      self.postMessage({ id, metrics: inspect(), identity });
      return;
    }
    const before = inspect();
    const beforeBytes = snapshot();
    const result = await invoke(argv, context);
    const afterBytes = snapshot();
    const hash = async (value) =>
      value
        ? [...new Uint8Array(await crypto.subtle.digest("SHA-256", value))]
            .map((byte) => byte.toString(16).padStart(2, "0"))
            .join("")
        : null;
    self.postMessage({
      id,
      ...result,
      before,
      beforeHash: await hash(beforeBytes),
      afterHash: await hash(afterBytes),
      identity,
    });
  } catch (error) {
    self.postMessage({ id, error: error.message });
  }
};
