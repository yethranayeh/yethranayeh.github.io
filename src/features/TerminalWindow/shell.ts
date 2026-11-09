import type { PlaygroundResult, InvocationContext } from "./zinn-client";

export interface ShellContext {
  open: (name: string) => boolean;
  openFile?: (path: string) => void;
  columns?: number | (() => number);
  zinn: (
    args: string[],
    bytes?: Uint8Array,
    context?: InvocationContext,
  ) => Promise<PlaygroundResult>;
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

// Only the four styles used by the pinned released renderer may reach Ghostty.
// All other controls retain terminalText's existing handling.
export function styledTerminalText(text: string): string {
  return (
    text
      // oxlint-disable-next-line no-control-regex -- Allow only released SGR styles.
      .split(/(\x1b\[(?:1|2|22|90|39|32)m)/g)
      .map((part) =>
        // oxlint-disable-next-line no-control-regex -- Allow only released SGR styles.
        /^\x1b\[(?:1|2|22|90|39|32)m$/.test(part) ? part : terminalText(part),
      )
      .join("")
  );
}
export function plainTerminalText(text: string): string {
  // oxlint-disable-next-line no-control-regex -- Remove released SGR from the plain transcript.
  return terminalText(text.replace(/\x1b\[(?:1|2|22|90|39|32)m/g, ""));
}
