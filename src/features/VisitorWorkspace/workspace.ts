import type { HostFileSystem, HostDirent } from "@everruns/bashkit-wasm";
import { initialFiles } from "./initial-files";

export const visitorHome = "/home/guest";
const maxFileBytes = 5 * 1024 * 1024;
const maxTotalBytes = 20 * 1024 * 1024;
type Entry = { kind: "file"; bytes: Uint8Array } | { kind: "dir" };
type SavedWorkspace = { revision: number; resetGeneration?: number; entries: [string, Entry][] };

function fail(code: string, message: string): never {
  throw Object.assign(new Error(message), { code });
}

export function workspacePath(path: string, cwd = visitorHome) {
  const expanded =
    path === "~" ? visitorHome : path.startsWith("~/") ? visitorHome + path.slice(1) : path;
  const parts: string[] = [];
  for (const part of (expanded.startsWith("/") ? expanded : `${cwd}/${expanded}`).split("/")) {
    if (part === "..") parts.pop();
    else if (part && part !== ".") parts.push(part);
  }
  return "/" + parts.join("/");
}

export function sameBytes(a: Uint8Array, b: Uint8Array) {
  return a.length === b.length && a.every((byte, i) => byte === b[i]);
}

export function textContent(bytes: Uint8Array) {
  if (bytes.length > 1024 * 1024)
    throw new Error("The text editor supports files up to 1 MB. Download this file to open it.");
  let text: string;
  try {
    text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new Error("This file is not UTF-8 text. Download it to open it on your computer.");
  }
  // oxlint-disable-next-line no-control-regex -- Binary files must not be edited as text.
  if (/[\u0000-\u0008\u000e-\u001f]/.test(text))
    throw new Error("This is a binary file. Download it to open it on your computer.");
  return text;
}

// Only visitor bytes enter this store. There is no host filesystem or owner database bridge.
export class VisitorWorkspace implements HostFileSystem {
  private entries = this.seed();
  private database?: IDBDatabase;
  private revision = 0;
  private version = 0;
  private tail: Promise<unknown> = Promise.resolve();
  private listeners = new Set<() => void>();
  private channel?: BroadcastChannel;
  private changed = false;
  persistence: "saved" | "session" = "session";
  resetGeneration = 0;
  notice = "Files are available for this session. Export a copy to keep them.";

  private seed() {
    return new Map<string, Entry>([
      ["/", { kind: "dir" }],
      ["/home", { kind: "dir" }],
      [visitorHome, { kind: "dir" }],
      ...Object.entries(initialFiles).map(([name, text]): [string, Entry] => [
        `${visitorHome}/${name}`,
        { kind: "file", bytes: new TextEncoder().encode(text) },
      ]),
    ]);
  }

  static async open() {
    const workspace = new VisitorWorkspace();
    try {
      workspace.database = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open("portfolio-visitor-workspace", 1);
        request.onupgradeneeded = () => request.result.createObjectStore("snapshots");
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error("Storage is busy in another tab."));
      });
      workspace.database.onversionchange = () => workspace.database?.close();
      await workspace.load();
      workspace.persistence = "saved";
      workspace.notice = "Saved in this browser. Export a copy before clearing browser data.";
      // Initial documents are committed just like all later file changes.
      await workspace.run(() => {
        workspace.changed = workspace.revision === 0;
      });
    } catch (error) {
      // A failed read must never replace an existing saved drive with sample files.
      workspace.database?.close();
      workspace.database = undefined;
      workspace.notice = `Storage unavailable. Files are session-only. Export a copy before leaving. ${error instanceof Error ? error.message : ""}`;
      workspace.persistence = "session";
    }
    if (workspace.database && typeof BroadcastChannel !== "undefined") {
      workspace.channel = new BroadcastChannel("portfolio-visitor-workspace");
      workspace.channel.onmessage = () => {
        void workspace.run(() => {}).catch(() => {});
      };
    }
    return workspace;
  }

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
  getVersion = () => this.version;
  private publish() {
    this.version++;
    this.listeners.forEach((listener) => listener());
  }

  private async load() {
    if (!this.database) return;
    const saved = await new Promise<SavedWorkspace | undefined>((resolve, reject) => {
      const tx = this.database!.transaction("snapshots", "readonly");
      const request = tx.objectStore("snapshots").get("files");
      tx.oncomplete = () => resolve(request.result);
      tx.onabort = tx.onerror = () => reject(tx.error ?? new Error("Couldn't read visitor files."));
    });
    if (!saved || saved.revision === this.revision) return;
    const entries = this.seed();
    for (const path of [...entries.keys()])
      if (path.startsWith(visitorHome + "/")) entries.delete(path);
    let total = 0;
    if (
      !Number.isSafeInteger(saved.revision) ||
      saved.revision < 1 ||
      !Array.isArray(saved.entries) ||
      saved.entries.length > 512
    )
      throw new Error("Saved visitor files are invalid.");
    for (const [path, entry] of saved.entries) {
      if (
        path !== workspacePath(path) ||
        !path.startsWith(visitorHome + "/") ||
        (entry.kind !== "dir" && entry.kind !== "file")
      )
        throw new Error("Saved visitor file paths are invalid.");
      if (entry.kind === "file") {
        if (!(entry.bytes instanceof Uint8Array) || entry.bytes.length > maxFileBytes)
          throw new Error("Saved visitor file is invalid.");
        total += entry.bytes.length;
      }
      entries.set(path, entry);
    }
    if (total > maxTotalBytes) throw new Error("Saved workspace is too large.");
    for (const path of entries.keys()) {
      if (path !== "/" && entries.get(path.slice(0, path.lastIndexOf("/")) || "/")?.kind !== "dir")
        throw new Error("Saved workspace has a missing parent folder.");
    }
    this.entries = entries;
    this.revision = saved.revision;
    this.resetGeneration = saved.resetGeneration ?? 0;
    this.publish();
  }

  private async save() {
    if (!this.database || !this.changed) return;
    const entries = [...this.entries].filter(([path]) => path.startsWith(visitorHome + "/"));
    await new Promise<void>((resolve, reject) => {
      const tx = this.database!.transaction("snapshots", "readwrite");
      const store = tx.objectStore("snapshots");
      const request = store.get("files");
      let conflict = false;
      request.onsuccess = () => {
        if ((request.result?.revision ?? 0) !== this.revision) {
          conflict = true;
          tx.abort();
        } else
          store.put(
            { revision: this.revision + 1, resetGeneration: this.resetGeneration, entries },
            "files",
          );
      };
      tx.oncomplete = () => resolve();
      tx.onabort = tx.onerror = () =>
        reject(
          new Error(
            conflict
              ? "Visitor files changed in another tab. Retry your action."
              : "Couldn't save visitor files. Changes were rolled back. Export a copy or free browser storage.",
          ),
        );
    });
    this.revision++;
    this.channel?.postMessage(this.revision);
  }

  // Shell commands, uploads and editor saves share one queue and commit boundary.
  run<T>(action: () => T | Promise<T>): Promise<T> {
    const result = this.tail.then(async () => {
      await this.load();
      const previous = new Map(this.entries);
      const previousGeneration = this.resetGeneration;
      this.changed = false;
      try {
        const value = await action();
        await this.save();
        return value;
      } catch (error) {
        this.entries = previous;
        this.resetGeneration = previousGeneration;
        throw error;
      } finally {
        this.publish();
      }
    });
    this.tail = result.catch(() => {});
    return result;
  }

  private writable(path: string) {
    if (path !== workspacePath(path) || path.includes("\0") || !path.startsWith(visitorHome + "/"))
      fail("EACCES", "Only /home/guest is writable.");
  }
  private entry(path: string) {
    const entry = this.entries.get(path);
    if (!entry) fail("ENOENT", `File not found: ${path}`);
    return entry;
  }
  exists(path: string) {
    return this.entries.has(path) || path === "/dev/null";
  }
  stat(path: string) {
    if (path === "/dev/null") return { type: "file" as const, size: 0 };
    const entry = this.entry(path);
    return { type: entry.kind, size: entry.kind === "file" ? entry.bytes.length : 0 };
  }
  read(path: string): Uint8Array {
    if (path === "/dev/null") return new Uint8Array();
    const entry = this.entry(path);
    if (entry.kind !== "file") fail("EISDIR", "This is a folder.");
    return new Uint8Array(entry.bytes);
  }
  write(path: string, bytes: Uint8Array) {
    if (path === "/dev/null") return;
    this.writable(path);
    if (this.entries.get(path)?.kind === "dir") fail("EISDIR", "This is a folder.");
    const parent = path.slice(0, path.lastIndexOf("/"));
    if (this.entry(parent).kind !== "dir") fail("ENOTDIR", "Parent is not a folder.");
    const old = this.entries.get(path);
    if (old?.kind === "file" && sameBytes(old.bytes, bytes)) return;
    if (bytes.length > maxFileBytes) fail("EPERM", "Files must be smaller than 5 MB.");
    let total = bytes.length;
    for (const [name, entry] of this.entries)
      if (name !== path && entry.kind === "file") total += entry.bytes.length;
    if (total > maxTotalBytes || (!old && this.entries.size >= 515))
      fail(
        "EPERM",
        "Workspace limit reached (20 MB or 512 entries). Export or remove files first.",
      );
    this.entries.set(path, { kind: "file", bytes: new Uint8Array(bytes) });
    this.changed = true;
  }
  mkdir(path: string, recursive: boolean) {
    if (this.entries.has(path)) {
      if (this.entry(path).kind !== "dir") fail("EEXIST", "A file already exists here.");
      return;
    }
    this.writable(path);
    const parent = path.slice(0, path.lastIndexOf("/"));
    if (recursive && !this.entries.has(parent)) this.mkdir(parent, true);
    if (this.entry(parent).kind !== "dir") fail("ENOTDIR", "Parent is not a folder.");
    if (this.entries.size >= 515) fail("EPERM", "Workspace limit reached (512 entries).");
    this.entries.set(path, { kind: "dir" });
    this.changed = true;
  }
  remove(path: string, recursive: boolean) {
    this.writable(path);
    this.entry(path);
    const children = [...this.entries.keys()].filter((name) => name.startsWith(path + "/"));
    if (children.length && !recursive) fail("ENOTEMPTY", "Folder is not empty.");
    for (const name of [path, ...children]) this.entries.delete(name);
    this.changed = true;
  }
  copy(from: string, to: string) {
    if (to === from || to.startsWith(from + "/"))
      fail("EPERM", "Cannot copy a folder into itself.");
    const source = this.entry(from);
    if (source.kind === "file") {
      this.write(to, source.bytes);
      return;
    }
    const children = [...this.entries].filter(([path]) => path.startsWith(from + "/"));
    this.mkdir(to, false);
    for (const [path, entry] of children.sort(([a], [b]) => a.length - b.length)) {
      const target = to + path.slice(from.length);
      if (entry.kind === "dir") this.mkdir(target, false);
      else this.write(target, entry.bytes);
    }
  }
  rename(from: string, to: string) {
    this.writable(from);
    this.writable(to);
    if (from === to) return;
    if (to.startsWith(from + "/")) fail("EPERM", "Cannot move a folder into itself.");
    const source = this.entry(from);
    if (this.entry(to.slice(0, to.lastIndexOf("/"))).kind !== "dir")
      fail("ENOTDIR", "Parent is not a folder.");
    const target = this.entries.get(to);
    if (target && target.kind !== source.kind)
      fail("EEXIST", "The destination has a different file type.");
    if (target?.kind === "dir" && this.readDir(to).length)
      fail("ENOTEMPTY", "Destination folder is not empty.");
    const moving = [...this.entries].filter(
      ([path]) => path === from || path.startsWith(from + "/"),
    );
    for (const [path] of moving) this.entries.delete(path);
    for (const [path, entry] of moving) this.entries.set(to + path.slice(from.length), entry);
    this.changed = true;
  }
  readDir(path: string): HostDirent[] {
    if (this.entry(path).kind !== "dir") fail("ENOTDIR", "This is not a folder.");
    const prefix = path === "/" ? "/" : path + "/";
    return [...this.entries]
      .filter(([name]) => name.startsWith(prefix) && !name.slice(prefix.length).includes("/"))
      .map(([name, entry]) => ({
        name: name.slice(prefix.length),
        type: entry.kind,
        size: entry.kind === "file" ? entry.bytes.length : 0,
      }))
      .sort(
        (a, b) =>
          (a.type === b.type ? 0 : a.type === "dir" ? -1 : 1) || a.name.localeCompare(b.name),
      );
  }

  upload(name: string, bytes: Uint8Array) {
    return this.run(() => {
      // oxlint-disable-next-line no-control-regex -- Replace invalid uploaded filename bytes.
      const safeName = name.replace(/[\\/\x00-\x1f]/g, "_");
      if (!safeName || safeName === "." || safeName === "..")
        throw new Error("Choose a valid filename.");
      const path = `${visitorHome}/${safeName}`;
      if (this.exists(path))
        throw new Error(
          `File already exists: ${path}. Rename or remove it before uploading another copy.`,
        );
      this.write(path, bytes);
      return path;
    });
  }
  saveText(path: string, text: string, expected: Uint8Array) {
    return this.run(() => {
      const bytes = new TextEncoder().encode(text);
      textContent(bytes);
      if (!sameBytes(this.read(path), expected))
        throw new Error("This file changed. Reload it or download your draft before trying again.");
      this.write(path, bytes);
    });
  }
  reset() {
    return this.run(() => {
      this.entries = this.seed();
      this.resetGeneration++;
      this.changed = true;
    });
  }
  files() {
    return [...this.entries]
      .filter(([path]) => path.startsWith(visitorHome + "/"))
      .map(([path, entry]) => ({
        path: path.slice(visitorHome.length + 1) + (entry.kind === "dir" ? "/" : ""),
        bytes: entry.kind === "file" ? new Uint8Array(entry.bytes) : new Uint8Array(),
      }));
  }
}
