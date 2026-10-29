import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { useSetAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { Button } from "react95";
import { FitAddon, Ghostty, Terminal } from "ghostty-web";
import wasmUrl from "ghostty-web/ghostty-vt.wasm?url";

import { desktopApps } from "@/config/desktop";
import { addWindowAtom, removeWindowAtom } from "@/stores/window.atom";
import { commandNames, prompt, terminalText, welcome } from "./shell";
import { getShell } from "./browser-shell";
import { alignViewportRows } from "./ghostty-compat";
import { zinnRequest } from "./zinn-client";
import { TerminalMenu } from "./TerminalMenu";
import { downloadFile } from "../VisitorWorkspace/export";
import styles from "./TerminalWindow.module.scss";

const session = {
  transcript: welcome,
  history: [] as string[],
  lastLaunchId: undefined as number | undefined,
};
let ghosttySourcePromise: Promise<string> | undefined;
function loadGhostty() {
  // Reusing an instance after resize/dispose carries old VT cells into a new terminal.
  // Cache the download while giving each display its own WASM instance.
  ghosttySourcePromise ??= fetch(wasmUrl)
    .then(async (response) => {
      if (!response.ok) throw new Error("The terminal engine couldn't be loaded.");
      return URL.createObjectURL(
        new Blob([await response.arrayBuffer()], { type: "application/wasm" }),
      );
    })
    .catch((error) => {
      ghosttySourcePromise = undefined;
      throw error;
    });
  return ghosttySourcePromise.then((source) => Ghostty.load(source));
}

export function TerminalWindow({
  initialCommand,
  launchId,
  isVisible = true,
}: {
  initialCommand?: string;
  launchId?: number;
  isVisible?: boolean;
}) {
  const { t } = useTranslation("content");
  const addWindow = useSetAtom(addWindowAtom);
  const closeWindow = useSetAtom(removeWindowAtom);
  const hostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const terminalRef = useRef<Terminal>();
  const busyRef = useRef(false);
  const historyIndex = useRef(session.history.length);
  const draftRef = useRef("");
  const [input, setInput] = useState("");
  const [transcript, setTranscript] = useState(session.transcript);
  const [announcement, setAnnouncement] = useState("");
  const [busy, setBusy] = useState(false);
  const [rendererFailed, setRendererFailed] = useState(false);
  const [rendererVersion, setRendererVersion] = useState(0);
  const [transcriptOpen, setTranscriptOpen] = useState(false);

  const append = useCallback((text: string) => {
    if (!text) return;
    const safe = terminalText(text).replace(/\r\n/g, "\n");
    session.transcript = (session.transcript + safe).slice(-80_000);
    setTranscript(session.transcript);
    terminalRef.current?.write(terminalText(safe));
    terminalRef.current?.scrollToBottom();
    setAnnouncement(safe.slice(-4000));
  }, []);

  const clear = useCallback(() => {
    session.transcript = "";
    setTranscript("");
    setRendererVersion((version) => version + 1);
  }, []);

  const run = useCallback(
    async (command: string) => {
      if (busyRef.current || !command.trim()) return;
      busyRef.current = true;
      setBusy(true);
      setInput("");
      session.history.push(command);
      if (session.history.length > 100) session.history.shift();
      historyIndex.current = session.history.length;
      draftRef.current = "";
      append(`${prompt}${command}\n`);
      try {
        const shell = await getShell();
        const result = await shell.execute(command, {
          history: session.history,
          openFile: (path) => {
            const app = desktopApps.find((item) => item.id === "computer")!;
            addWindow({ ...app, contentProps: { initialPath: path, launchId: Date.now() } });
          },
          open: (name) => {
            const id = name === "my computer" ? "computer" : name;
            const app = desktopApps.find((item) => item.id === id);
            if (!app) return false;
            addWindow(app);
            return true;
          },
          zinn: zinnRequest,
          download: downloadFile,
        });
        if (result.clear) clear();
        append(result.stdout);
        append(result.stderr);
        if (result.exit) closeWindow("terminal");
      } catch (error) {
        append(`${error instanceof Error ? error.message : "The command failed."}\n`);
      } finally {
        busyRef.current = false;
        setBusy(false);
        inputRef.current?.focus({ preventScroll: true });
      }
    },
    [addWindow, append, clear, closeWindow],
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let terminal: Terminal | undefined;
    let focusTimer: ReturnType<typeof setTimeout> | undefined;
    const start = async () => {
      try {
        const ghostty = await loadGhostty();
        if (cancelled) return;
        terminal = new Terminal({
          ghostty,
          fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace',
          fontSize: 14,
          cursorBlink: false,
          disableStdin: true,
          smoothScrollDuration: 0,
          scrollback: 2000,
          theme: { background: "#141719", foreground: "#e2e5dc", selectionBackground: "#46573d" },
        });
        const fit = new FitAddon();
        terminal.loadAddon(fit);
        terminal.open(host);
        if (terminal.renderer) alignViewportRows(terminal.renderer);
        // Native input handles text editing, paste, IME and mobile keyboards.
        host.removeAttribute("contenteditable");
        host.removeAttribute("role");
        host.removeAttribute("aria-label");
        host.setAttribute("tabindex", "-1");
        host.querySelectorAll("textarea, [contenteditable]").forEach((element) => {
          element.setAttribute("tabindex", "-1");
          element.removeAttribute("contenteditable");
        });
        fit.fit();
        terminal.write("\x1b[?25l" + terminalText(session.transcript));
        terminalRef.current = terminal;
        setRendererFailed(false);
        focusTimer = setTimeout(() => {
          if (!cancelled) inputRef.current?.focus({ preventScroll: true });
        }, 0);
      } catch {
        if (!cancelled) setRendererFailed(true);
      }
    };
    void start();
    return () => {
      cancelled = true;
      clearTimeout(focusTimer);
      terminalRef.current = undefined;
      terminal?.dispose();
    };
  }, [rendererVersion]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let previousSize = `${host.clientWidth}:${host.clientHeight}`;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new ResizeObserver(() => {
      if (!host.clientWidth || !host.clientHeight) return;
      const nextSize = `${host.clientWidth}:${host.clientHeight}`;
      if (nextSize === previousSize) return;
      previousSize = nextSize;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setRendererVersion((version) => version + 1), 100);
    });
    observer.observe(host);
    return () => {
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    if (!initialCommand || (launchId !== undefined && launchId === session.lastLaunchId)) return;
    session.lastLaunchId = launchId;
    void run(initialCommand);
  }, [initialCommand, launchId, run]);

  useEffect(() => {
    if (isVisible) inputRef.current?.focus({ preventScroll: true });
  }, [isVisible]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (transcriptOpen) dialog?.showModal();
    else dialog?.close();
  }, [transcriptOpen]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void run(input);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if (event.ctrlKey && event.key.toLowerCase() === "c") {
      event.preventDefault();
      if (busyRef.current) void getShell().then((shell) => shell.cancel());
      else {
        setInput("");
        append(`${prompt}${input}^C\n`);
      }
    } else if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      if (!busyRef.current) clear();
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex.current === session.history.length) draftRef.current = input;
      historyIndex.current = Math.max(
        0,
        Math.min(session.history.length, historyIndex.current + (event.key === "ArrowUp" ? -1 : 1)),
      );
      setInput(session.history[historyIndex.current] ?? draftRef.current);
    } else if (event.key === "Tab" && input && !input.includes(" ")) {
      const matches = commandNames.filter((name) => name.startsWith(input));
      if (matches.length === 1) {
        event.preventDefault();
        setInput(matches[0] + " ");
      }
    }
  }

  async function uploadFile(file: File) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error("Choose a file smaller than 5 MB.");
      const shell = await getShell();
      const path = await shell.upload(file.name, new Uint8Array(await file.arrayBuffer()));
      append(`Uploaded ${path}\n`);
    } catch (error) {
      append(`${error instanceof Error ? error.message : "Upload failed."}\n`);
    } finally {
      busyRef.current = false;
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
      inputRef.current?.focus({ preventScroll: true });
    }
  }

  async function copyTranscript() {
    try {
      await navigator.clipboard.writeText(session.transcript);
    } catch {
      append("Open File > View transcript to select and copy the text.\n");
    }
  }

  return (
    <section className={styles.window} aria-label={t("terminal.label")} aria-busy={busy}>
      <TerminalMenu
        busy={busy}
        hasTranscript={Boolean(transcript)}
        onUpload={() => fileRef.current?.click()}
        onSave={() =>
          downloadFile(
            "terminal-session.txt",
            new TextEncoder().encode(session.transcript),
            "text/plain;charset=utf-8",
          )
        }
        onView={() => setTranscriptOpen(true)}
        onCopy={() => void copyTranscript()}
        onClear={clear}
        onClose={() => closeWindow("terminal")}
        onHelp={() => void run("help")}
      />
      <input
        ref={fileRef}
        className={styles.fileInput}
        type="file"
        aria-label={t("terminal.uploadFile")}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void uploadFile(file);
        }}
      />
      <div className={styles.screen}>
        <div
          className={styles.output}
          ref={hostRef}
          aria-hidden="true"
          onClick={() => inputRef.current?.focus()}
          hidden={rendererFailed}
        />
        {rendererFailed && <pre className={styles.error}>{transcript}</pre>}
        <form className={styles.command} onSubmit={onSubmit}>
          <label htmlFor="terminal-command">{prompt.trimEnd()}</label>
          <input
            id="terminal-command"
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder={busy ? t("terminal.working") : ""}
            maxLength={8000}
            readOnly={busy}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label={t("terminal.command")}
            aria-describedby="terminal-instructions"
          />
        </form>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.transcriptDialog}
        aria-labelledby="terminal-transcript-title"
        onClose={() => setTranscriptOpen(false)}
      >
        <header>
          <strong id="terminal-transcript-title">{t("terminal.transcript")}</strong>
          <Button size="sm" onClick={() => setTranscriptOpen(false)}>
            {t("terminal.close")}
          </Button>
        </header>
        <pre tabIndex={0}>{transcript}</pre>
      </dialog>
      <span id="terminal-instructions" className={styles.announcement}>
        {t("terminal.hint")}
      </span>
      <div className={styles.announcement} role="log" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </section>
  );
}
