import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import wasmUrl from "@everruns/bashkit-wasm/bashkit_wasm_bg.wasm?url";
import { TerminalShell } from "./terminal-shell";
import { getWorkspace } from "../VisitorWorkspace/browser-workspace";

let shellPromise: Promise<TerminalShell> | undefined;

export function getShell() {
  shellPromise ??= Promise.all([initBashkit(wasmUrl), getWorkspace()])
    .then(([, workspace]) => new TerminalShell(Bash, workspace))
    .catch((error) => {
      shellPromise = undefined;
      throw error;
    });
  return shellPromise;
}
