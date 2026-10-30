import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { build } from "esbuild";
import { Ghostty, InputHandler } from "ghostty-web";

const bundle = await build({
  stdin: {
    contents: `export { LineEditor } from './src/features/TerminalWindow/line-editor.ts';
export { completeLine } from './src/features/TerminalWindow/completion.ts';
export { PromptDisplay } from './src/features/TerminalWindow/prompt-display.ts';
export { prompt } from './src/features/TerminalWindow/shell.ts';`,
    resolveDir: process.cwd(),
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const { LineEditor, completeLine, PromptDisplay, prompt } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`
);
const wasm = await WebAssembly.compile(
  await readFile(new URL("../node_modules/ghostty-web/ghostty-vt.wasm", import.meta.url)),
);
async function ghostty() {
  return new Ghostty(await WebAssembly.instantiate(wasm, { env: { log() {} } }));
}

const entries = [
  { name: "notes", directory: true },
  { name: "notebook", directory: true },
  { name: "my folder", directory: true },
  { name: "my file.txt", directory: false },
  { name: "README.txt", directory: false },
  { name: "a'$`;.txt", directory: false },
];
const readDirectory = async () => entries;
const complete = (line, cursor = line.length) => completeLine(line, cursor, readDirectory);

test("command completion handles exact, repeated, ambiguous and missing tokens intentionally", async () => {
  assert.equal((await complete("pw")).text, "pwd ");
  assert.equal((await complete("cd")).text, "cd ");
  const paths = await complete("cd ");
  assert.deepEqual(paths.matches, ["my folder/", "notebook/", "notes/"]);
  assert.equal(paths.text, undefined);
  assert.equal((await complete("c")).text, undefined);
  assert.deepEqual((await complete("no-such-command")).matches, []);
  assert.equal((await complete("echo hi | pw")).text, "echo hi | pwd ");
});

test("path completion quotes literal names, completes the cursor token and preserves later arguments", async () => {
  assert.equal((await complete("cd my")).text, "cd my\\ folder/");
  assert.equal((await complete("cat RE")).text, "cat README.txt ");
  assert.equal((await complete('cat "my fi')).text, 'cat "my file.txt" ');
  assert.equal((await complete("cat 'my fi")).text, "cat 'my file.txt' ");
  assert.equal((await complete('cd "my f"')).text, 'cd "my folder/"');
  assert.equal((await complete("cat RE later", 6)).text, "cat README.txt later");
  assert.equal((await complete("cat a")).text, "cat a\\'\\$\\`\\;.txt ");
  assert.equal((await complete("cat 'a")).text, "cat 'a'\\''$`;.txt' ");
  let reads = 0;
  await completeLine("cat $(touch stolen)", 18, async () => {
    reads++;
    return entries;
  });
  assert.equal(reads, 0);
});

test("completion traverses literal relative, absolute and home directory prefixes without executing", async () => {
  const calls = [];
  const read = async (path) => {
    calls.push(path);
    return [{ name: "demo.txt", directory: false }];
  };
  for (const prefix of ["notes/", "/home/guest/", "~/", "../"]) {
    assert.equal(
      (await completeLine(`cat ${prefix}de`, `cat ${prefix}de`.length, read)).text,
      `cat ${prefix}demo.txt `,
    );
  }
  assert.deepEqual(calls, ["notes/", "/home/guest/", "~/", "../"]);
});

test("history restores the draft and caret, cancellation resets navigation, and editing uses graphemes", () => {
  const editor = new LineEditor(["pwd", "echo previous"]);
  editor.set("draft", 2);
  editor.receive("\x1b[A");
  assert.equal(editor.text, "echo previous");
  editor.receive("\x1b[B");
  assert.equal(editor.text, "draft");
  assert.equal(editor.cursor, 2);
  editor.receive("X");
  assert.equal(editor.text, "drXaft");
  editor.receive("\x1b[3~");
  assert.equal(editor.text, "drXft");
  editor.reset();
  editor.receive("\x1b[A");
  assert.equal(editor.text, "echo previous");
  editor.set("a👩‍💻e\u0301");
  editor.receive("\x7f");
  assert.equal(editor.text, "a👩‍💻");
  editor.receive("\x7f");
  assert.equal(editor.text, "a");
});

test("bracketed multiline paste remains a bounded draft and cannot send editor controls", () => {
  const editor = new LineEditor([]);
  assert.equal(editor.receive("\x1b[200~echo first\necho second\x03\x1b[2J\x1b[201~"), undefined);
  assert.equal(editor.text, "echo first\necho second[2J");
  assert.equal(editor.receive("\r"), "submit");
  editor.set("x".repeat(7999));
  editor.insert("more");
  assert.equal(editor.text.length, 8000);
  editor.set("abcdef", 4, 2);
  editor.insert("XY");
  assert.equal(editor.text, "abXYef");
});

test("Ghostty input events support control keys and commit composition once while ignoring composing keys", async () => {
  class Container extends EventTarget {
    style = {};
    childNodes = [];
    hasAttribute() {
      return true;
    }
    setAttribute() {}
  }
  const host = new Container();
  const editor = new LineEditor([]);
  const actions = [];
  const handler = new InputHandler(
    await ghostty(),
    host,
    (data) => {
      const action = editor.receive(data);
      if (action) actions.push(action);
    },
    () => {},
  );
  function event(type, fields) {
    const value = new Event(type, { cancelable: true });
    Object.assign(value, fields);
    host.dispatchEvent(value);
  }
  event("compositionstart", {});
  event("keydown", { key: "Enter", code: "Enter", isComposing: true });
  event("keydown", { key: "a", code: "KeyA", keyCode: 229 });
  event("compositionend", { data: "日本語" });
  assert.equal(editor.text, "日本語");
  assert.deepEqual(actions, []);
  event("keydown", { key: "c", code: "KeyC", ctrlKey: true });
  event("keydown", { key: "l", code: "KeyL", ctrlKey: true });
  event("keydown", { key: "Tab", code: "Tab" });
  event("keydown", { key: "Enter", code: "Enter" });
  assert.deepEqual(actions, ["cancel", "clear", "complete", "submit"]);
  handler.dispose();
});

async function displayHarness(cols = 40, rows = 8) {
  const wasmTerm = (await ghostty()).createTerminal(cols, rows);
  const paints = [];
  const terminal = {
    wasmTerm,
    cols,
    rows,
    write: (text) => {
      assert.notEqual(text, "");
      wasmTerm.write(text);
    },
    getScrollbackLength: () => wasmTerm.getScrollbackLength(),
    getViewportY: () => 0,
    scrollToBottom() {},
    renderer: {
      render(buffer, full) {
        paints.push({ cursor: buffer.getCursor(), full });
      },
    },
  };
  const display = new PromptDisplay(terminal);
  const screen = () =>
    Array.from({ length: rows }, (_, row) =>
      wasmTerm
        .getLine(row)
        .map((cell) => (cell.width ? String.fromCodePoint(cell.codepoint || 32) : ""))
        .join("")
        .trimEnd(),
    ).join("\n");
  return { display, terminal, screen, paints };
}

test("the Ghostty prompt starts at the top, follows output, wraps, and clears its cursor on blur or busy", async () => {
  const { display, terminal, screen, paints } = await displayHarness();
  display.render("", "", 0, true);
  display.focus(true);
  assert.equal(terminal.wasmTerm.getCursor().y, 0);
  assert.equal(terminal.wasmTerm.getCursor().x, prompt.length);
  display.render(`${prompt}pwd\n/home/guest\n`, "", 0, true);
  assert.equal(terminal.wasmTerm.getCursor().y, 2);
  assert.match(screen(), /guest@portfolio \$ pwd\n\/home\/guest\nguest@portfolio \$/);
  display.render(`${prompt}pwd\n/home/guest\n`, "x".repeat(60), 60, true);
  assert.equal(terminal.wasmTerm.getCursor().y, 3);
  display.render(`${prompt}pwd\n/home/guest\n`, "xy", 1, true);
  assert.match(screen(), /guest@portfolio \$ xy\n\s*$/);
  display.focus(false);
  assert.equal(terminal.wasmTerm.getCursor().visible, 0);
  assert.equal(paints.at(-1).full, true);
  display.focus(true);
  display.render("busy\n", "", 0, false);
  assert.equal(terminal.wasmTerm.getCursor().visible, 0);
  terminal.wasmTerm.free();
});

test("scrollback and drafts longer than the viewport keep the editing cursor inside the live screen", async () => {
  const { display, terminal, screen } = await displayHarness(32, 6);
  const transcript = Array.from({ length: 50 }, (_, i) => `line ${i}\n`).join("");
  const text = "word ".repeat(150);
  for (const cursor of [text.length, 0, 350, 10, text.length]) {
    display.render(transcript, text, cursor, true);
    const caret = terminal.wasmTerm.getCursor();
    assert.ok(caret.x >= 0 && caret.x < terminal.cols);
    assert.ok(caret.y >= 0 && caret.y < terminal.rows);
    assert.ok(terminal.getScrollbackLength() > 0);
  }
  display.render("", "", 0, true);
  assert.equal(terminal.getScrollbackLength(), 0);
  assert.equal(terminal.wasmTerm.getCursor().y, 0);
  assert.equal(screen().trim(), prompt.trimEnd());
  terminal.wasmTerm.free();
});
