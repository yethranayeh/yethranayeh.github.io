import { project, column, task } from "./zinn-core";
import type { TaskWithKey, TaskPriority } from "./zinn-core";
import type { ZinnCommand } from "./zinn-cli";

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

export function executeZinn({ path, positional, options }: ZinnCommand): {
  text: string;
  mutated: boolean;
} {
  if (path === "board") {
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
  if (path === "columns") {
    return {
      text: column
        .getAllByProjectKey(playgroundKey)
        .map((item) => item.name)
        .join("\n"),
      mutated: false,
    };
  }
  if (path === "search") {
    return {
      text: formatTasks(
        task.search({ projectKey: playgroundKey, query: positional.join(" ") }).tasks,
      ),
      mutated: false,
    };
  }
  switch (path) {
    case "task list": {
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
    case "task create": {
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
    case "task show": {
      const entry = getTask(positional[0]);
      const columnName = column.getById(entry.column_id)?.name ?? "?";
      return {
        text: `${entry.key}  ${entry.title}\nColumn: ${columnName}\nPriority: ${entry.priority ?? "none"}\nStatus: ${entry.archived_at ? "archived" : "active"}\n\n${entry.description ?? "No description yet."}`,
        mutated: false,
      };
    }
    case "task edit": {
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
    case "task move": {
      const entry = getTask(positional[0]);
      const moved = task.move(
        { taskKey: entry.key, targetColumn: positional.slice(1).join(" ") },
        visitor,
      );
      return {
        text: `Moved ${moved.key} to ${column.getById(moved.column_id)?.name}.`,
        mutated: true,
      };
    }
    case "task archive":
    case "task unarchive": {
      const action = path === "task archive" ? "archive" : "unarchive";
      const entry = getTask(positional[0]);
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
