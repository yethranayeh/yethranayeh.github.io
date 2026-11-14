import { Bash, initBashkit } from "@everruns/bashkit-wasm";
import wasmUrl from "@everruns/bashkit-wasm/bashkit_wasm_bg.wasm?url";
import { TerminalShell } from "./terminal-shell";
import { getWorkspace } from "../VisitorWorkspace/browser-workspace";
import { fetchWasm } from "./wasm-fetch";

let shellPromise: Promise<TerminalShell> | undefined;
let shellReady = false;
let reportProgress: ((receivedBytes: number) => void) | undefined;

/** True once commands can run. False while the shell is still downloading. */
export function isShellReady() {
  return shellReady;
}

/**
 * Subscribes to shell download progress. One listener is enough: a single
 * terminal owns the shell, and the bytes are reported as they arrive.
 */
export function watchShellProgress(listener: (receivedBytes: number) => void) {
  reportProgress = listener;
  return () => {
    if (reportProgress === listener) reportProgress = undefined;
  };
}

export function getShell(signal?: AbortSignal) {
  shellPromise ??= Promise.all([
    fetchWasm(wasmUrl, {
      label: "shell",
      signal,
      onProgress: (bytes) => reportProgress?.(bytes),
    }).then((response) => initBashkit(response)),
    getWorkspace(),
  ])
    .then(([, workspace]) => {
      shellReady = true;
      return new TerminalShell(Bash, workspace);
    })
    .catch((error) => {
      shellPromise = undefined;
      shellReady = false;
      throw error;
    });
  return shellPromise;
}
