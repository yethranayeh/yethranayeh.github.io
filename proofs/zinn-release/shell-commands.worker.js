import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import bashWasmUrl from "@everruns/bashkit-wasm/bashkit_wasm_bg.wasm?url";
import sqliteInit from "@sqlite.org/sqlite-wasm";
import sqliteWasmUrl from "@sqlite.org/sqlite-wasm/sqlite3.wasm?url";
import * as runtime from "./generated/browser-cli.js";
import reference from "../zinn-shell-bridge/commands-reference.json";
import { files } from "./conformance.js";
import { runCommandsSuite, equal } from "../zinn-shell-bridge/commands-suite.js";

self.onmessage = async () => {
  try {
    await initBashkit(await (await fetch(bashWasmUrl)).arrayBuffer());
    runtime.initialize(await sqliteInit({ locateFile: () => sqliteWasmUrl }), { files });
    const result = await runCommandsSuite({ Bash, runtime, cases: reference.cases });
    equal(result.rows.length, reference.expectedRows, "same Node/browser checks");
    self.postMessage({
      passed: result.rows.length,
      nativeComparisons: reference.cases.length,
      identity: result.identity,
      metrics: result.metrics,
      automaticTTY: result.automaticTTY,
      contexts: result.contexts,
      checks: result.rows.map(({ id }) => id),
      browser: navigator.userAgent,
    });
  } catch (error) {
    self.postMessage({ error: error.stack ?? error.message });
  }
};
