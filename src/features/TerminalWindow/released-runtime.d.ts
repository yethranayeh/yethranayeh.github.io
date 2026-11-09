declare module "*generated/browser-cli.js" {
  import type { Sqlite3Static } from "@sqlite.org/sqlite-wasm";
  import type { InvocationContext, PlaygroundResult } from "@/features/TerminalWindow/zinn-client";
  export const identity: {
    cli: string;
    core: string;
    adaptation: string;
    storageNamespace: string;
  };
  export function initialize(sqlite: Sqlite3Static): void;
  export function invoke(
    argv: string[],
    context?: InvocationContext & { deferStorage?: boolean },
  ): Promise<PlaygroundResult & { needsStorage?: boolean }>;
  export function snapshot(): Uint8Array | undefined;
  export function replaceSnapshot(bytes: Uint8Array | undefined): Promise<void>;
}
declare module "*commands-adapter.js" {
  import type { CommandCallback } from "@everruns/bashkit-wasm";
  import type { InvocationContext, PlaygroundResult } from "@/features/TerminalWindow/zinn-client";
  export function zinnCommand(
    invoke: (argv: string[], context: InvocationContext) => Promise<PlaygroundResult>,
    options: { columns: number | (() => number) },
  ): CommandCallback;
}
