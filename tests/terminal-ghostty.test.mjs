import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { Ghostty } from "ghostty-web";

const wasmBytes = await readFile(
  new URL("../node_modules/ghostty-web/ghostty-vt.wasm", import.meta.url),
);
const wasmModule = await WebAssembly.compile(wasmBytes);

async function createGhostty() {
  const instance = await WebAssembly.instantiate(wasmModule, {
    env: { log() {} },
  });
  return new Ghostty(instance);
}

function screenText(terminal) {
  return Array.from({ length: terminal.rows }, (_, row) =>
    terminal
      .getLine(row)
      .map((cell) =>
        cell.width === 0 ? "" : String.fromCodePoint(cell.codepoint || 32),
      )
      .join("")
      .trimEnd(),
  ).join("\n");
}

test("a fresh Ghostty WASM instance isolates a terminal after resize and dispose", async () => {
  const previousGhostty = await createGhostty();
  const previous = previousGhostty.createTerminal(80, 24);
  previous.write("PREVIOUS SESSION ONLY\r\nLINE TWO\r\n");
  previous.resize(36, 24);
  previous.free();

  const currentGhostty = await createGhostty();
  const current = currentGhostty.createTerminal(80, 24);
  current.resize(36, 24);
  current.write("CURRENT SESSION ONLY\r\nLINE TWO CURRENT\r\n");

  const screen = screenText(current);
  assert.match(screen, /CURRENT SESSION ONLY/);
  assert.match(screen, /LINE TWO CURRENT/);
  assert.doesNotMatch(screen, /PREVIOUS SESSION ONLY|ONLYY/);

  current.free();
});
