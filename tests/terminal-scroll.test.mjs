import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { CanvasRenderer } from "ghostty-web";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const compatibilityBundle = await build({
  entryPoints: [path.join(root, "src/features/TerminalWindow/ghostty-compat.ts")],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const compatibilityUrl = `data:text/javascript;base64,${Buffer.from(
  compatibilityBundle.outputFiles[0].contents,
).toString("base64")}`;
const { alignViewportRows } = await import(compatibilityUrl);

function createCanvasHarness() {
  const draws = [];
  const context = {
    measureText: () => ({ width: 1, actualBoundingBoxAscent: 8, actualBoundingBoxDescent: 2 }),
    scale() {},
    fillRect() {},
    fillText(text, x, y) {
      draws.push({ text, x, y });
    },
    beginPath() {},
    moveTo() {},
    lineTo() {},
    stroke() {},
  };
  const canvas = {
    width: 0,
    height: 0,
    style: {},
    getContext: () => context,
  };
  globalThis.document = { createElement: () => ({ getContext: () => context }) };
  return { canvas, draws };
}

function cells(text, columns) {
  return [...text.padEnd(columns)].map((char) => ({
    codepoint: char.codePointAt(0),
    fg_r: 255,
    fg_g: 255,
    fg_b: 255,
    bg_r: 0,
    bg_g: 0,
    bg_b: 0,
    flags: 0,
    width: 1,
    hyperlink_id: 0,
    grapheme_len: 0,
  }));
}

function visibleRows(draws, rowHeight, rows) {
  return Array.from({ length: rows }, (_, row) => {
    const baseline = row * rowHeight + 9;
    return draws
      .filter((draw) => draw.y === baseline)
      .sort((left, right) => left.x - right.x)
      .map((draw) => draw.text)
      .join("")
      .trimEnd();
  });
}

test("fractional viewport values render complete, whole-row scrollback slices", () => {
  const { canvas, draws } = createCanvasHarness();
  const columns = 12;
  const rowCount = 4;
  const rowHeight = 12;
  const history = ["HISTORY_0", "HISTORY_1", "HISTORY_2"].map((row) => cells(row, columns));
  const screen = ["LIVE_0", "LIVE_1", "LIVE_2", "LIVE_3"].map((row) => cells(row, columns));
  const buffer = {
    getCursor: () => ({ x: 0, y: 0, visible: false }),
    getDimensions: () => ({ cols: columns, rows: rowCount }),
    needsFullRedraw: () => false,
    isRowDirty: () => false,
    getLine: (row) => screen[row] ?? null,
    getGraphemeString: () => " ",
    clearDirty() {},
  };
  const scrollback = {
    getScrollbackLength: () => history.length,
    getScrollbackLine: (offset) => history[offset] ?? null,
  };
  const renderer = new CanvasRenderer(canvas, {
    fontFamily: "monospace",
    fontSize: 10,
    devicePixelRatio: 1,
  });
  alignViewportRows(renderer);

  for (const viewportY of [0, 0.5, 1.5, 2.5, 3.5]) {
    draws.length = 0;
    renderer.render(buffer, true, viewportY, scrollback, 0);

    const rowOffset = Math.floor(viewportY);
    const combined = [...history, ...screen];
    const start = history.length - rowOffset;
    const expected = combined.slice(start, start + rowCount).map((row) =>
      row
        .map((cell) => String.fromCodePoint(cell.codepoint))
        .join("")
        .trimEnd(),
    );
    assert.deepEqual(visibleRows(draws, rowHeight, rowCount), expected);
  }
});
