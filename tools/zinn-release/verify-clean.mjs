import { cp, mkdtemp, mkdir, copyFile, readFile, writeFile, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const clean = await mkdtemp(path.join(tmpdir(), "port-zinn-clean-"));
function run(cmd, args) {
  const result = spawnSync(cmd, args, { cwd: clean, encoding: "utf8", timeout: 180_000 });
  assert.ifError(result.error);
  if (result.status !== 0) throw new Error(`${cmd} failed: ${result.stdout}\n${result.stderr}`);
  return result.stdout;
}
try {
  for (const file of ["package.json", "package-lock.json", ".npmrc"])
    await copyFile(path.join(root, file), path.join(clean, file));
  for (const folder of ["tools/zinn-release", "proofs/zinn-release", "proofs/zinn-shell-bridge"]) {
    await cp(path.join(root, folder), path.join(clean, folder), {
      recursive: true,
      filter: (source) =>
        !/(?:^|\/)(generated|artifacts|results)(?:\/|$)|(?:commands-)?results\.json$|commands-reference\.json$/.test(
          source,
        ),
    });
  }
  await mkdir(path.join(clean, "src/features/TerminalWindow"), { recursive: true });
  await copyFile(
    path.join(root, "src/features/TerminalWindow/sqlite-driver.ts"),
    path.join(clean, "src/features/TerminalWindow/sqlite-driver.ts"),
  );
  console.log(run("npm", ["ci", "--ignore-scripts", "--no-audit", "--no-fund"]));
  console.log(run(process.execPath, ["tools/zinn-release/check.mjs"]));
  console.log(run(process.execPath, ["tools/zinn-release/check-shell-commands.mjs"]));
  const source = path.join(clean, "node_modules/@zinn-dev/cli/index.js");
  await writeFile(source, `${await readFile(source, "utf8")}\n// drift\n`);
  const drift = spawnSync(process.execPath, ["tools/zinn-release/prepare.mjs"], {
    cwd: clean,
    encoding: "utf8",
  });
  assert.equal(drift.status, 1);
  assert.match(drift.stderr, /Upstream source drift: cli\/index.js/);
  console.log(
    "PASS: clean npm ci, released native/WASM and commands conformance, and rejection of modified upstream source.",
  );
} finally {
  await rm(clean, { recursive: true, force: true });
}
