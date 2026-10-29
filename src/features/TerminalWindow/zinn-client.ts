export interface PlaygroundResult {
  text: string;
  persistence?: "saved" | "session";
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

export function zinnRequest(args: string[], bytes?: Uint8Array): Promise<PlaygroundResult> {
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
    worker.onerror = () =>
      stopWorker(new Error("Zinn couldn't start. Please retry or reload the page."));
  }
  const id = ++requestId;
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => stopWorker(new Error("Zinn took too long to respond. Please retry.")),
      30_000,
    );
    pending.set(id, { resolve, reject, timeout });
    worker!.postMessage({ id, args, bytes });
  });
}
