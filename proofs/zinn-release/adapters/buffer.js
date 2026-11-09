import { Buffer as PolyfillBuffer } from "buffer";

// buffer 6 predates Node's base64url encoding, used by released task-list cursors.
export class Buffer extends PolyfillBuffer {
  static from(value, encodingOrOffset, length) {
    const bytes = PolyfillBuffer.from(
      value,
      encodingOrOffset === "base64url" ? "base64" : encodingOrOffset,
      length,
    );
    Object.setPrototypeOf(bytes, Buffer.prototype);
    return bytes;
  }

  toString(encoding, start, end) {
    if (encoding === "base64url") {
      return super
        .toString("base64", start, end)
        .replaceAll("+", "-")
        .replaceAll("/", "_")
        .replace(/=+$/, "");
    }
    return super.toString(encoding, start, end);
  }
}
