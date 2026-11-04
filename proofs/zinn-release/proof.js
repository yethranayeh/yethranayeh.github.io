import { comparable, operationCases } from "./conformance.js";
import baseline from "./baseline.json";

const byId = (id) => document.getElementById(id);
byId("identity").textContent =
  `CLI ${baseline.cli} / core ${baseline.core} / ${baseline.adaptation}`;
let sequence = 0;
function client() {
  const worker = new Worker(new URL("./proof.worker.js", import.meta.url), { type: "module" });
  const pending = new Map();
  worker.onmessage = ({ data }) => {
    const job = pending.get(data.id);
    if (!job) return;
    pending.delete(data.id);
    clearTimeout(job.timer);
    if (data.error) job.reject(new Error(data.error));
    else job.resolve(data);
  };
  worker.onerror = (event) => {
    for (const job of pending.values()) {
      clearTimeout(job.timer);
      job.reject(new Error(event.message));
    }
    pending.clear();
  };
  return {
    call: (request) =>
      new Promise((resolve, reject) => {
        const id = ++sequence;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(new Error("Worker timed out"));
        }, 20_000);
        pending.set(id, { resolve, reject, timer });
        worker.postMessage({ id, ...request });
      }),
    close: () => worker.terminate(),
  };
}
const interactive = client();
function append(argv, result) {
  byId("transcript").textContent +=
    `$ zinn ${argv.map((arg) => JSON.stringify(arg)).join(" ")}\n${result.stdout}${result.stderr ? `[stderr]\n${result.stderr}` : ""}[exit ${result.status}, board opens ${result.metrics.opens}]\n\n`;
}
async function guarded(action) {
  for (const button of document.querySelectorAll("button")) button.disabled = true;
  try {
    await action();
  } catch (error) {
    byId("status").textContent = `FAIL: ${error.message}`;
  } finally {
    for (const button of document.querySelectorAll("button")) button.disabled = false;
  }
}
byId("invoke").onclick = () =>
  guarded(async () => {
    const argv = JSON.parse(byId("argv").value);
    if (!Array.isArray(argv) || argv.some((arg) => typeof arg !== "string"))
      throw new Error("Enter an array of strings");
    const result = await interactive.call({ argv });
    append(argv, result);
    byId("status").textContent =
      `Exit ${result.status}. Board ${result.metrics.exists ? "exists" : "has not been initialized"}.`;
  });
byId("demo").onclick = () =>
  guarded(async () => {
    const demo = client();
    try {
      for (const argv of operationCases.slice(0, 10)) append(argv, await demo.call({ argv }));
      byId("status").textContent = "Canonical demo completed on its own disposable board.";
    } finally {
      demo.close();
    }
  });

export async function runConformance() {
  const { default: reference } = await import("./generated/native-reference.json");
  const test = client();
  const results = [];
  try {
    for (const row of reference.rows) {
      const actual = await test.call({
        argv: row.argv,
        context: { color: row.color, columns: row.columns, tty: row.columns !== undefined },
      });
      const output = comparable(actual);
      if (JSON.stringify(output) !== JSON.stringify(row.expected))
        throw new Error(
          `Output mismatch: ${JSON.stringify(row.argv)}\n${JSON.stringify(output)}\nExpected: ${JSON.stringify(row.expected)}`,
        );
      if (
        row.readonly &&
        (JSON.stringify(actual.before) !== JSON.stringify(actual.metrics) ||
          actual.beforeHash !== actual.afterHash)
      )
        throw new Error(`Read-only guard failed: ${JSON.stringify(row.argv)}`);
      results.push({ argv: row.argv, status: actual.status, readonly: row.readonly });
      byId("status").textContent =
        `Comparing ${results.length}/${reference.rows.length} invocations`;
    }
    for (const row of reference.differences) {
      const actual = await test.call({ argv: row.argv });
      if (
        actual.status !== 0 ||
        JSON.stringify(JSON.parse(actual.stdout)) !== JSON.stringify(row.browser)
      )
        throw new Error(`Expected environment difference changed: ${JSON.stringify(row.argv)}`);
    }
    const saved = await test.call({ action: "snapshot" });
    const restored = client();
    try {
      const argv = ["task", "list", "PLAY", "--json"];
      const before = await test.call({ argv });
      const after = await restored.call({ argv, bytes: saved.bytes });
      if (before.stdout !== after.stdout || after.status !== 0)
        throw new Error("Snapshot reload differed");
    } finally {
      restored.close();
    }
    const result = {
      passed: results.length,
      snapshotReload: true,
      differences: reference.differences,
      identity: reference.identity,
      browser: navigator.userAgent,
      results,
    };
    byId("results").textContent = JSON.stringify(result, null, 2);
    byId("status").textContent =
      `PASS: ${results.length} native/browser comparisons, read-only guards and SQLite snapshot reload.`;
    return result;
  } finally {
    test.close();
  }
}
byId("suite").onclick = () => guarded(runConformance);
if (new URLSearchParams(location.search).has("check")) guarded(runConformance);
