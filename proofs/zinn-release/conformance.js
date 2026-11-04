// Ordered fixtures are shared by the native comparison and the real browser worker.
export const earlyCases = [
  [],
  ["--help"],
  ["-h"],
  ["--version"],
  ["-v"],
  ["task", "--help"],
  ["project", "--help"],
  ["task", "create", "--help", "--description-file", "/visitor/never-read.txt"],
  ["--help", "ignored", "--description-file", "/visitor/never-read.txt"],
  ["task", "new", "--help"],
];
export const invalidCases = [
  ["unknown"],
  ["task"],
  ["task", "unknown", "PLAY-1"],
  ["task", "create", "PLAY", "positional title"],
  ["task", "create", "PLAY", "--title"],
  ["task", "create", "PLAY", "--title", "A", "--title", "B"],
  ["task", "create", "PLAY", "--title", "-literal"],
  ["task", "create", "PLAY", "--wat"],
  ["task", "create", "PLAY", "--title=A", "--priority=wrong"],
  [
    "task",
    "create",
    "PLAY",
    "--title=A",
    "--description-file=/visitor/never-read.txt",
    "--priority=wrong",
  ],
  ["task", "list", "PLAY", "--all=true"],
  ["task", "list", "PLAY", "--limit=zero"],
  ["task", "move", "PLAY-1"],
  ["task", "view", "PLAY-1", "extra"],
  ["task", "view", "PLAY-1", "--json", "--json"],
  ["task", "edit", "PLAY-1", "--column=Done"],
  ["task", "search", "-literal"],
  ["task", "search", "x", "PLAY", "--all-projects"],
];
export const operationCases = [
  ["project", "create", "PLAY", "--name=Browser proof"],
  ["project", "list"],
  ["project", "view", "PLAY"],
  [
    "task",
    "create",
    "PLAY",
    "--title=Quoted 'browser' task",
    "--description=First line\nSecond line",
    "--priority=high",
    "--due=1893456000000",
  ],
  ["task", "list", "PLAY"],
  ["task", "view", "PLAY-1"],
  ["task", "show", "PLAY-1"],
  ["task", "edit", "PLAY-1", "--title=Edited browser task", "--description=- literal text"],
  ["task", "move", "PLAY-1", "In Progress"],
  ["task", "search", "Edited browser", "PLAY"],
  ["task", "search", "PLAY-1"],
  [
    "task",
    "create",
    "PLAY",
    "--title=-literal --help",
    "--description-file=/visitor/note.txt",
    "--json",
  ],
  ["task", "list", "PLAY", "--json"],
  ["task", "view", "PLAY-1", "--json"],
  ["task", "edit", "PLAY-1", "--description=append text", "--append", "--json"],
  ["task", "edit", "PLAY-1", "--priority=none", "--json"],
  ["task", "move", "PLAY-1", "Done", "--json"],
  ["task", "list", "PLAY", "--column=Done", "--json"],
  ["task", "search", "--json", "--", "-literal", "PLAY"],
  ["task", "search", "--", "--json", "PLAY"],
  ["task", "list", "PLAY", "--limit=1"],
  ["task", "list", "PLAY", "--limit=1", "--json"],
  ["task", "create", "PLAY", "--title=not saved", "--column=Missing", "--json"],
  ["task", "view", "PLAY-999", "--json"],
  ["task", "edit", "PLAY-1", "--title=Edited browser task"],
  ["task", "search", "no matching task", "PLAY"],
];
export const files = { "/visitor/note.txt": "Virtual file content\n" };

/** Only nondeterministic identities, creation/update times, timezone display and sandbox paths differ. */
export function normalize(text, { store = "/board", note = "/visitor/note.txt" } = {}) {
  return text
    .replaceAll(store, "<STORE>")
    .replaceAll(note, "<NOTE>")
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, "<UUID>")
    .replace(/"(created_at|updated_at)": \d+/g, '"$1": <TIME>')
    .replace(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}(?::\d{2})? (?:[+-]\d{2}:\d{2}|Z)/g, "<LOCAL_TIME>");
}

export function comparable(result, paths) {
  return {
    stdout: normalize(result.stdout, paths),
    stderr: normalize(result.stderr, paths),
    status: result.status,
  };
}
