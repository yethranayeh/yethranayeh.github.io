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

let worker: Worker | undefined;
let requestId = 0;
const pending = new Map<number, PendingRequest>();

function stopWorker(error: Error) {
  for (const request of pending.values()) {
    clearTimeout(request.timeout);
    request.reject(error);
  }
  pending.clear();
  worker?.terminate();
  worker = undefined;
}

export function zinnRequest(
  args: string[],
  bytes?: Uint8Array,
  context?: InvocationContext,
): Promise<PlaygroundResult> {
  if (!worker) {
    worker = new Worker(new URL("./zinn.worker.ts", import.meta.url), { type: "module" });
    worker.onmessage = (
      event: MessageEvent<{ id: number; result?: PlaygroundResult; error?: string }>,
    ) => {
      const request = pending.get(event.data.id);
      if (!request) return;
      clearTimeout(request.timeout);
      pending.delete(event.data.id);
      if (event.data.error) request.reject(new Error(event.data.error));
      else if (event.data.result) request.resolve(event.data.result);
    };
    worker.onmessageerror = () =>
      stopWorker(new Error("Zinn returned an unreadable response. Please retry."));
    worker.onerror = () =>
      stopWorker(new Error("Zinn worker stopped. Inspect the board before retrying a mutation."));
  }
  const id = ++requestId;
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => stopWorker(new Error("Zinn took too long to respond. Inspect the board before retrying a mutation.")),
      30_000,
    );
    pending.set(id, { resolve, reject, timeout });
    worker!.postMessage({ id, args, bytes, context });
  });
}
