type WasmFetchOptions = {
  label: string;
  signal?: AbortSignal;
  onProgress?: (receivedBytes: number) => void;
};

/**
 * Downloads a wasm binary and hands back a Response the engine can compile,
 * so the download can be observed and cancelled while it happens.
 *
 * The byte count is for feedback only. The host serves wasm gzipped, so
 * `content-length` is the compressed size while this stream yields decoded
 * bytes: GitHub Pages reports 3,085,460 for a body that arrives as 7,790,288
 * decoded bytes. A percentage built on it would reach 100% at roughly 40% of
 * the real transfer, so report bytes received and never a fraction.
 */
export async function fetchWasm(
  url: string,
  { label, signal, onProgress }: WasmFetchOptions,
): Promise<Response> {
  let response: Response;
  try {
    response = await fetch(url, { signal });
  } catch (error) {
    // An abort is the visitor's own choice and keeps its own message.
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    throw new Error(
      `The ${label} couldn't be downloaded. Check the connection, then run load-shell again.`,
    );
  }

  if (!response.ok || !response.body) {
    throw new Error(
      `The ${label} couldn't be loaded (${response.status}). Run load-shell to retry.`,
    );
  }

  let received = 0;
  const counted = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      received += chunk.byteLength;
      onProgress?.(received);
      controller.enqueue(chunk);
    },
  });

  return new Response(response.body.pipeThrough(counted), { headers: response.headers });
}
