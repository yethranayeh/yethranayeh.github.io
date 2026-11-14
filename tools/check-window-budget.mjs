import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

/**
 * Guards the loading-screen warm-up.
 *
 * Every chunk listed here is fetched on load, before the visitor asks for it,
 * so growth is paid by everyone and hidden behind a loading screen that already
 * takes seconds. The per-chunk and total budgets are far above today's sizes on
 * purpose: this catches an order-of-magnitude mistake, not a few kilobytes.
 */

const LIMIT_SINGLE = 20 * 1024;
const LIMIT_TOTAL = 60 * 1024;

const prefixes = [
  "ProjectsWindow-",
  "ResumeWindow-",
  "AppsWindow-",
  "MediaWindow-",
  "ComputerWindow-",
  "ExperiencesWindow-",
  "Zinn-",
  "PlayerType-",
  "Sarmal-",
  "DailySpacePalette-",
  "VideoPlayer-",
  "ImageViewer-",
];

const root = new URL("../", import.meta.url);
const files = (await readdir(new URL("dist/assets/", root))).filter((name) => name.endsWith(".js"));

const found = new Map();
for (const prefix of prefixes) {
  const match = files.filter((name) => name.startsWith(prefix));
  if (match.length !== 1) {
    console.error(
      `Expected exactly one built chunk for "${prefix}", found ${match.length}. ` +
        "A renamed or merged window chunk makes the budget blind, so this fails deliberately.",
    );
    process.exit(1);
  }
  const bytes = await readFile(new URL(`dist/assets/${match[0]}`, root));
  found.set(match[0], gzipSync(bytes).length);
}

const rows = [...found.entries()].sort((a, b) => b[1] - a[1]);
const total = rows.reduce((sum, [, size]) => sum + size, 0);
const oversized = rows.filter(([, size]) => size > LIMIT_SINGLE);

for (const [name, size] of rows) {
  console.log(`${(size / 1024).toFixed(2).padStart(7)} kB  ${name}`);
}
console.log(
  `${(total / 1024).toFixed(2).padStart(7)} kB  total gzip, budget ${LIMIT_TOTAL / 1024} kB`,
);

if (oversized.length) {
  console.error(
    `\nOver the ${LIMIT_SINGLE / 1024} kB per-chunk budget: ${oversized.map(([n]) => n).join(", ")}`,
  );
}
if (total > LIMIT_TOTAL) {
  console.error(
    `\nWarm-up set is ${(total / 1024).toFixed(1)} kB gzip, over the ${LIMIT_TOTAL / 1024} kB budget.`,
  );
}
if (oversized.length || total > LIMIT_TOTAL) {
  console.error(
    `File: ${fileURLToPath(import.meta.url)}\n` +
      "Either shrink the chunk, or remove it from the warm-up set in src/config/windowContent.ts and gate it on intent instead.",
  );
  process.exit(1);
}
