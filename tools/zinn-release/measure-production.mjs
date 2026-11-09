import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = new URL("../../", import.meta.url);
const names = (await readdir(new URL("dist/assets/", root))).filter((name) =>
  /^zinn.worker-.*\.js$|^TerminalWindow-.*\.js$|\.wasm$/.test(name),
);
for (const prefix of [
  "zinn.worker-",
  "TerminalWindow-",
  "bashkit_wasm_bg-",
  "ghostty-vt-",
  "sqlite3-",
])
  assert.ok(
    names.some((name) => name.startsWith(prefix)),
    `Missing built asset: ${prefix}`,
  );

const assets = [];
for (const name of names) {
  const file = `dist/assets/${name}`;
  const bytes = await readFile(new URL(file, root));
  assets.push({
    file,
    bytes: bytes.length,
    gzipBytes: gzipSync(bytes).length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
  });
}
const notices = [];
for (const name of ["baseline.json", "provenance.json", "THIRD_PARTY_NOTICES.md"]) {
  const file = `dist/zinn/${name}`;
  notices.push({ file, bytes: (await readFile(new URL(file, root))).length });
}
const provenance = JSON.parse(await readFile(new URL("dist/zinn/provenance.json", root), "utf8"));
assert.ok(
  !provenance.inputs.some((file) =>
    /src\/vendor\/zinn|zinn-(cli|commands)\.ts|zinn-core/.test(file),
  ),
);
const report = {
  checkedAt: new Date().toISOString(),
  node: process.version,
  assets,
  notices,
  legacyRuntimeInClosure: false,
};
const output = new URL("proofs/zinn-release/production-build.json", root);
await writeFile(output, JSON.stringify(report, null, 2) + "\n");
console.log(`Recorded production asset sizes, hashes and notices in ${fileURLToPath(output)}`);
