import type { PlaygroundResult } from "./zinn-client";

export interface ShellContext {
  open: (name: string) => boolean;
  zinn: (args: string[], bytes?: Uint8Array) => Promise<PlaygroundResult>;
  download: (name: string, bytes: Uint8Array) => void;
  history: readonly string[];
}

export const commandNames = [
  "help",
  "pwd",
  "cd",
  "ls",
  "cat",
  "mkdir",
  "touch",
  "cp",
  "mv",
  "rm",
  "echo",
  "printf",
  "grep",
  "sort",
  "head",
  "tail",
  "wc",
  "find",
  "date",
  "whoami",
  "history",
  "clear",
  "exit",
  "about",
  "projects",
  "open",
  "zinn",
  "download",
];

export const welcome = "Terminal\nType help for available commands.\n\n";
export const prompt = "guest@portfolio $ ";

// Shell output and file contents must not become OSC clipboard or other terminal controls.
export function terminalText(text: string): string {
  // oxlint-disable-next-line no-control-regex -- Strip untrusted terminal control bytes.
  return text.replace(/[\u0000-\u0008\u000b-\u001f\u007f-\u009f]/g, "").replace(/\r?\n/g, "\r\n");
}
