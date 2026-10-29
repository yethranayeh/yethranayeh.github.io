import type { SrcFolder, SrcEntry } from "virtual:public-files";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, ScrollView } from "react95";
import { useTranslation } from "react-i18next";
import { srcTree } from "virtual:public-files";
import { useWorkspace } from "../VisitorWorkspace/browser-workspace";
import { textContent, visitorHome } from "../VisitorWorkspace/workspace";
import { downloadFile, workspaceZip } from "../VisitorWorkspace/export";
import { TextEditor } from "./TextEditor";
import styles from "./ComputerWindow.module.scss";

function findFolder(root: SrcFolder, path: string): SrcFolder {
  let folder = root;
  for (const part of path.split("/").filter(Boolean)) {
    const next = folder.children.find(
      (entry): entry is SrcFolder => entry.kind === "folder" && entry.name === part,
    );
    if (!next) return root;
    folder = next;
  }
  return folder;
}

type FileItem = { path: string; name: string; folder: boolean; source?: SrcEntry };
type Document = { path: string; text: string; bytes: Uint8Array; readOnly: boolean };

export function ComputerWindow({
  initialPath,
  launchId,
}: {
  initialPath?: string;
  launchId?: number;
}) {
  const { t } = useTranslation("content");
  const workspace = useWorkspace();
  const [drive, setDrive] = useState<"visitor" | "source">("visitor");
  const [currentPath, setCurrentPath] = useState(visitorHome);
  const [document, setDocument] = useState<Document>();
  const [editorDirty, setEditorDirty] = useState(false);
  const [pendingDocument, setPendingDocument] = useState<Document>();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const resetRef = useRef<HTMLDialogElement>(null);
  const lastLaunch = useRef<number>();

  const requestDocument = useCallback(
    (next: Document) => {
      if (editorDirty) {
        if (next.path !== document?.path || next.readOnly !== document?.readOnly)
          setPendingDocument(next);
      } else setDocument(next);
    },
    [editorDirty, document],
  );

  useEffect(() => {
    if (!workspace || !initialPath || lastLaunch.current === launchId) return;
    lastLaunch.current = launchId;
    try {
      setDrive("visitor");
      if (workspace.stat(initialPath).type === "dir") setCurrentPath(initialPath);
      else {
        setCurrentPath(initialPath.slice(0, initialPath.lastIndexOf("/")));
        const bytes = workspace.read(initialPath);
        requestDocument({ path: initialPath, bytes, text: textContent(bytes), readOnly: false });
      }
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't open file.");
    }
  }, [workspace, initialPath, launchId, requestDocument]);

  useEffect(() => {
    if (resetOpen) resetRef.current?.showModal();
    else resetRef.current?.close();
  }, [resetOpen]);

  const path =
    drive === "visitor" &&
    (!workspace?.exists(currentPath) || workspace.stat(currentPath).type !== "dir")
      ? visitorHome
      : currentPath;
  const items: FileItem[] =
    drive === "source"
      ? findFolder(srcTree, path).children.map((entry) => ({
          path: entry.path,
          name: entry.name,
          folder: entry.kind === "folder",
          source: entry,
        }))
      : (workspace?.readDir(path).map((entry) => ({
          path: `${path}/${entry.name}`,
          name: entry.name,
          folder: entry.type === "dir",
        })) ?? []);

  function open(item: FileItem) {
    setError("");
    if (item.folder) {
      setCurrentPath(item.path);
      return;
    }
    try {
      const bytes =
        item.source?.kind === "file"
          ? item.source.text === undefined
            ? undefined
            : new TextEncoder().encode(item.source.text)
          : workspace?.read(item.path);
      if (!bytes) throw new Error(t("computer.previewUnavailable"));
      requestDocument({
        path: item.path,
        bytes,
        text: textContent(bytes),
        readOnly: drive === "source",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't open file.");
    }
  }

  async function exportFiles() {
    if (!workspace) return;
    setBusy(true);
    setError("");
    try {
      const bytes = await workspace.run(() => workspaceZip(workspace.files()));
      downloadFile("visitor-files.zip", bytes, "application/zip");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Export failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className={styles.wrapper} aria-label={t("computer.label")}>
      <nav className={styles.drives} aria-label={t("computer.drives")}>
        <Button
          size="sm"
          active={drive === "visitor"}
          onClick={() => {
            setDrive("visitor");
            setCurrentPath(visitorHome);
            setError("");
          }}
        >
          {t("computer.visitor")}
        </Button>
        <Button
          size="sm"
          active={drive === "source"}
          onClick={() => {
            setDrive("source");
            setCurrentPath("/");
            setError("");
          }}
        >
          {t("computer.source")}
        </Button>
      </nav>
      <header className={styles.toolbar}>
        <Button
          size="sm"
          aria-label={t("computer.up")}
          disabled={path === (drive === "visitor" ? visitorHome : "/")}
          onClick={() => setCurrentPath(path.slice(0, path.lastIndexOf("/")) || "/")}
        >
          ↑
        </Button>
        <output className={styles.address} aria-label={t("computer.location")}>
          {drive === "source" ? `Portfolio source${path}` : path}
        </output>
      </header>
      {drive === "visitor" && (
        <div className={styles.actions}>
          <Button size="sm" disabled={!workspace || busy} onClick={() => void exportFiles()}>
            {t("computer.export")}
          </Button>
          <Button size="sm" disabled={!workspace || busy} onClick={() => setResetOpen(true)}>
            {t("computer.reset")}
          </Button>
        </div>
      )}
      <ScrollView className={styles.scroll}>
        <div className={styles.grid}>
          {items.map((item) => (
            <button
              type="button"
              className={styles.file}
              key={item.path}
              onDoubleClick={() => open(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  open(item);
                }
              }}
              onClick={(event) => {
                if (event.detail === 0 || matchMedia("(pointer: coarse)").matches) open(item);
              }}
              aria-label={`${item.folder ? t("computer.folder") : t("computer.file")} ${item.name}`}
            >
              <img
                src={item.folder ? "/icon/folder.ico" : "/icon/book.ico"}
                alt=""
                width={32}
                height={32}
              />
              <span>{item.name}</span>
            </button>
          ))}
          {!items.length && (
            <p className={styles.empty}>
              {workspace ? t("computer.empty") : t("computer.loading")}
            </p>
          )}
        </div>
      </ScrollView>
      {error && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}
      <footer className={styles.status}>
        {drive === "source" ? (
          t("computer.readOnly")
        ) : (
          <>
            <span>{t("computer.hint")}</span>
            <span role="status">{workspace?.notice ?? t("computer.loading")}</span>
          </>
        )}
      </footer>
      {document && workspace && (
        <TextEditor
          key={`${document.readOnly}:${document.path}`}
          document={document}
          workspace={workspace}
          onDirtyChange={setEditorDirty}
          pendingOpen={Boolean(pendingDocument)}
          onCancelOpen={() => setPendingDocument(undefined)}
          onConfirmOpen={() => {
            setDocument(pendingDocument);
            setPendingDocument(undefined);
            setEditorDirty(false);
          }}
          onClose={() => {
            setDocument(undefined);
            setEditorDirty(false);
          }}
        />
      )}
      <dialog
        ref={resetRef}
        className={styles.dialog}
        aria-labelledby="reset-files-title"
        onCancel={() => setResetOpen(false)}
        onClose={() => setResetOpen(false)}
      >
        <header id="reset-files-title">{t("computer.reset")}</header>
        <p>{t("computer.resetDescription")}</p>
        <div className={styles.actions}>
          <Button
            disabled={busy || editorDirty}
            onClick={() => {
              setBusy(true);
              void workspace
                ?.reset()
                .then(() => {
                  setCurrentPath(visitorHome);
                  setResetOpen(false);
                  setDocument(undefined);
                })
                .catch((err: Error) => {
                  setError(err.message);
                  setResetOpen(false);
                })
                .finally(() => setBusy(false));
            }}
          >
            {t("computer.confirmReset")}
          </Button>
          <Button disabled={busy} onClick={() => setResetOpen(false)}>
            {t("computer.cancel")}
          </Button>
        </div>
      </dialog>
    </section>
  );
}
