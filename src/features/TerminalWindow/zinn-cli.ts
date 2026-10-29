import {
  upstream_core_package_version as coreVersion,
  upstream_commit as coreCommit,
} from "../../vendor/zinn/core/PROVENANCE.json";

interface CommandSpec {
  usage: string;
  description: string;
  min: number;
  max?: number;
  options?: Record<string, string>;
  flags?: Record<string, string>;
}

const commands = {
  board: {
    usage: "zinn [board]",
    description: "Show your board.",
    min: 0,
    max: 0,
  },
  columns: {
    usage: "zinn columns",
    description: "List the playground's columns.",
    min: 0,
    max: 0,
  },
  search: {
    usage: 'zinn search "words"',
    description: "Search task text.",
    min: 1,
  },
  "task list": {
    usage: "zinn task list [--column <name>] [--archive active|archived|all]",
    description: "List active tasks, or filter by column and archive status.",
    min: 0,
    max: 0,
    options: { column: "<name>  Filter by column", archive: "active|archived|all" },
  },
  "task create": {
    usage: 'zinn task create "Title" [--column <name>] [--description <text>] [--priority <level>]',
    description: "Create a task in Backlog unless a column is provided.",
    min: 1,
    options: {
      column: "<name>  Choose its column",
      description: "<text>  Add a description",
      priority: "low|medium|high|urgent",
    },
  },
  "task show": {
    usage: "zinn task show PLAY-1",
    description: "Inspect a task.",
    min: 1,
    max: 1,
  },
  "task edit": {
    usage: "zinn task edit PLAY-1 [--title <text>] [--description <text>] [--priority <level>]",
    description: "Update a task's title, description or priority.",
    min: 1,
    max: 1,
    options: {
      title: "<text>  Set its title",
      description: "<text>  Set its description",
      priority: "low|medium|high|urgent",
    },
  },
  "task move": {
    usage: 'zinn task move PLAY-1 "In Progress"',
    description: "Move a task to another column.",
    min: 2,
  },
  "task archive": {
    usage: "zinn task archive PLAY-1",
    description: "Archive a task.",
    min: 1,
    max: 1,
  },
  "task unarchive": {
    usage: "zinn task unarchive PLAY-1",
    description: "Restore an archived task.",
    min: 1,
    max: 1,
  },
  reset: {
    usage: "zinn reset --yes",
    description:
      "Replace your board with the three sample tasks. Export a backup first to keep your tasks.",
    min: 0,
    max: 0,
    flags: { yes: "Confirm replacing the board" },
  },
  export: {
    usage: "zinn export [file]",
    description: "Write a SQLite backup to a virtual file. Use download <file> to keep a copy.",
    min: 0,
    max: 1,
  },
  import: {
    usage: "zinn import <file>",
    description:
      "Restore a playground SQLite backup, replacing this board. Use File > Upload file to add a backup to the shell.",
    min: 1,
    max: 1,
  },
} satisfies Record<string, CommandSpec>;

export interface ZinnCommand {
  path: keyof typeof commands;
  positional: string[];
  options: Record<string, string>;
}

type ZinnInfo = { path: "help" | "version"; text: string };

function isCommand(path: string): path is ZinnCommand["path"] {
  return Object.hasOwn(commands, path);
}

function helpFor(path = ""): ZinnInfo {
  const lines = ["ZINN PLAYGROUND", ""];
  if (isCommand(path)) {
    const spec: CommandSpec = commands[path];
    lines.push(`Usage: ${spec.usage}`, spec.description, "");
    for (const [name, description] of Object.entries({ ...spec.options, ...spec.flags }))
      lines.push(`  --${name} ${description}`);
  } else if (!path || path === "task") {
    lines.push(
      path === "task" ? "Usage: zinn task <command>" : "Usage: zinn [command]",
      "A board of your own, saved in this browser when storage is available.",
      "",
    );
    for (const [name, spec] of Object.entries(commands))
      if (!path || name.startsWith("task "))
        lines.push(`  ${spec.usage}`, `    ${spec.description}`);
    if (!path) lines.push("", "  -v, --version  Show the bundled Zinn core version");
  } else {
    throw new Error(`Unknown Zinn command: ${path}. Type zinn help for examples.`);
  }
  lines.push(
    "  -h, --help  Show help",
    "",
    "Use --option=value for option values, or -- before literal arguments starting with a dash.",
    "This playground uses Zinn's shared task logic with browser storage.",
  );
  return { path: "help", text: lines.join("\n") };
}

export function parseZinnArgs(args: string[]): ZinnCommand | ZinnInfo {
  const [command, ...rest] = args;
  if (command === "help") {
    if (rest.at(-1) === "-h" || rest.at(-1) === "--help") rest.pop();
    return helpFor(rest.join(" "));
  }
  if (command === "-h" || command === "--help") {
    if (rest.length) throw new Error("Usage: zinn --help or zinn help [command]");
    return helpFor();
  }
  if (command === "-v" || command === "--version") {
    if (rest.length) throw new Error("Usage: zinn --version");
    return {
      path: "version",
      text: `Zinn playground (Zinn core ${coreVersion}, source ${coreCommit.slice(0, 7)})`,
    };
  }
  if (command === "task" && (!rest.length || rest[0] === "-h" || rest[0] === "--help")) {
    if (rest.length > 1) throw new Error("Usage: zinn task --help");
    return helpFor("task");
  }

  const path = command === "task" ? `task ${rest.shift()}` : (command ?? "board");
  if (!isCommand(path)) {
    if (command?.startsWith("-")) throw new Error(`Unknown option: ${command}`);
    throw new Error(`Unknown Zinn command: ${path}. Type zinn help for examples.`);
  }
  const spec: CommandSpec = commands[path];
  const positional: string[] = [];
  const options: Record<string, string> = {};
  let literal = false;
  for (let index = 0; index < rest.length; index++) {
    const arg = rest[index];
    if (literal || !arg.startsWith("-") || arg === "-") {
      positional.push(arg);
    } else if (arg === "--") {
      literal = true;
    } else if (arg === "-h" || arg === "--help") {
      return helpFor(path);
    } else {
      const separator = arg.indexOf("=");
      const name = arg.slice(2, separator < 0 ? undefined : separator);
      if (
        !arg.startsWith("--") ||
        (!Object.hasOwn(spec.options ?? {}, name) && !Object.hasOwn(spec.flags ?? {}, name))
      )
        throw new Error(`Unknown option: ${arg}`);
      if (Object.hasOwn(options, name)) throw new Error(`Provide --${name} only once.`);
      if (Object.hasOwn(spec.flags ?? {}, name)) {
        if (separator >= 0) throw new Error(`Option --${name} does not take a value.`);
        options[name] = "true";
      } else if (separator >= 0) {
        options[name] = arg.slice(separator + 1);
      } else {
        const value = rest[++index];
        if (value === undefined || (value.startsWith("-") && value !== "-"))
          throw new Error(
            `Provide a value for --${name}. Use --${name}=<value> if it starts with a dash.`,
          );
        options[name] = value;
      }
    }
  }
  if (positional.length < spec.min || (spec.max !== undefined && positional.length > spec.max))
    throw new Error(`Usage: ${spec.usage}`);
  if (path === "reset" && !options.yes)
    throw new Error(
      `To replace this board with fresh samples, type ${spec.usage}. Export a backup first to keep your tasks.`,
    );
  return { path, positional, options };
}
