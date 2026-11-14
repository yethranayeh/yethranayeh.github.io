export interface InvocationContext {
  tty?: boolean;
  columns?: number;
  color?: boolean;
  cwd?: string;
  projection?: { path: string; directory?: boolean; text?: string; error?: string }[];
}
export interface PlaygroundResult {
  stdout: string;
  stderr: string;
  status: number;
  notices?: string[];
  persistence?: "saved" | "session";
  identity?: { cli: string; core: string; adaptation: string; storageNamespace: string };
  bytes?: Uint8Array;
}

interface PendingRequest {
  resolve: (value: PlaygroundResult) => void;
  reject: (error: Error) => void;
  timeout: ReturnType<typeof setTimeout>;
}

const EMPTY_RESULT: PlaygroundResult = { stdout: "", stderr: "", status: 0 };

let worker: Worker | undefined;
let requestId = 0;
let ready = false;
let preparing: Promise<void> | undefined;
const pending = new Map<number, PendingRequest>();

function stopWorker(error: Error) {
  for (const request of pending.values()) {
    clearTimeout(request.timeout);
    request.reject(error);
  }
  pending.clear();
  worker?.terminate();
  worker = undefined;
  ready = false;
  preparing = undefined;
}

function ensureWorker() {
  if (worker) return worker;

  worker = new Worker(new URL("./zinn.worker.ts", import.meta.url), { type: "module" });
  worker.onmessage = (
    event: MessageEvent<{ id: number; result?: PlaygroundResult; error?: string }>,
  ) => {
    const request = pending.get(event.data.id);
    if (!request) return;
    clearTimeout(request.timeout);
    pending.delete(event.data.id);
    if (event.data.error) request.reject(new Error(event.data.error));
    else request.resolve(event.data.result ?? EMPTY_RESULT);
  };
  worker.onmessageerror = () =>
    stopWorker(new Error("Zinn returned an unreadable response. Please retry."));
  worker.onerror = () =>
    stopWorker(new Error("Zinn worker stopped. Inspect the board before retrying a mutation."));

  return worker;
}

/**
 * Boots the worker — module graph, SQLite wasm and the stored board — outside
 * any shell execution.
 *
 * BashKit charges a whole builtin call to its execution budget, so doing this
 * inside the first `zinn` command made a slow download report "resource limit
 * exceeded: execution timeout (5s)" as though a script had run away.
 */
export function prepareZinn(): Promise<void> {
  if (ready) return Promise.resolve();

  preparing ??= new Promise<void>((resolve, reject) => {
    const active = ensureWorker();
    const id = ++requestId;
    const timeout = setTimeout(() => {
      pending.delete(id);
      preparing = undefined;
      reject(new Error("Zinn took too long to start. Please retry."));
    }, 60_000);

    pending.set(id, {
      resolve: () => {
        clearTimeout(timeout);
        ready = true;
        resolve();
      },
      reject: (error) => {
        clearTimeout(timeout);
        preparing = undefined;
        reject(error);
      },
      timeout,
    });
    active.postMessage({ id, prepare: true });
  });

  return preparing;
}

export function zinnRequest(
  args: string[],
  bytes?: Uint8Array,
  context?: InvocationContext,
): Promise<PlaygroundResult> {
  const active = ensureWorker();
  const id = ++requestId;
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () =>
        stopWorker(
          new Error("Zinn took too long to respond. Inspect the board before retrying a mutation."),
        ),
      30_000,
    );
    pending.set(id, { resolve, reject, timeout });
    active.postMessage({ id, args, bytes, context });
  });
}
