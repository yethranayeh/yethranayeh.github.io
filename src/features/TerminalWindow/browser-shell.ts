import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import wasmUrl from "@everruns/bashkit-wasm/bashkit_wasm_bg.wasm?url";
import { TerminalShell } from "./terminal-shell";

let shellPromise: Promise<TerminalShell> | undefined;

export function getShell() {
  shellPromise ??= initBashkit(wasmUrl)
    .then(() => new TerminalShell(Bash))
    .catch((error) => {
      shellPromise = undefined;
      throw error;
    });
  return shellPromise;
}
