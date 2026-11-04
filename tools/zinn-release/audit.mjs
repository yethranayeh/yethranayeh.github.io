import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const proof = path.join(root, "proofs/zinn-release");
const baseline = JSON.parse(await readFile(path.join(proof, "baseline.json"), "utf8"));
async function metadata(name, version) {
  const response = await fetch(`https://registry.npmjs.org/${encodeURIComponent(name)}/${version}`);
  if (!response.ok) throw new Error(`Registry ${name}@${version}: HTTP ${response.status}`);
  return response.json();
}
const latestCli = await metadata("@zinn-dev/cli", "latest");
const latestCore = await metadata("@zinn-dev/core", "latest");
const artifacts = [];
for (const expected of baseline.artifacts) {
  const record = await metadata(expected.name, expected.version);
  assert.equal(record.dist.tarball, expected.tarball);
  assert.equal(record.dist.integrity, expected.integrity);
  assert.equal(record.dist.shasum, expected.shasum);
  if (expected.name === "@zinn-dev/cli")
    assert.equal(record.dependencies["@zinn-dev/core"], baseline.core);
  const response = await fetch(expected.tarball);
  if (!response.ok) throw new Error(`Artifact HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const digest = (algorithm, encoding = "hex") =>
    createHash(algorithm).update(bytes).digest(encoding);
  assert.equal(`sha512-${digest("sha512", "base64")}`, expected.integrity);
  assert.equal(digest("sha1"), expected.shasum);
  assert.equal(digest("sha256"), expected.sha256);
  artifacts.push({
    ...expected,
    bytes: bytes.length,
    repository: record.repository,
    gitHead: record.gitHead ?? null,
    attestations: record.dist.attestations ?? null,
  });
}
const result = {
  checkedAt: new Date().toISOString(),
  registry: "https://registry.npmjs.org",
  latest: { cli: latestCli.version, core: latestCore.version },
  selected: { cli: baseline.cli, core: baseline.core, matchingDependency: true },
  integrityVerified: ["SHA-512 SRI", "SHA-1 registry shasum", "SHA-256 local artifact digest"],
  provenanceLimit:
    "Registry package/repository declarations only. No gitHead or attestations were supplied. Registry signatures were not independently verified.",
  artifacts,
};
await mkdir(path.join(proof, "results"), { recursive: true });
await writeFile(
  path.join(proof, "results/release-audit.json"),
  JSON.stringify(result, null, 2) + "\n",
);
console.log(JSON.stringify(result, null, 2));
