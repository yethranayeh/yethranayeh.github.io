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
import { terminalText } from "./src/features/TerminalWindow/shell.ts";
export { TerminalShell, terminalText };`,
    resolveDir: root,
    sourcefile: "terminal-shell-loader.ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].contents).toString("base64")}`;
const { TerminalShell, terminalText } = await import(moduleUrl);

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
      async zinn(args, bytes) {
        zinnCalls.push({ args: [...args], bytes: bytes && new Uint8Array(bytes) });
        return (
          zinnOverride?.(args, bytes) ?? {
            text: `zinn:${args.join(" ") || "board"}`,
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

test("zinn custom builtin preserves quoted argv and scopes the current command context", async () => {
  const shell = createShell();
  const first = context();
  const firstResult = await shell.execute('zinn task create "A quoted title"', first.value);
  assert.equal(firstResult.stdout, "zinn:task create A quoted title\n");
  assert.deepEqual(
    first.zinnCalls.map((call) => call.args),
    [["task", "create", "A quoted title"]],
  );

  const second = context({
    zinn: async (args) => ({ text: `second:${args.join("/")}`, persistence: "saved" }),
  });
  const secondResult = await shell.execute("zinn task list", second.value);
  assert.equal(secondResult.stdout, "second:task/list\n");
  assert.equal(first.zinnCalls.length, 1);
  assert.deepEqual(
    second.zinnCalls.map((call) => call.args),
    [["task", "list"]],
  );
});

test("zinn help and version are local, read-only builtins, including backup and reset help", async () => {
  const shell = createShell();
  const ctx = context({
    zinn: () => {
      throw new Error("Help and version must not start the Zinn worker.");
    },
  });
  const before = (await shell.execute("ls", ctx.value)).stdout;
  for (const command of [
    "zinn help",
    "zinn help --help",
    "zinn -h",
    "zinn --help",
    "zinn task",
    "zinn task -h",
    "zinn task create -h",
    "zinn help task create",
    "zinn help task create -h",
    "zinn export --help",
    "zinn import -h",
    "zinn reset --yes --help",
  ]) {
    const result = await shell.execute(command, ctx.value);
    assert.equal(result.exitCode, 0, `${command}: ${result.stderr}`);
    assert.match(result.stdout, /ZINN PLAYGROUND/);
    assert.match(result.stdout, /Usage: zinn/);
    assert.doesNotMatch(result.stdout, /Storage is unavailable/);
  }
  const shortVersion = await shell.execute("zinn -v", ctx.value);
  const longVersion = await shell.execute("zinn --version", ctx.value);
  const provenance = JSON.parse(
    fs.readFileSync(path.join(root, "src/vendor/zinn/core/PROVENANCE.json"), "utf8"),
  );
  assert.equal(shortVersion.exitCode, 0, shortVersion.stderr);
  assert.equal(longVersion.exitCode, 0, longVersion.stderr);
  assert.equal(shortVersion.stdout, longVersion.stdout);
  assert.equal(
    shortVersion.stdout,
    `Zinn playground (Zinn core ${provenance.upstream_core_package_version}, source ${provenance.upstream_commit.slice(0, 7)})\n`,
  );
  const piped = await shell.execute("zinn -h | grep 'Usage: zinn'", ctx.value);
  assert.equal(piped.exitCode, 0, piped.stderr);
  assert.match(piped.stdout, /Usage: zinn \[command\]/);
  assert.equal(ctx.zinnCalls.length, 0);
  assert.equal((await shell.execute("ls", ctx.value)).stdout, before);
});

test("zinn rejects invalid arguments without calling its worker and preserves explicit literals", async () => {
  const shell = createShell();
  const ctx = context();
  for (const command of [
    "zinn task create -x",
    "zinn task create Title --priority",
    "zinn task create Title --description -h",
    "zinn search --unknown",
    "zinn export --unknown",
    "zinn import --unknown",
    "zinn reset --yes=false",
  ]) {
    const result = await shell.execute(command, ctx.value);
    assert.notEqual(result.exitCode, 0, command);
    assert.match(result.stderr, /Unknown option|Provide a value|does not take a value/);
  }
  assert.equal(ctx.zinnCalls.length, 0);

  const literal = await shell.execute(
    'zinn task create --description="value=with spaces" -- -h',
    ctx.value,
  );
  assert.equal(literal.exitCode, 0, literal.stderr);
  assert.deepEqual(ctx.zinnCalls[0].args, [
    "task",
    "create",
    "--description=value=with spaces",
    "--",
    "-h",
  ]);
});

test("zinn export/import uses virtual binary files and download receives the saved bytes", async () => {
  const shell = createShell();
  const backup = Uint8Array.from([0, 255, 1, 128, 10]);
  const ctx = context({
    zinn: async (args, bytes) => {
      if (args[0] === "export")
        return { text: "export complete", persistence: "saved", bytes: backup };
      if (args[0] === "import")
        return { text: `imported ${bytes.length} bytes`, persistence: "saved" };
      return { text: "ok", persistence: "saved" };
    },
  });

  const exported = await shell.execute('zinn export "my backup.sqlite"', ctx.value);
  assert.equal(exported.exitCode, 0, exported.stderr);
  assert.match(exported.stdout, /Exported \/home\/guest\/my backup\.sqlite/);
  assert.deepEqual(ctx.zinnCalls[0].args, ["export"]);

  const downloaded = await shell.execute('download "my backup.sqlite"', ctx.value);
  assert.equal(downloaded.exitCode, 0, downloaded.stderr);
  assert.equal(ctx.downloads[0].name, "my backup.sqlite");
  assert.deepEqual(ctx.downloads[0].bytes, backup);

  const imported = await shell.execute('zinn import "my backup.sqlite"', ctx.value);
  assert.equal(imported.exitCode, 0, imported.stderr);
  assert.equal(imported.stdout, "imported 5 bytes\n");
  assert.deepEqual(ctx.zinnCalls[1].args, ["import", "--", "/home/guest/my backup.sqlite"]);
  assert.deepEqual(ctx.zinnCalls[1].bytes, backup);

  const literalExport = await shell.execute("zinn export -- --help", ctx.value);
  assert.equal(literalExport.exitCode, 0, literalExport.stderr);
  assert.deepEqual(shell.workspace.read("/home/guest/--help"), backup);
  const literalImport = await shell.execute("zinn import -- --help", ctx.value);
  assert.equal(literalImport.exitCode, 0, literalImport.stderr);
  assert.deepEqual(ctx.zinnCalls.at(-1).args, ["import", "--", "/home/guest/--help"]);
  assert.deepEqual(ctx.zinnCalls.at(-1).bytes, backup);
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
