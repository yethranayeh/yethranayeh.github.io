import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import { IDBFactory, IDBKeyRange } from "fake-indexeddb";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundle = await build({
  stdin: {
    contents: `import { VisitorWorkspace, visitorHome, workspacePath, textContent } from "./src/features/VisitorWorkspace/workspace.ts";
import { workspaceZip } from "./src/features/VisitorWorkspace/export.ts";
import { TerminalShell } from "./src/features/TerminalWindow/terminal-shell.ts";
export { VisitorWorkspace, visitorHome, workspacePath, textContent, workspaceZip, TerminalShell };`,
    resolveDir: root,
    sourcefile: "terminal-workspace-loader.ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
const { VisitorWorkspace, visitorHome, workspacePath, textContent, workspaceZip, TerminalShell } =
  await import(moduleUrl);

const wasmPath = path.join(root, "node_modules/@everruns/bashkit-wasm/bashkit_wasm_bg.wasm");
await initBashkit(fs.readFileSync(wasmPath));

function useFreshStorage() {
  globalThis.indexedDB = new IDBFactory();
  globalThis.IDBKeyRange = IDBKeyRange;
  globalThis.BroadcastChannel = undefined;
}

function context(overrides = {}) {
  const downloads = [];
  const openedFiles = [];
  return {
    downloads,
    openedFiles,
    value: {
      open: () => true,
      openFile: (filePath) => openedFiles.push(filePath),
      async zinn() {
        return { text: "ok", persistence: "saved" };
      },
      download(name, bytes) {
        downloads.push({ name, bytes: new Uint8Array(bytes) });
      },
      history: [],
      ...overrides,
    },
  };
}

function openDatabase(name, version, upgrade) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    request.onupgradeneeded = () => upgrade(request.result);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function readStoredZip(bytes) {
  const entries = new Map();
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 0;
  while (offset + 4 <= bytes.length && view.getUint32(offset, true) === 0x04034b50) {
    const nameLength = view.getUint16(offset + 26, true);
    const extraLength = view.getUint16(offset + 28, true);
    const size = view.getUint32(offset + 18, true);
    const nameStart = offset + 30;
    const dataStart = nameStart + nameLength + extraLength;
    const name = new TextDecoder().decode(bytes.subarray(nameStart, nameStart + nameLength));
    entries.set(name, bytes.slice(dataStart, dataStart + size));
    offset = dataStart + size;
  }
  return entries;
}

test("BashKit and My Computer share files, and the host filesystem reloads from IndexedDB", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  assert.equal(workspace.persistence, "saved");
  const shell = new TerminalShell(Bash, workspace);
  const ctx = context();

  const result = await shell.execute(
    "mkdir notes && printf 'shared\\n' > notes/demo.txt && cat notes/demo.txt",
    ctx.value,
  );
  assert.equal(result.exitCode, 0, result.stderr);
  assert.equal(result.stdout, "shared\n");
  assert.equal(
    new TextDecoder().decode(workspace.read(`${visitorHome}/notes/demo.txt`)),
    "shared\n",
  );
  assert.deepEqual(
    workspace.readDir(`${visitorHome}/notes`).map((entry) => entry.name),
    ["demo.txt"],
  );

  const reloaded = await VisitorWorkspace.open();
  assert.equal(
    new TextDecoder().decode(reloaded.read(`${visitorHome}/notes/demo.txt`)),
    "shared\n",
  );
  assert.equal(reloaded.persistence, "saved");
});

test("Terminal supports cd, touch, cp, mv and rm against the persisted workspace", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const shell = new TerminalShell(Bash, workspace);
  const ctx = context();

  for (const command of [
    "mkdir ops",
    "cd ops",
    "printf 'from terminal\\n' > original.txt",
    "cp original.txt copied.txt",
    "mv original.txt renamed.txt",
    "touch empty.txt",
    "rm copied.txt",
  ]) {
    const result = await shell.execute(command, ctx.value);
    assert.equal(result.exitCode, 0, `${command}: ${result.stderr}`);
  }
  assert.equal((await shell.execute("pwd", ctx.value)).stdout, `${visitorHome}/ops\n`);
  assert.equal(
    new TextDecoder().decode(workspace.read(`${visitorHome}/ops/renamed.txt`)),
    "from terminal\n",
  );
  assert.deepEqual(workspace.read(`${visitorHome}/ops/empty.txt`), new Uint8Array());
  assert.equal(workspace.exists(`${visitorHome}/ops/original.txt`), false);
  assert.equal(workspace.exists(`${visitorHome}/ops/copied.txt`), false);
  const reloaded = await VisitorWorkspace.open();
  assert.equal(
    new TextDecoder().decode(reloaded.read(`${visitorHome}/ops/renamed.txt`)),
    "from terminal\n",
  );
});

test("Terminal recursively copies and moves folders through the HostFileSystem", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const shell = new TerminalShell(Bash, workspace);
  const ctx = context();

  for (const command of [
    "mkdir -p tree/source/sub",
    "printf leaf > tree/source/sub/file.txt",
    "cp -r tree/source tree/copied",
    "mv tree/copied tree/moved",
  ]) {
    const result = await shell.execute(command, ctx.value);
    assert.equal(result.exitCode, 0, `${command}: ${result.stderr}`);
  }
  assert.equal(new TextDecoder().decode(workspace.read(`${visitorHome}/tree/source/sub/file.txt`)), "leaf");
  assert.equal(new TextDecoder().decode(workspace.read(`${visitorHome}/tree/moved/sub/file.txt`)), "leaf");
  assert.equal(workspace.exists(`${visitorHome}/tree/copied`), false);
  const reloaded = await VisitorWorkspace.open();
  assert.equal(new TextDecoder().decode(reloaded.read(`${visitorHome}/tree/moved/sub/file.txt`)), "leaf");
});

test("open <file> sends a normalized visitor path to the file opener", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const shell = new TerminalShell(Bash, workspace);
  const ctx = context();

  const result = await shell.execute("open README.txt", ctx.value);
  assert.equal(result.exitCode, 0, result.stderr);
  assert.deepEqual(ctx.openedFiles, [`${visitorHome}/README.txt`]);
});

test("binary upload reaches TerminalShell intact and duplicate uploads reject without replacing it", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const shell = new TerminalShell(Bash, workspace);
  const ctx = context();
  const binary = Uint8Array.from([0, 255, 1, 128, 10]);

  assert.equal(await shell.upload("payload.bin", binary), `${visitorHome}/payload.bin`);
  assert.deepEqual(workspace.read(`${visitorHome}/payload.bin`), binary);
  await assert.rejects(shell.upload("payload.bin", Uint8Array.of(9)), /already exists/);

  const result = await shell.execute("download payload.bin", ctx.value);
  assert.equal(result.exitCode, 0, result.stderr);
  assert.deepEqual(ctx.downloads[0], { name: "payload.bin", bytes: binary });
  const reloaded = await VisitorWorkspace.open();
  assert.deepEqual(reloaded.read(`${visitorHome}/payload.bin`), binary);
});

test("text saves persist and stale editor drafts are rejected", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const filePath = `${visitorHome}/README.txt`;
  const original = workspace.read(filePath);

  await workspace.saveText(filePath, "edited text", original);
  await assert.rejects(workspace.saveText(filePath, "stale text", original), /file changed/i);
  assert.equal(new TextDecoder().decode(workspace.read(filePath)), "edited text");
  assert.equal(
    new TextDecoder().decode((await VisitorWorkspace.open()).read(filePath)),
    "edited text",
  );
});

test("text saves over 1 MB reject and preserve the original file", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const filePath = `${visitorHome}/README.txt`;
  const original = workspace.read(filePath);
  const tooLarge = "x".repeat(1024 * 1024 + 1);

  await assert.rejects(workspace.saveText(filePath, tooLarge, original), /1 MB/i);
  assert.deepEqual(workspace.read(filePath), original);
  assert.deepEqual((await VisitorWorkspace.open()).read(filePath), original);
});

test("file size limits roll back changes, and upload enforces its 5 MB limit", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const tooLarge = new Uint8Array(5 * 1024 * 1024 + 1);

  await assert.rejects(workspace.upload("oversized.bin", tooLarge), /smaller than 5 MB/i);
  await assert.rejects(
    workspace.run(() => workspace.write(`${visitorHome}/oversized.bin`, tooLarge)),
    /smaller than 5 MB/i,
  );
  assert.equal(workspace.exists(`${visitorHome}/oversized.bin`), false);
  assert.equal((await VisitorWorkspace.open()).exists(`${visitorHome}/oversized.bin`), false);
});

test("total workspace size is capped at 20 MB", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const maxFile = 5 * 1024 * 1024;
  const file = new Uint8Array(maxFile);

  await assert.rejects(
    workspace.run(() => {
      workspace.write(`${visitorHome}/one.bin`, file);
      workspace.write(`${visitorHome}/two.bin`, file);
      workspace.write(`${visitorHome}/three.bin`, file);
      workspace.write(`${visitorHome}/four.bin`, file);
    }),
    /Workspace limit reached \(20 MB/i,
  );
  assert.equal(workspace.exists(`${visitorHome}/one.bin`), false);
  assert.equal((await VisitorWorkspace.open()).exists(`${visitorHome}/one.bin`), false);
});

test("path normalization cannot expose owner source or write outside the visitor home", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  assert.equal(
    workspacePath("../../../src/features/TerminalWindow/terminal-shell.ts"),
    "/src/features/TerminalWindow/terminal-shell.ts",
  );
  assert.equal(workspace.exists("/src"), false);
  assert.equal(workspace.exists("/Users/alperhalil"), false);
  await assert.rejects(
    workspace.run(() => workspace.write("/src/private.ts", new TextEncoder().encode("owner data"))),
    /Only \/home\/guest is writable/,
  );
  await assert.rejects(
    workspace.run(() => workspace.read("/src/private.ts")),
    /File not found/,
  );
  assert.equal(
    new TextDecoder()
      .decode(workspace.read(`${visitorHome}/README.txt`))
      .includes("Portfolio source is a separate"),
    true,
  );
});

test("reset restores visitor seed files without touching Zinn's separate database", async () => {
  useFreshStorage();
  const zinnDb = await openDatabase("portfolio-zinn-playground", 1, (db) =>
    db.createObjectStore("snapshots"),
  );
  await new Promise((resolve, reject) => {
    const tx = zinnDb.transaction("snapshots", "readwrite");
    tx.objectStore("snapshots").put({ revision: 7, bytes: Uint8Array.of(1, 2, 3) }, "board");
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });

  const workspace = await VisitorWorkspace.open();
  await workspace.upload("visitor.txt", new TextEncoder().encode("keep me until reset"));
  await workspace.run(() => workspace.mkdir(`${visitorHome}/empty`, false));
  await workspace.reset();

  assert.equal(workspace.exists(`${visitorHome}/visitor.txt`), false);
  assert.equal(workspace.exists(`${visitorHome}/empty`), false);
  assert.equal(workspace.exists(`${visitorHome}/local-server-troubleshooting.txt`), true);
  assert.equal(workspace.exists(`${visitorHome}/README.txt`), true);
  const board = await new Promise((resolve, reject) => {
    const tx = zinnDb.transaction("snapshots", "readonly");
    const req = tx.objectStore("snapshots").get("board");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  assert.deepEqual(board, { revision: 7, bytes: Uint8Array.of(1, 2, 3) });
});

test("reset from a nested Terminal cwd returns the shell to /home/guest", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const shell = new TerminalShell(Bash, workspace);
  const ctx = context();

  const nested = await shell.execute("mkdir project && cd project && pwd", ctx.value);
  assert.equal(nested.stdout, `${visitorHome}/project\n`);
  await workspace.reset();

  const afterReset = await shell.execute("pwd && touch new.txt", ctx.value);
  assert.equal(afterReset.exitCode, 0, afterReset.stderr);
  assert.equal(afterReset.stdout, `${visitorHome}\n`);
  assert.equal(workspace.exists(`${visitorHome}/new.txt`), true);
});

test("ZIP export preserves binary files, nested paths, and empty folders", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const binary = Uint8Array.from([0, 255, 1, 128, 10]);
  await workspace.run(() => {
    workspace.mkdir(`${visitorHome}/nested`, false);
    workspace.write(`${visitorHome}/nested/data.bin`, binary);
    workspace.mkdir(`${visitorHome}/empty`, false);
  });

  const zip = workspaceZip(workspace.files());
  const entries = readStoredZip(zip);
  assert.deepEqual(entries.get("nested/data.bin"), binary);
  assert.deepEqual(entries.get("empty/"), new Uint8Array());
});

test("uploaded HTML remains inert text and binary content is rejected by the text reader", async () => {
  useFreshStorage();
  const workspace = await VisitorWorkspace.open();
  const html = '<script>globalThis.ownerData = "stolen"</script><p>hello</p>';
  await workspace.upload("untrusted.html", new TextEncoder().encode(html));

  assert.equal(textContent(workspace.read(`${visitorHome}/untrusted.html`)), html);
  assert.throws(() => textContent(Uint8Array.from([0, 255, 10])), /binary file|not UTF-8 text/i);
  assert.throws(() => textContent(Uint8Array.from([0, 1, 2])), /binary file/i);
});

test("concurrent workspaces reject a stale revision and preserve the committed winner", async () => {
  useFreshStorage();
  const first = await VisitorWorkspace.open();
  const second = await VisitorWorkspace.open();
  let releaseFirst;
  let firstIsReady;
  const ready = new Promise((resolve) => {
    firstIsReady = resolve;
  });
  const pause = new Promise((resolve) => {
    releaseFirst = resolve;
  });

  const staleWrite = first.run(async () => {
    first.write(`${visitorHome}/winner.txt`, new TextEncoder().encode("stale"));
    firstIsReady();
    await pause;
  });
  await ready;
  await second.run(() =>
    second.write(`${visitorHome}/winner.txt`, new TextEncoder().encode("current")),
  );
  releaseFirst();
  await assert.rejects(staleWrite, /changed in another tab/i);

  const reloaded = await VisitorWorkspace.open();
  assert.equal(new TextDecoder().decode(reloaded.read(`${visitorHome}/winner.txt`)), "current");
});
