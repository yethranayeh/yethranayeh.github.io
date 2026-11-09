import baseline from "../../../proofs/zinn-release/baseline.json";

export const storageNamespace = baseline.storageNamespace;

export interface Snapshot {
  revision: number;
  bytes: Uint8Array;
}

// One atomically replaced SQLite image. A revision check prevents overwriting a newer tab.
export class PlaygroundStorage {
  private constructor(private readonly database: IDBDatabase) {}

  static open(): Promise<PlaygroundStorage> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(storageNamespace, 1);
      request.onupgradeneeded = () => request.result.createObjectStore("snapshots");
      request.onsuccess = () => {
        request.result.onversionchange = () => request.result.close();
        resolve(new PlaygroundStorage(request.result));
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Browser storage is busy in another tab."));
    });
  }

  read(): Promise<Snapshot | undefined> {
    return new Promise((resolve, reject) => {
      const tx = this.database.transaction("snapshots", "readonly");
      const request = tx.objectStore("snapshots").get("board");
      tx.oncomplete = () => resolve(request.result);
      tx.onabort = tx.onerror = () =>
        reject(tx.error ?? new Error("Couldn't read the saved board."));
    });
  }

  save(bytes: Uint8Array, expectedRevision: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const tx = this.database.transaction("snapshots", "readwrite");
      const store = tx.objectStore("snapshots");
      const request = store.get("board");
      let conflict = false;
      request.onsuccess = () => {
        if ((request.result?.revision ?? 0) !== expectedRevision) {
          conflict = true;
          tx.abort();
        } else {
          try {
            store.put({ revision: expectedRevision + 1, bytes }, "board");
          } catch {
            tx.abort();
          }
        }
      };
      tx.oncomplete = () => resolve(expectedRevision + 1);
      tx.onabort = tx.onerror = () =>
        reject(
          conflict
            ? new Error("Your board changed in another tab. Please retry the command.")
            : (tx.error ?? new Error("Couldn't save the board. Export a backup before leaving.")),
        );
    });
  }
}

// Inspect names only. Never open or reinterpret the old board image.
export async function hasOldPlayground() {
  return (
    typeof indexedDB.databases === "function" &&
    (await indexedDB.databases()).some(
      ({ name }) =>
        name !== storageNamespace &&
        (name === "portfolio-zinn-playground" || name?.startsWith("portfolio-zinn-cli-")),
    )
  );
}
