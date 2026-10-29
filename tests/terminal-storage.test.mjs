import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { IDBFactory, IDBKeyRange } from "fake-indexeddb";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundle = await build({
  entryPoints: [path.join(root, "src/features/TerminalWindow/playground-storage.ts")],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
const { PlaygroundStorage } = await import(moduleUrl);

function useFreshIndexedDb() {
  globalThis.indexedDB = new IDBFactory();
  globalThis.IDBKeyRange = IDBKeyRange;
}

function bytes(...values) {
  return new Uint8Array(values);
}

test("PlaygroundStorage atomically replaces a complete snapshot and increments its revision", async () => {
  useFreshIndexedDb();
  const storage = await PlaygroundStorage.open();
  assert.equal(await storage.read(), undefined);

  const first = bytes(1, 2, 3);
  assert.equal(await storage.save(first, 0), 1);
  const firstSnapshot = await storage.read();
  assert.equal(firstSnapshot.revision, 1);
  assert.deepEqual(firstSnapshot.bytes, first);

  const next = bytes(9, 8, 7, 6);
  assert.equal(await storage.save(next, 1), 2);
  const saved = await storage.read();
  assert.equal(saved.revision, 2);
  assert.deepEqual(saved.bytes, next);
});

test("stale revisions conflict without changing the stored snapshot bytes", async () => {
  useFreshIndexedDb();
  const storage = await PlaygroundStorage.open();
  const original = bytes(10, 20, 30);
  await storage.save(original, 0);

  await assert.rejects(storage.save(bytes(99, 98), 0), /changed in another tab/);

  const saved = await storage.read();
  assert.equal(saved.revision, 1);
  assert.deepEqual(saved.bytes, original);
});

test("two tabs saving the same revision commit one complete winner", async () => {
  useFreshIndexedDb();
  const firstTab = await PlaygroundStorage.open();
  const secondTab = await PlaygroundStorage.open();
  const original = bytes(1, 1);
  await firstTab.save(original, 0);
  const firstCandidate = bytes(2, 2, 2);
  const secondCandidate = bytes(3, 3, 3, 3);

  const results = await Promise.allSettled([
    firstTab.save(firstCandidate, 1),
    secondTab.save(secondCandidate, 1),
  ]);
  assert.equal(results.filter((result) => result.status === "fulfilled").length, 1);
  assert.equal(results.filter((result) => result.status === "rejected").length, 1);

  const saved = await firstTab.read();
  assert.equal(saved.revision, 2);
  assert.ok(
    Buffer.from(saved.bytes).equals(Buffer.from(firstCandidate)) ||
      Buffer.from(saved.bytes).equals(Buffer.from(secondCandidate)),
  );
  assert.notDeepEqual(saved.bytes, original);
});
