import { state, unsupported } from "./host.js";
import { resolve, dirname } from "path-browserify";

export const boardPath = "/board/data/zinn.sqlite";
const absolute = (path) => resolve("/visitor", path);
const missing = (path) => Object.assign(new Error(`ENOENT: ${path}`), { code: "ENOENT" });
export function existsSync(path) {
  const key = absolute(path);
  return state.directories.has(key) || state.files.has(key) || (key === boardPath && state.exists);
}
export function realpathSync(path) {
  if (!existsSync(path)) throw missing(path);
  return absolute(path);
}
export function statSync(path) {
  const key = absolute(path);
  if (!existsSync(key)) throw missing(path);
  return {
    isDirectory: () => state.directories.has(key),
    isFile: () => !state.directories.has(key),
    size: key === boardPath ? (state.bytes?.length ?? 0) : (state.files.get(key)?.length ?? 0),
  };
}
export function mkdirSync(path) {
  let key = absolute(path);
  while (!state.directories.has(key)) {
    state.directories.add(key);
    state.directoryWrites++;
    key = dirname(key);
  }
}
export function readFileSync(path, encoding) {
  state.fileReads++;
  const bytes = state.files.get(absolute(path));
  if (!bytes) throw missing(path);
  return encoding ? new TextDecoder().decode(bytes) : bytes.slice();
}
export const constants = { O_RDONLY: 0, O_NONBLOCK: 0 };
export const promises = {
  stat: async (path) => statSync(path),
  open: async (path) => {
    const bytes = readFileSync(path);
    let position = 0;
    return {
      stat: async () => statSync(path),
      read: async (buffer, offset, length) => {
        const chunk = bytes.subarray(position, position + length);
        buffer.set(chunk, offset);
        position += chunk.length;
        return { bytesRead: chunk.length };
      },
      close: async () => {},
    };
  },
};
export const statfsSync = () => unsupported("host free-space inspection");
export const closeSync = () => unsupported("host file descriptors");
export const fsyncSync = closeSync;
export const openSync = closeSync;
export const renameSync = () => unsupported("host file rename");
export const rmSync = () => unsupported("host file removal");
