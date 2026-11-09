import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundle = await build({
  stdin: {
    contents: `import { TerminalShell } from "./src/features/TerminalWindow/terminal-shell.ts";
import { terminalText, plainTerminalText, styledTerminalText } from "./src/features/TerminalWindow/shell.ts";
export { TerminalShell, terminalText, plainTerminalText, styledTerminalText };`,
    resolveDir: root,
    sourcefile: "terminal-shell-loader.ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
const { TerminalShell, terminalText, plainTerminalText, styledTerminalText } = await import(
  moduleUrl
);

const wasmPath = path.join(root, "node_modules/@everruns/bashkit-wasm/bashkit_wasm_bg.wasm");
await initBashkit(fs.readFileSync(wasmPath));

function context(overrides = {}) {
  const opened = [];
  const downloads = [];
  const zinnCalls = [];
  const { zinn: zinnOverride, ...otherOverrides } = overrides;
  return {
    opened,
    downloads,
    zinnCalls,
    value: {
      open(name) {
        opened.push(name);
        return true;
      },
      async zinn(args, bytes, presentation) {
        zinnCalls.push({ args: [...args], bytes: bytes && new Uint8Array(bytes) });
        return (
          zinnOverride?.(args, bytes, presentation) ?? {
            stdout: `zinn:${args.join(" ")}\n`,
            stderr: "",
            status: 0,
            persistence: "saved",
          }
        );
      },
      download(name, bytes) {
        downloads.push({ name, bytes: new Uint8Array(bytes) });
      },
      history: ["pwd", "zinn"],
      ...otherOverrides,
    },
  };
}

function createShell() {
  return new TerminalShell(Bash);
}

test("TerminalShell preserves cwd, exported variables, and functions between commands", async () => {
  const shell = createShell();
  const ctx = context().value;

  assert.equal(
    (await shell.execute("mkdir -p work && cd work && pwd", ctx)).stdout,
    "/home/guest/work\n",
  );
  assert.equal((await shell.execute("pwd", ctx)).stdout, "/home/guest/work\n");
  assert.equal(
    (
      await shell.execute(
        "export GREETING=hello; greet() { printf '%s there\\n' \"$GREETING\"; }",
        ctx,
      )
    ).exitCode,
    0,
  );
  assert.equal((await shell.execute("greet", ctx)).stdout, "hello there\n");
});

test("TerminalShell runs virtual file commands, pipes, and redirection", async () => {
  const shell = createShell();
  const ctx = context().value;

  const result = await shell.execute(
    `mkdir -p notes && printf 'alpha\\nbeta\\nbeta\\n' > notes/list.txt && cat notes/list.txt | grep beta | wc -l && touch notes/empty.txt && ls notes | sort`,
    ctx,
  );

  assert.equal(result.exitCode, 0, result.stderr);
  assert.match(result.stdout, /2\s+empty\.txt\s+list\.txt/);
  assert.equal((await shell.execute("cat README.txt", ctx)).stdout.includes("virtual files"), true);
});

test("TerminalShell returns shell status for unknown commands and failed conditionals", async () => {
  const shell = createShell();
  const ctx = context().value;

  const missing = await shell.execute("this-command-does-not-exist", ctx);
  assert.notEqual(missing.exitCode, 0);
  assert.match(missing.stderr, /not found|unknown command/i);

  const conditional = await shell.execute("false && echo should-not-run", ctx);
  assert.equal(conditional.exitCode, 1);
  assert.equal(conditional.stdout, "");
});

test("upload stores bytes in the virtual home and refuses to overwrite an existing file", async () => {
  const shell = createShell();
  assert.equal(
    await shell.upload("notes.bin", Uint8Array.from([4, 0, 5])),
    "/home/guest/notes.bin",
  );
  assert.deepEqual(
    (await shell.execute("cat notes.bin", context().value)).stdout,
    "\u0004\u0000\u0005",
  );
  await assert.rejects(shell.upload("notes.bin", Uint8Array.from([9])), /already exists/);
});

test("terminalText removes control sequences and normalizes line endings", () => {
  assert.equal(
    terminalText("hello\u001b]0;bad title\u0007\u009bclipboard\u007f\nnext\r\nlast"),
    "hello]0;bad titleclipboard\r\nnext\r\nlast",
  );
});

test("completion reads BashKit's cwd snapshot and virtual entries without executing any commands", async () => {
  const shell = createShell();
  const ctx = context().value;
  await shell.execute(
    "mkdir -p notes/nested && cd notes && touch demo.txt && pwd() { touch forbidden; }; false",
    ctx,
  );
  const snapshotBefore = shell.bash.commit({ excludeFilesystem: true, excludeFunctions: true }).id;
  const execute = shell.bash.execute;
  const executeSync = shell.bash.executeSync;
  shell.bash.execute = shell.bash.executeSync = () => {
    throw new Error("Completion must not execute commands");
  };
  try {
    assert.deepEqual(await shell.completionDirectory("."), [
      { name: "nested", directory: true },
      { name: "demo.txt", directory: false },
    ]);
    assert.deepEqual(
      await shell.completionDirectory("../notes/"),
      await shell.completionDirectory("/home/guest/notes"),
    );
    assert.equal(
      (await shell.completionDirectory("~/")).some((entry) => entry.name === "README.txt"),
      true,
    );
    assert.equal(shell.workspace.exists("/home/guest/notes/forbidden"), false);
  } finally {
    shell.bash.execute = execute;
    shell.bash.executeSync = executeSync;
  }
  assert.equal(
    shell.bash.commit({ excludeFilesystem: true, excludeFunctions: true }).id,
    snapshotBefore,
  );
});

test("commands adapter preserves exact separate streams, status, argv, projection and live width", async () => {
  const shell = createShell();
  const calls = [];
  const ctx = context({
    columns: 43,
    zinn: async (argv, bytes, presentation) => {
      calls.push({ argv, bytes, presentation });
      return { stdout: "héllo\n", stderr: "diagnostic\n", status: 7, notices: ["Separate notice"] };
    },
  }).value;
  const result = await shell.execute(
    'mkdir -p notes && cd notes && printf "live file" > note.txt; zinn task create PLAY --title="A quoted title" > out.txt 2> err.txt; echo $?; cat out.txt; cat err.txt',
    ctx,
  );
  assert.equal(result.stdout, "7\nhéllo\ndiagnostic\n");
  assert.equal(result.stderr, "");
  assert.ok(result.notices.includes("Separate notice"));
  assert.deepEqual(calls[0].argv, ["task", "create", "PLAY", "--title=A quoted title"]);
  assert.equal(calls[0].presentation.cwd, "/home/guest/notes");
  assert.equal(calls[0].presentation.columns, 43);
  assert.equal(calls[0].presentation.color, false);
  assert.equal(
    calls[0].presentation.projection.find((e) => e.path === "/home/guest/notes/note.txt").text,
    "live file",
  );
  ctx.columns = 101;
  await shell.execute("FORCE_COLOR=1 NO_COLOR=1 zinn --version | cat", ctx);
  assert.equal(calls[1].presentation.columns, 101);
  assert.equal(calls[1].presentation.color, true);
  let columns = 50;
  ctx.columns = () => columns++;
  await shell.execute("zinn --version; zinn --version", ctx);
  assert.deepEqual(
    calls.slice(2).map((call) => call.presentation.columns),
    [50, 51],
  );
});

test("browser extensions keep binary backups and literal filenames in the visitor drive", async () => {
  const shell = createShell();
  const backup = new Uint8Array([1, 0, 255]);
  let received;
  const ctx = context({
    zinn: async (argv, bytes) => {
      received = bytes;
      return {
        stdout: "done\n",
        stderr: "",
        status: 0,
        bytes: argv[0] === "export" ? backup : undefined,
      };
    },
  }).value;
  await shell.execute('zinn export "my backup.sqlite"', ctx);
  assert.deepEqual(shell.workspace.read("/home/guest/my backup.sqlite"), backup);
  await shell.execute('zinn import "my backup.sqlite"', ctx);
  assert.deepEqual(received, backup);
  await shell.execute("zinn export -- --help", ctx);
  assert.deepEqual(shell.workspace.read("/home/guest/--help"), backup);
  const downloads = context();
  await shell.execute('download "my backup.sqlite"', downloads.value);
  assert.deepEqual(downloads.downloads[0].bytes, backup);
});

test("Ctrl+C cannot release an in-flight Zinn callback before it completes", async () => {
  const shell = createShell();
  let release, started;
  const waiting = new Promise((resolve) => {
    started = resolve;
  });
  const ctx = context({
    zinn: async () => {
      started();
      await new Promise((resolve) => {
        release = resolve;
      });
      return { stdout: "Committed\n", stderr: "", status: 0 };
    },
  }).value;
  let finished = false;
  const running = shell
    .execute("zinn task create PLAY --title=committed; touch must-not-run", ctx)
    .then((r) => {
      finished = true;
      return r;
    });
  await waiting;
  shell.cancel();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(finished, false);
  await assert.rejects(shell.execute("echo retry", ctx), /Wait for the current command/);
  release();
  const result = await running;
  assert.equal(shell.workspace.exists("/home/guest/must-not-run"), false);
  assert.doesNotMatch(result.stderr, /rolled back/i);
  assert.equal((await shell.execute("echo retry", ctx)).stdout, "retry\n");
});

test("only released SGR styling reaches the display and the accessible transcript is plain", () => {
  const colored = "\x1b[32mgreen\x1b[39m\n";
  assert.equal(styledTerminalText(colored), colored.replace("\n", "\r\n"));
  assert.equal(plainTerminalText(colored), "green\r\n");
  assert.equal(styledTerminalText("\x1b]52;clipboard\x07\x1b[2J"), "]52;clipboard[2J");
});
