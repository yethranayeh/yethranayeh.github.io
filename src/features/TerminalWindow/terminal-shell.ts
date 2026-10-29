import type { Bash, BashOptions, BuiltinRequest, CustomBuiltin } from "@everruns/bashkit-wasm";
import type { ShellContext } from "./shell";

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
    "  zinn help             Zinn command reference",
    "  about / projects      About this portfolio",
    "  open <app>            Open a desktop app",
    "  download <file>       Save a virtual file to your computer",
    "  history               Show this session's command history",
    "  clear / exit          Clear the screen or close Terminal",
    "",
    "File > Upload file copies a file into /home/guest.",
    "File > View transcript or Save transcript opens or saves this session's output.",
    "Up/Down: history  |  Tab: complete command  |  Ctrl+L: clear  |  Ctrl+C: cancel",
    "",
    "This shell runs in your browser with its own virtual files.",
  ].join("\n") + "\n";

function absolutePath(cwd: string, path: string) {
  const expanded = path === "~" ? home : path.startsWith("~/") ? home + path.slice(1) : path;
  const parts: string[] = [];
  for (const part of (expanded.startsWith("/") ? expanded : `${cwd}/${expanded}`).split("/")) {
    if (part === "..") parts.pop();
    else if (part && part !== ".") parts.push(part);
  }
  return "/" + parts.join("/");
}

export class TerminalShell {
  private readonly bash: Bash;
  private context: ShellContext | undefined;
  private clearRequested = false;
  private exitRequested = false;

  constructor(BashConstructor: new (options?: BashOptions) => Bash) {
    const customBuiltins: Record<string, CustomBuiltin> = {
      help: () => commandHelp,
      about: () =>
        "Alper Halil\nSoftware developer working with TypeScript, React, and a little nostalgia.\nTry projects or open resume.\n",
      projects: () =>
        "Zinn             A kanban workflow in the terminal\nPlayerType       An interactive game map and player-type quiz\nSarmal           An animated curve library\nShades of Space  Color palettes drawn from NASA's picture of the day\n\nUse open projects to browse, or zinn to run Zinn.\n",
      open: ({ argv }) => {
        if (argv.length !== 1 || !this.requireContext().open(argv[0].toLowerCase())) {
          throw new Error("Usage: open projects|resume|apps|media|computer|terminal");
        }
        return "";
      },
      zinn: (request) => this.zinn(request),
      download: ({ argv, fs, cwd }) => {
        if (argv.length !== 1) throw new Error("Usage: download <file>");
        const path = absolutePath(cwd, argv[0]);
        this.requireContext().download(path.split("/").pop()!, fs.readFileBytes(path));
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
      files: {
        [`${home}/README.txt`]:
          "Welcome to Terminal.\n\nUse normal shell commands to explore and edit virtual files.\nZinn is installed as the zinn command. Type zinn help to begin.\n\nFiles belong to this browser session. Use download <file> to keep a copy.\n",
      },
    });
  }

  private requireContext() {
    if (!this.context) throw new Error("No shell command is running.");
    return this.context;
  }

  private async zinn({ argv, fs, cwd }: BuiltinRequest) {
    if (argv[0] === "export") {
      if (argv.length > 2) throw new Error("Usage: zinn export [file]");
      const path = absolutePath(cwd, argv[1] ?? "zinn-playground.sqlite");
      const result = await this.requireContext().zinn(["export"]);
      if (!result.bytes) throw new Error("Zinn couldn't export the board.");
      fs.writeFileBytes(path, result.bytes);
      return `Exported ${path}\nUse download ${JSON.stringify(path)} to keep a copy.\n`;
    }
    if (argv[0] === "import") {
      if (argv.length !== 2)
        throw new Error(
          "Usage: zinn import <file>\nUse File > Upload file to add a backup to this shell.",
        );
      const path = absolutePath(cwd, argv[1]);
      const result = await this.requireContext().zinn(["import"], fs.readFileBytes(path));
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
      const result = await this.bash.execute(command);
      return {
        stdout: result.stdout,
        stderr: result.stderr,
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
    const path = `${home}/${name.replace(/[\\/]/g, "_")}`;
    if (this.bash.exists(path))
      throw new Error(
        `File already exists: ${path}. Rename or remove it before uploading another copy.`,
      );
    this.bash.writeFileBytes(path, bytes);
    return path;
  }

  cancel() {
    this.bash.cancel();
  }
}
