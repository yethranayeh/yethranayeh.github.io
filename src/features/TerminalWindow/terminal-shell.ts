import type { Bash, BashOptions, BuiltinRequest, CustomBuiltin } from "@everruns/bashkit-wasm";
import type { ShellContext } from "./shell";
import { parseZinnArgs } from "./zinn-cli";
import { VisitorWorkspace, workspacePath } from "../VisitorWorkspace/workspace";

const home = "/home/guest";

const commandHelp =
  [
    "SHELL",
    "  pwd, cd, ls, cat, mkdir, touch, cp, mv, rm",
    "  echo, printf, grep, sort, head, tail, wc, find, date, whoami",
    "  Variables, quoting, pipes, redirection and scripts are supported.",
    "",
    "INSTALLED COMMANDS",
    "  zinn                  Task board and task commands",
    "  zinn -h / zinn help   Zinn command reference",
    "  zinn -v               Bundled Zinn core version",
    "  about / projects      About this portfolio",
    "  open <app|file>       Open a desktop app or a visitor text file",
    "  download <file>       Save a virtual file to your computer",
    "  history               Show this session's command history",
    "  clear / exit          Clear the screen or close Terminal",
    "",
    "File > Upload file copies a file into /home/guest.",
    "File > View transcript or Save transcript opens or saves this session's output.",
    "Up/Down: history  |  Tab: complete commands and paths  |  Ctrl+L: clear  |  Ctrl+C: cancel",
    "Escape: leave editing for the menu  |  Shift+PageUp/PageDown: scrollback",
    "",
    "This shell runs in your browser with its own virtual files.",
    "My Computer shares /home/guest. Use it to edit, export or reset visitor files.",
  ].join("\n") + "\n";

export class TerminalShell {
  private readonly bash: Bash;
  private context: ShellContext | undefined;
  private clearRequested = false;
  private exitRequested = false;
  private resetGeneration: number;

  constructor(
    BashConstructor: new (options?: BashOptions) => Bash,
    readonly workspace = new VisitorWorkspace(),
  ) {
    this.resetGeneration = workspace.resetGeneration;
    const customBuiltins: Record<string, CustomBuiltin> = {
      cp: (request) => this.copyMove(request, false),
      mv: (request) => this.copyMove(request, true),
      // BashKit's host adapter cannot set timestamps. Keep file creation useful.
      touch: ({ argv, cwd }) => {
        let create = true;
        let options = true;
        const paths: string[] = [];
        for (const arg of argv) {
          if (options && arg === "--") options = false;
          else if (options && arg === "-c") create = false;
          else if (options && arg.startsWith("-"))
            throw new Error("Usage: touch [-c] [--] <file>... (timestamps are not supported)");
          else paths.push(workspacePath(arg, cwd));
        }
        if (!paths.length) throw new Error("Usage: touch [-c] [--] <file>...");
        for (const path of paths)
          if (create && !this.workspace.exists(path)) this.workspace.write(path, new Uint8Array());
        return "";
      },
      help: () => commandHelp,
      about: () =>
        "Alper Halil\nSoftware developer working with TypeScript, React, and a little nostalgia.\nTry projects or open resume.\n",
      projects: () =>
        "Zinn             A kanban workflow in the terminal\nPlayerType       An interactive game map and player-type quiz\nSarmal           An animated curve library\nShades of Space  Color palettes drawn from NASA's picture of the day\n\nUse open projects to browse, or zinn to run Zinn.\n",
      open: ({ argv, cwd }) => {
        if (argv.length !== 1) throw new Error("Usage: open <app|file>");
        const path = workspacePath(argv[0], cwd);
        if (this.workspace.exists(path)) {
          if (!this.requireContext().openFile) throw new Error("File opening is unavailable.");
          this.requireContext().openFile!(path);
        } else if (!this.requireContext().open(argv[0].toLowerCase()))
          throw new Error(
            "Usage: open <file> or open projects|resume|apps|media|computer|terminal",
          );
        return "";
      },
      zinn: (request) => this.zinn(request),
      download: ({ argv, cwd }) => {
        if (argv.length !== 1) throw new Error("Usage: download <file>");
        const path = workspacePath(argv[0], cwd);
        this.requireContext().download(path.split("/").pop()!, this.workspace.read(path));
        return `Downloaded ${path}\n`;
      },
      history: () =>
        this.requireContext()
          .history.map((line, index) => `${index + 1}  ${line}`)
          .join("\n") + "\n",
      clear: () => {
        this.clearRequested = true;
        return "";
      },
      cls: () => {
        this.clearRequested = true;
        return "";
      },
      exit: () => {
        this.exitRequested = true;
        return "";
      },
    };
    this.bash = new BashConstructor({
      profile: "interactive",
      username: "guest",
      hostname: "portfolio",
      cwd: home,
      env: { HOME: home, USER: "guest", TERM: "xterm-256color" },
      maxCommands: 5000,
      maxLoopIterations: 5000,
      timeoutMs: 5000,
      maxMemory: 32 * 1024 * 1024,
      customBuiltins,
      fs: workspace,
    });
  }

  private requireContext() {
    if (!this.context) throw new Error("No shell command is running.");
    return this.context;
  }

  // BashKit's host adapter only copies files. Handle folder trees through the shared drive.
  private copyMove({ argv, cwd }: BuiltinRequest, move: boolean) {
    const name = move ? "mv" : "cp";
    const paths: string[] = [];
    let options = true,
      recursive = false,
      noClobber = false,
      verbose = false;
    for (const arg of argv) {
      if (options && arg === "--") options = false;
      else if (options && arg.startsWith("-")) {
        const flags = arg === "--recursive" && !move ? "r" : arg.slice(1);
        for (const flag of flags) {
          if (!move && (flag === "r" || flag === "R")) recursive = true;
          else if (flag === "n") noClobber = true;
          else if (flag === "v") verbose = true;
          else if (flag !== "f")
            throw new Error(
              `Usage: ${name} ${move ? "[-fnv]" : "[-rRfnv]"} [--] <source>... <destination>`,
            );
        }
      } else paths.push(workspacePath(arg, cwd));
    }
    if (paths.length < 2) throw new Error(`Usage: ${name} <source>... <destination>`);
    const destination = paths.pop()!;
    const directory =
      this.workspace.exists(destination) && this.workspace.stat(destination).type === "dir";
    if (paths.length > 1 && !directory)
      throw new Error("Multiple sources need a destination folder.");
    let output = "";
    for (const source of paths) {
      const target = directory ? `${destination}/${source.split("/").pop()}` : destination;
      if (!move && !recursive && this.workspace.stat(source).type === "dir")
        throw new Error("Use cp -r to copy a folder.");
      if (noClobber && this.workspace.exists(target)) continue;
      if (move) this.workspace.rename(source, target);
      else this.workspace.copy(source, target);
      if (verbose) output += `${source} -> ${target}\n`;
    }
    return output;
  }

  private async zinn({ argv, cwd }: BuiltinRequest) {
    const command = parseZinnArgs(argv);
    if ("text" in command) return command.text + "\n";
    if (command.path === "export") {
      const path = workspacePath(command.positional[0] ?? "zinn-playground.sqlite", cwd);
      const result = await this.requireContext().zinn(["export"]);
      if (!result.bytes) throw new Error("Zinn couldn't export the board.");
      this.workspace.write(path, result.bytes);
      return `Exported ${path}\nUse download ${JSON.stringify(path)} to keep a copy.\n`;
    }
    if (command.path === "import") {
      const path = workspacePath(command.positional[0], cwd);
      const result = await this.requireContext().zinn(
        ["import", "--", path],
        this.workspace.read(path),
      );
      return result.text + "\n";
    }
    const result = await this.requireContext().zinn(argv);
    return (
      result.text +
      "\n" +
      (result.persistence === "session"
        ? "Storage is unavailable. Export and download a backup to keep this board.\n"
        : "")
    );
  }

  async execute(command: string, context: ShellContext) {
    if (this.context) throw new Error("Wait for the current command to finish.");
    if (command.length > 8000) throw new Error("Keep commands under 8,000 characters.");
    this.context = context;
    this.clearRequested = false;
    this.exitRequested = false;
    this.bash.clearCancel();
    try {
      const result = await this.workspace.run(() => {
        if (this.resetGeneration !== this.workspace.resetGeneration) {
          this.bash.reset();
          this.resetGeneration = this.workspace.resetGeneration;
        }
        return this.bash.execute(command);
      });
      return {
        stdout: result.stdout,
        stderr:
          result.stderr +
          (this.workspace.persistence === "session"
            ? "\nVisitor files are session-only. Export files in My Computer before leaving.\n"
            : ""),
        exitCode: result.exitCode,
        clear: this.clearRequested,
        exit: this.exitRequested,
      };
    } finally {
      this.context = undefined;
    }
  }

  upload(name: string, bytes: Uint8Array) {
    if (this.context) throw new Error("Wait for the current command to finish.");
    if (bytes.length > 5 * 1024 * 1024) throw new Error("Choose a file smaller than 5 MB.");
    return this.workspace.upload(name, bytes);
  }

  async completionDirectory(path: string) {
    if (this.context) return [];
    // BashKit 0.18.2 has no cwd getter. Its public read-only commit API captures
    // cwd without running pwd, user functions, substitutions or completion scripts.
    // Objects have a compression byte, then raw DEFLATE containing a type byte and JSON.
    const snapshot = this.bash.commit({ excludeFilesystem: true, excludeFunctions: true });
    const readObject = async (id: string) => {
      const bytes = snapshot.objects[id];
      if (!bytes || bytes[0] !== 1) throw new Error("Shell completion state is unavailable.");
      const stream = new Blob([bytes.slice(1)])
        .stream()
        .pipeThrough(new DecompressionStream("deflate-raw"));
      const decoded = new Uint8Array(await new Response(stream).arrayBuffer());
      return JSON.parse(new TextDecoder().decode(decoded.slice(1)));
    };
    const commit = await readObject(snapshot.id);
    const state = await readObject(commit.shell);
    const cwd = this.resetGeneration === this.workspace.resetGeneration ? state.cwd : home;
    if (typeof cwd !== "string") return [];
    return this.workspace.readDir(workspacePath(path, cwd)).map((entry) => ({
      name: entry.name,
      directory: entry.type === "dir",
    }));
  }

  cancel() {
    this.bash.cancel();
  }
}
