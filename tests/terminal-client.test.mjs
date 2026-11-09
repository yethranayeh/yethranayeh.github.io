import assert from "node:assert/strict";
import { build } from "esbuild";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const source = await readFile(
  new URL("../src/features/TerminalWindow/zinn-client.ts", import.meta.url),
  "utf8",
);
const bundle = await build({
  stdin: { contents: source.replace("30_000", "15"), loader: "ts" },
  define: { "import.meta.url": '"file:///test/client.js"' },
  bundle: true,
  format: "esm",
  write: false,
});
const url = `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;

test("worker errors and timeouts reject pending RPC, terminate, then create a fresh retry worker", async () => {
  const workers = [];
  globalThis.Worker = class {
    constructor() {
      workers.push(this);
    }
    postMessage(message) {
      this.message = message;
    }
    terminate() {
      this.terminated = true;
    }
  };
  const { zinnRequest } = await import(url);
  const first = zinnRequest(["task", "list", "PLAY"]);
  const second = zinnRequest(["--version"]);
  const failed = Promise.allSettled([first, second]);
  workers[0].onerror();
  assert.ok((await failed).every((r) => r.status === "rejected"));
  assert.equal(workers[0].terminated, true);
  const retry = zinnRequest(["--version"]);
  workers[1].onmessage({
    data: { id: workers[1].message.id, result: { stdout: "0.43.0\n", stderr: "", status: 0 } },
  });
  assert.equal((await retry).stdout, "0.43.0\n");
  await assert.rejects(zinnRequest(["task", "list", "PLAY"]), /too long/);
  assert.equal(workers[1].terminated, true);
  const afterTimeout = zinnRequest(["--version"]);
  workers[2].onmessage({
    data: { id: workers[2].message.id, result: { stdout: "0.43.0\n", stderr: "", status: 0 } },
  });
  assert.equal((await afterTimeout).status, 0);
});
