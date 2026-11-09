import { createRequire } from "node:module";
import { createHash } from "node:crypto";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { build } from "esbuild";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const proof = path.join(root, "proofs/zinn-release");
const require = createRequire(import.meta.url);
const baseline = JSON.parse(await readFile(path.join(proof, "baseline.json"), "utf8"));
const expected = JSON.parse(await readFile(path.join(proof, "source-integrity.json"), "utf8"));
const lock = JSON.parse(await readFile(path.join(root, "package-lock.json"), "utf8"));
const sha = (bytes) => createHash("sha256").update(bytes).digest("hex");

export async function prepare() {
  // Check the entire retained runtime closure before writing generated output or applying a patch.
  for (const part of ["cli", "core"]) {
    const artifact = baseline.artifacts.find((entry) => entry.name === `@zinn-dev/${part}`);
    const entry = lock.packages[`node_modules/@zinn-dev/${part}`];
    if (
      entry.version !== artifact.version ||
      entry.integrity !== artifact.integrity ||
      entry.resolved !== artifact.tarball
    ) {
      throw new Error(
        `Release lock mismatch for ${part}. Review baseline.json and refresh together.`,
      );
    }
    for (const [file, digest] of Object.entries(expected[part])) {
      const bytes = await readFile(path.join(root, `node_modules/@zinn-dev/${part}`, file));
      if (sha(bytes) !== digest) throw new Error(`Upstream source drift: ${part}/${file}`);
    }
  }
  await rm(path.join(proof, "generated"), { recursive: true, force: true });
  await mkdir(path.join(proof, "generated"), { recursive: true });
  for (const part of ["cli", "core"]) {
    await cp(
      path.join(root, `node_modules/@zinn-dev/${part}`),
      path.join(proof, "generated", part),
      { recursive: true },
    );
  }
  execFileSync(
    "patch",
    ["--batch", "-p1", "-F0", "-i", path.join(proof, "patches/cli-0.44.0.patch")],
    {
      cwd: path.join(proof, "generated/cli"),
      stdio: "pipe",
    },
  );
  const builtins = {
    "node:util": "util.js",
    "node:fs": "fs.js",
    "node:os": "os.js",
    "node:child_process": "child-process.js",
    "node:readline/promises": "readline.js",
    "node:crypto": "crypto.js",
    "node:buffer": "buffer.js",
    "#sqlite": "sqlite.js",
  };
  const bundle = await build({
    absWorkingDir: root,
    entryPoints: [path.join(proof, "runtime.js")],
    outfile: path.join(proof, "generated/browser-cli.js"),
    bundle: true,
    platform: "browser",
    format: "esm",
    target: "es2022",
    define: { global: "globalThis" },
    inject: [path.join(proof, "adapters/host.js")],
    alias: { "node:path": "path-browserify" },
    plugins: [
      {
        name: "released-zinn-platform",
        setup(esbuild) {
          // Native run records require host files and must not inspect the board during a deferred probe.
          esbuild.onResolve(
            { filter: /(?:^|\/)(?:failure-log|telemetry)\.js$/ },
            ({ importer }) => {
              if (importer.startsWith(path.join(proof, "generated/cli/"))) {
                return { path: path.join(proof, "adapters/run-records.js") };
              }
            },
          );
          esbuild.onResolve(
            { filter: /^(?:node:|#sqlite$|@zinn-dev\/core$)/ },
            ({ path: specifier }) => {
              if (specifier === "node:path") return { path: require.resolve("path-browserify") };
              if (specifier === "@zinn-dev/core")
                return { path: path.join(proof, "generated/core/index.js") };
              const adapter = builtins[specifier];
              if (!adapter) throw new Error(`Unreviewed platform import: ${specifier}`);
              return { path: path.join(proof, "adapters", adapter) };
            },
          );
        },
      },
    ],
    metafile: true,
  });
  const entries = [];
  for (const part of ["cli", "core"]) {
    for (const [file, upstreamSha256] of Object.entries(expected[part])) {
      const generated = await readFile(path.join(proof, "generated", part, file));
      entries.push({
        package: part,
        file,
        upstreamSha256,
        generatedSha256: sha(generated),
        adaptation:
          part === "cli" && ["index.js", "src/lib.js"].includes(file)
            ? "cli-0.44.0.patch"
            : "verbatim",
      });
    }
  }
  await writeFile(
    path.join(proof, "generated/provenance.json"),
    JSON.stringify({ baseline, entries, inputs: Object.keys(bundle.metafile.inputs) }, null, 2) +
      "\n",
  );
  console.log(
    `Prepared released CLI ${baseline.cli} / core ${baseline.core} (${entries.length} verified files).`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await prepare();
