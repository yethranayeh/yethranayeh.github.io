import { project, column, task } from "./zinn-core";
import type { TaskWithKey, TaskPriority } from "./zinn-core";

export const playgroundKey = "PLAY";
export const visitor = { name: "Visitor", email: null, kind: "human" as const };

export function seedPlayground() {
  const board = project.create({ key: playgroundKey, name: "Your playground" }, visitor);
  task.create({ project_id: board.id, title: "Explore the desktop", columnName: "Done" }, visitor);
  task.create(
    {
      project_id: board.id,
      title: "Try moving a task",
      columnName: "In Progress",
      description: "Move me with: zinn task move PLAY-2 Review",
    },
    visitor,
  );
  task.create(
    {
      project_id: board.id,
      title: "Make something of your own",
      description: 'Try: zinn task create "My first task"',
    },
    visitor,
  );
}

const help = [
  "ZINN PLAYGROUND",
  "A board of your own, saved in this browser when storage is available.",
  "",
  "  zinn                              Show your board",
  "  zinn task list                    List active tasks",
  '  zinn task create "A new idea"      Create a task in Backlog',
  '    --column "In Progress"          Choose its column',
  '    --description "More details"    Add a description',
  "    --priority high                 low / medium / high / urgent",
  "  zinn task show PLAY-1              Inspect a task",
  '  zinn task edit PLAY-1 --title "New title"',
  '    --description "New details"     Update its description',
  "    --priority medium               Update its priority",
  '  zinn task move PLAY-1 "In Progress"',
  "  zinn task archive PLAY-1           Archive a task",
  "  zinn task unarchive PLAY-1         Restore an archived task",
  "  zinn task list --archive all       Include archived tasks",
  "  zinn task list --column Review     Filter by column",
  '  zinn search "idea"                Search task text',
  "  zinn columns                      List columns",
  "  zinn reset --yes                  Replace your board with samples",
  "  zinn export [file]                Write a SQLite backup to a virtual file",
  "  zinn import <file>                Restore a SQLite backup",
  "",
  "Use download <file> to save a backup to your computer.",
  "File > Upload file adds a backup to the shell. Import replaces this board.",
  "This playground uses Zinn's shared task logic with browser storage.",
].join("\n");

function parseOptions(args: string[], allowed: string[]) {
  const positional: string[] = [];
  const options: Record<string, string> = {};
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg.startsWith("--")) {
      const name = arg.slice(2);
      if (!allowed.includes(name)) throw new Error(`Unknown option: ${arg}`);
      if (name in options) throw new Error(`Provide ${arg} only once.`);
      const value = args[++index];
      if (value === undefined || value.startsWith("--"))
        throw new Error(`Provide a value for ${arg}.`);
      options[name] = value;
    } else positional.push(arg);
  }
  return { positional, options };
}

function requireArguments(args: string[], count: number, usage: string) {
  if (args.length !== count) throw new Error(`Usage: ${usage}`);
}

function getBoard() {
  const board = project.getByKey(playgroundKey);
  if (!board)
    throw new Error("The playground project is missing. Import a backup or use zinn reset --yes.");
  return board;
}

function getTask(key: string) {
  const found = task.getByKey(key.toUpperCase());
  if (found.project_id !== getBoard().id)
    throw new Error("Choose a task from the PLAY playground.");
  return found;
}

function formatTasks(tasks: TaskWithKey[]) {
  const columns = column.getAllByProjectKey(playgroundKey);
  if (!tasks.length) return 'No tasks found. Try zinn task create "A new idea".';
  return tasks
    .map((entry) => {
      const columnName = columns.find((item) => item.id === entry.column_id)?.name ?? "?";
      const state = entry.archived_at ? "archived" : columnName;
      return `${entry.key}  [${state}] ${entry.title}${entry.priority ? ` (${entry.priority})` : ""}`;
    })
    .join("\n");
}

export function executeZinn(args: string[]): { text: string; mutated: boolean } {
  const [command, ...rest] = args;
  if (command === "help" || command === "--help") return { text: help, mutated: false };
  if (!command || command === "board") {
    requireArguments(rest, 0, "zinn");
    const tasks = task.getAll({ projectKey: playgroundKey });
    const lines = ["YOUR ZINN BOARD", ""];
    for (const entry of column.getAllByProjectKey(playgroundKey)) {
      const items = tasks.filter((item) => item.column_id === entry.id);
      lines.push(`${entry.name.toUpperCase()} (${items.length})`);
      lines.push(...items.map((item) => `  ${item.key}  ${item.title}`));
      if (!items.length) lines.push("  (empty)");
      lines.push("");
    }
    lines.push('Try: zinn task create "A new idea"', "Type zinn help for all commands.");
    return { text: lines.join("\n"), mutated: false };
  }
  if (command === "columns") {
    requireArguments(rest, 0, "zinn columns");
    return {
      text: column
        .getAllByProjectKey(playgroundKey)
        .map((item) => item.name)
        .join("\n"),
      mutated: false,
    };
  }
  if (command === "search") {
    if (!rest.length) throw new Error('Usage: zinn search "words"');
    return {
      text: formatTasks(task.search({ projectKey: playgroundKey, query: rest.join(" ") }).tasks),
      mutated: false,
    };
  }
  if (command === "export") return { text: "Usage: zinn export [file]", mutated: false };
  if (command !== "task") throw new Error("Unknown Zinn command. Type zinn help for examples.");
  const [action, ...params] = rest;
  switch (action) {
    case "list": {
      const { positional, options } = parseOptions(params, ["column", "archive"]);
      requireArguments(
        positional,
        0,
        "zinn task list [--column <name>] [--archive active|archived|all]",
      );
      const archive = options.archive ?? "active";
      if (!["active", "archived", "all"].includes(archive))
        throw new Error("Choose --archive active, archived or all.");
      const entries = task.getAll({
        projectKey: playgroundKey,
        columnName: options.column,
        archive: archive as "active" | "archived" | "all",
      });
      return { text: formatTasks(entries), mutated: false };
    }
    case "create": {
      const { positional, options } = parseOptions(params, ["column", "description", "priority"]);
      if (!positional.length)
        throw new Error('Usage: zinn task create "Title" [--column "In Progress"]');
      const entry = task.create(
        {
          project_id: getBoard().id,
          title: positional.join(" "),
          description: options.description,
          columnName: options.column,
          priority: options.priority as TaskPriority | undefined,
        },
        visitor,
      );
      return { text: `Created ${entry.key}: ${entry.title}`, mutated: true };
    }
    case "show": {
      requireArguments(params, 1, "zinn task show PLAY-1");
      const entry = getTask(params[0]);
      const columnName = column.getById(entry.column_id)?.name ?? "?";
      return {
        text: `${entry.key}  ${entry.title}\nColumn: ${columnName}\nPriority: ${entry.priority ?? "none"}\nStatus: ${entry.archived_at ? "archived" : "active"}\n\n${entry.description ?? "No description yet."}`,
        mutated: false,
      };
    }
    case "edit": {
      const { positional, options } = parseOptions(params, ["title", "description", "priority"]);
      requireArguments(positional, 1, 'zinn task edit PLAY-1 --title "New title"');
      const entry = getTask(positional[0]);
      const result = task.edit(
        {
          taskKey: entry.key,
          title: options.title,
          description: options.description,
          priority: options.priority as TaskPriority | undefined,
        },
        visitor,
      );
      return {
        text: `${result.changed ? "Updated" : "Unchanged"} ${entry.key}: ${result.task.title}`,
        mutated: result.changed,
      };
    }
    case "move": {
      if (params.length < 2) throw new Error('Usage: zinn task move PLAY-1 "In Progress"');
      const entry = getTask(params[0]);
      const moved = task.move(
        { taskKey: entry.key, targetColumn: params.slice(1).join(" ") },
        visitor,
      );
      return {
        text: `Moved ${moved.key} to ${column.getById(moved.column_id)?.name}.`,
        mutated: true,
      };
    }
    case "archive":
    case "unarchive": {
      requireArguments(params, 1, `zinn task ${action} PLAY-1`);
      const entry = getTask(params[0]);
      task[action](entry.key, visitor);
      return {
        text: `${action === "archive" ? "Archived" : "Restored"} ${entry.key}.`,
        mutated: true,
      };
    }
    default:
      throw new Error("Unknown task command. Type zinn help for examples.");
  }
}
