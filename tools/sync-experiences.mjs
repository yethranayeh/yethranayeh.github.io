#!/usr/bin/env node
/**
 * Syncs the curated experiments into `public/experiences/`.
 *
 * The canonical copies live in the cool-components checkout (see `source` in
 * `src/config/experiences.json`). `public/` is copied verbatim by Vite, which
 * is the only place in this repo where these self-contained pages stay
 * self-contained: no bundling, no CSS scoping, no rewriting.
 *
 * Usage:
 *   node tools/sync-experiences.mjs            # copy
 *   node tools/sync-experiences.mjs --check    # verify only, exit 1 if stale
 *   node tools/sync-experiences.mjs --dry-run  # print the plan
 */
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "src/config/experiences.json");
const destRoot = path.join(root, "public/experiences");

const args = new Set(process.argv.slice(2));
const checkOnly = args.has("--check");
const dryRun = args.has("--dry-run");
const prune = args.has("--prune");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const sourceRoot = path.resolve(root, manifest.source);

if (!existsSync(sourceRoot)) {
  console.error(`✗ source not found: ${manifest.source}\n  (resolved to ${sourceRoot})`);
  process.exit(1);
}

const slugToDir = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  return new Map(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => [entry.name, path.join(dir, entry.name)]),
  );
};

const available = await slugToDir(sourceRoot);
const missing = manifest.items.filter((item) => !available.has(item.slug));
const stale = [];

if (missing.length) {
  console.error(`✗ not found in ${manifest.source}:`);
  for (const item of missing) console.error(`    ${item.slug}`);
  process.exit(1);
}

if (existsSync(destRoot)) {
  const synced = await slugToDir(destRoot);
  const wanted = new Set(manifest.items.map((item) => item.slug));
  for (const name of synced.keys()) {
    if (!wanted.has(name)) stale.push(name);
  }
}

const rows = [];
let total = 0;

for (const item of manifest.items) {
  const src = available.get(item.slug);
  const dest = path.join(destRoot, item.slug);
  let bytes = 0;

  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.name === ".DS_Store" || entry.name === "node_modules") continue;
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(abs);
      else bytes += (await stat(abs)).size;
    }
  };
  await walk(src);

  total += bytes;
  rows.push({ slug: item.slug, kb: Math.round(bytes / 1024) });

  if (dryRun || checkOnly) continue;

  await mkdir(destRoot, { recursive: true });
  await cp(src, dest, {
    recursive: true,
    force: true,
    filter: (file) => !file.endsWith(".DS_Store") && !file.includes(`${path.sep}node_modules`),
  });

  // Small, explicit edits that adapt a piece to this presentation. Declared in
  // the manifest and verified by --check, so source drift is caught here rather
  // than silently reverting a default.
  for (const patch of item.patches ?? []) {
    const file = path.join(dest, patch.file);
    const source = await readFile(file, "utf8");
    if (!source.includes(patch.find)) {
      console.error(`✗ patch target missing in ${item.slug}/${patch.file}`);
      process.exit(1);
    }
    await writeFile(file, source.replace(patch.find, patch.replace));
  }
}

const patchCount = manifest.items.reduce((sum, item) => sum + (item.patches?.length ?? 0), 0);

if (checkOnly) {
  const broken = [];
  for (const item of manifest.items) {
    for (const patch of item.patches ?? []) {
      const source = await readFile(path.join(available.get(item.slug), patch.file), "utf8");
      if (!source.includes(patch.find)) broken.push(`${item.slug}/${patch.file}`);
    }
  }
  if (broken.length) {
    console.error(`\n✗ patch targets no longer found:`);
    for (const name of broken) console.error(`    ${name}`);
    process.exit(1);
  }
  console.log(`\n${patchCount} patch target(s) still applicable.`);
}

const pad = (value, width) => String(value).padEnd(width);
const padStart = (value, width) => String(value).padStart(width);

console.log(`\n${manifest.items.length} experiments → public/experiences/\n`);
for (const row of rows) {
  console.log(`  ${pad(row.slug, 28)} ${padStart(row.kb, 6)} KB`);
}
console.log(`  ${pad("total", 28)} ${padStart(Math.round(total / 1024), 6)} KB`);

if (stale.length) {
  console.log(
    `\n${prune && !checkOnly && !dryRun ? "pruned" : "would prune"} ${stale.length} copied folder(s) not in the manifest:`,
  );
  for (const name of stale) console.log(`    ${name}`);
  if (prune && !checkOnly && !dryRun) {
    for (const name of stale) {
      await rm(path.join(destRoot, name), { recursive: true, force: true });
    }
  }
}

if (checkOnly) {
  console.log(`\n(check only — nothing written)`);
} else if (dryRun) {
  console.log(`\n(dry run — nothing written)`);
} else {
  console.log(`\ndone.`);
}
