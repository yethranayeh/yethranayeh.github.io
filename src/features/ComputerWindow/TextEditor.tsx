import { useEffect, useRef, useState } from "react";
import { Button } from "react95";
import { useTranslation } from "react-i18next";
import { sameBytes, textContent, type VisitorWorkspace } from "../VisitorWorkspace/workspace";
import { downloadFile } from "../VisitorWorkspace/export";
import styles from "./ComputerWindow.module.scss";

export function TextEditor({
  document,
  workspace,
  onClose,
  onDirtyChange,
  pendingOpen,
  onCancelOpen,
  onConfirmOpen,
}: {
  document: { path: string; text: string; bytes: Uint8Array; readOnly: boolean };
  workspace: VisitorWorkspace;
  onClose: () => void;
  onDirtyChange: (dirty: boolean) => void;
  pendingOpen: boolean;
  onCancelOpen: () => void;
  onConfirmOpen: () => void;
}) {
  const { t } = useTranslation("content");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState(document.text);
  const [base, setBase] = useState({ text: document.text, bytes: document.bytes });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [discard, setDiscard] = useState(false);
  const dirty = draft !== base.text;

  useEffect(() => {
    onDirtyChange(dirty);
  }, [dirty, onDirtyChange]);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  useEffect(
    () =>
      workspace.subscribe(() => {
        if (dirty || document.readOnly) return;
        try {
          const bytes = workspace.read(document.path);
          const text = textContent(bytes);
          setBase({ text, bytes });
          setDraft(text);
        } catch {
          setError(t("computer.fileGone"));
        }
      }),
    [workspace, document.path, document.readOnly, dirty, t],
  );
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  async function save() {
    setBusy(true);
    setError("");
    try {
      await workspace.saveText(document.path, draft, base.bytes);
      setBase({ text: draft, bytes: new TextEncoder().encode(draft) });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't save file.");
    } finally {
      setBusy(false);
    }
  }
  function reload() {
    try {
      const bytes = workspace.read(document.path);
      const text = textContent(bytes);
      setBase({ text, bytes });
      setDraft(text);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't reload file.");
    }
  }
  let changed = false;
  if (!document.readOnly) {
    try {
      changed = !sameBytes(workspace.read(document.path), base.bytes);
    } catch {
      changed = true;
    }
  }
  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${styles.editor}`}
      aria-label={`${t("computer.editor")} ${document.path}`}
      onCancel={(event) => {
        event.preventDefault();
        if (dirty) setDiscard(true);
        else onClose();
      }}
    >
      <header>
        {document.path.split("/").pop()} {dirty ? "*" : ""} - {t("computer.editor")}
        {document.readOnly ? ` (${t("computer.readOnlyShort")})` : ""}
      </header>
      <div className={styles.actions}>
        {!document.readOnly && (
          <Button size="sm" disabled={!dirty || busy} onClick={() => void save()}>
            {t("computer.save")}
          </Button>
        )}
        <Button
          size="sm"
          disabled={busy}
          onClick={() =>
            downloadFile(
              document.path.split("/").pop()!,
              new TextEncoder().encode(draft),
              "text/plain;charset=utf-8",
            )
          }
        >
          {t("computer.download")}
        </Button>
        {!document.readOnly && (
          <Button size="sm" disabled={busy} onClick={() => (dirty ? setDiscard(true) : reload())}>
            {t("computer.reload")}
          </Button>
        )}
        <Button size="sm" disabled={busy} onClick={() => (dirty ? setDiscard(true) : onClose())}>
          {t("terminal.close")}
        </Button>
      </div>
      <textarea
        aria-label={t("computer.text")}
        value={draft}
        readOnly={document.readOnly || busy}
        spellCheck={false}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if ((event.ctrlKey || event.metaKey) && event.key === "s") {
            event.preventDefault();
            if (!document.readOnly && dirty && !busy) void save();
          }
        }}
      />
      {(error || changed) && (
        <p role="alert" className={styles.error}>
          {error || t("computer.changed")}
        </p>
      )}
      <footer className={styles.status} role="status">
        {document.readOnly
          ? t("computer.readOnly")
          : dirty
            ? t("computer.unsaved")
            : t("computer.saved")}
      </footer>
      {(discard || pendingOpen) && (
        <div role="alertdialog" aria-label={t("computer.unsaved")} className={styles.discard}>
          <p>{t("computer.discardDescription")}</p>
          <Button
            size="sm"
            onClick={() => {
              setDiscard(false);
              if (pendingOpen) onConfirmOpen();
              else onClose();
            }}
          >
            {pendingOpen ? t("computer.discardOpen") : t("computer.discardClose")}
          </Button>{" "}
          {!pendingOpen && (
            <Button
              size="sm"
              onClick={() => {
                setDiscard(false);
                reload();
              }}
            >
              {t("computer.discardReload")}
            </Button>
          )}{" "}
          <Button
            size="sm"
            onClick={() => {
              setDiscard(false);
              onCancelOpen();
            }}
          >
            {t("computer.cancel")}
          </Button>
        </div>
      )}
    </dialog>
  );
}
