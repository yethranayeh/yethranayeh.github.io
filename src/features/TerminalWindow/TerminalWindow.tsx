import { useCallback, useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { Button } from "react95";
import { FitAddon, Ghostty, Terminal } from "ghostty-web";
import wasmUrl from "ghostty-web/ghostty-vt.wasm?url";

import { desktopApps } from "@/config/desktop";
import { addWindowAtom, removeWindowAtom } from "@/stores/window.atom";
import { prompt, plainTerminalText, styledTerminalText, welcome } from "./shell";
import { inputText, LineEditor } from "./line-editor";
import { completeLine } from "./completion";
import { PromptDisplay } from "./prompt-display";
import { getShell } from "./browser-shell";
import { alignViewportRows } from "./ghostty-compat";
import { zinnRequest } from "./zinn-client";
import { TerminalMenu } from "./TerminalMenu";
import { downloadFile } from "../VisitorWorkspace/export";
import styles from "./TerminalWindow.module.scss";

const session = {
  transcript: welcome,
  display: welcome,
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

function mirrorInput(textarea: HTMLTextAreaElement, editor: LineEditor) {
  textarea.value = editor.text;
  textarea.setSelectionRange(
    Math.min(editor.anchor, editor.cursor),
    Math.max(editor.anchor, editor.cursor),
    editor.cursor < editor.anchor ? "backward" : "forward",
  );
}

function positionInput(terminal: Terminal) {
  const cursor = terminal.wasmTerm!.getCursor();
  const metrics = terminal.renderer!.getMetrics();
  const textarea = terminal.textarea!;
  textarea.style.left = `${cursor.x * metrics.width}px`;
  textarea.style.top = `${cursor.y * metrics.height}px`;
  textarea.style.height = `${metrics.height}px`;
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
  const sectionRef = useRef<HTMLElement>(null);
  const fallbackRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const terminalRef = useRef<Terminal>();
  const busyRef = useRef(false);
  const [editor] = useState(() => new LineEditor(session.history));
  const displayRef = useRef<PromptDisplay>();
  const composingRef = useRef(false);
  const focusedRef = useRef(true);
  const viewportRef = useRef(0);
  const [input, setInput] = useState("");
  const [transcript, setTranscript] = useState(session.transcript);
  const [announcement, setAnnouncement] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [rendererFailed, setRendererFailed] = useState(false);
  const [rendererVersion, setRendererVersion] = useState(0);
  const [transcriptOpen, setTranscriptOpen] = useState(false);

  const focusEditor = useCallback(() => {
    (terminalRef.current?.textarea ?? fallbackRef.current)?.focus({ preventScroll: true });
  }, []);

  const redraw = useCallback(() => {
    displayRef.current?.render(session.display, editor.text, editor.cursor, !busyRef.current);
    const textarea = terminalRef.current?.textarea;
    if (textarea && !composingRef.current) {
      mirrorInput(textarea, editor);
    }
    if (terminalRef.current) positionInput(terminalRef.current);
    setInput(editor.text);
  }, [editor]);

  const append = useCallback(
    (text: string) => {
      if (!text) return;
      const safe = plainTerminalText(text).replace(/\r\n/g, "\n");
      session.transcript = (session.transcript + safe).slice(-80_000);
      session.display = (session.display + styledTerminalText(text).replace(/\r\n/g, "\n")).slice(
        -100_000,
      );
      setTranscript(session.transcript);
      redraw();
      setAnnouncement(safe.slice(-4000));
    },
    [redraw],
  );

  const clear = useCallback(() => {
    session.transcript = "";
    session.display = "";
    setTranscript("");
    setAnnouncement("");
    // Repaint even an already empty screen, without replacing the input owner.
    displayRef.current = terminalRef.current ? new PromptDisplay(terminalRef.current) : undefined;
    terminalRef.current?.write("\x1b[3J\x1b[2J\x1b[H");
    redraw();
    displayRef.current?.focus(focusedRef.current);
  }, [redraw]);

  const run = useCallback(
    async (command: string) => {
      if (busyRef.current) return;
      busyRef.current = true;
      setBusy(true);
      editor.reset(command);
      append(`${prompt}${command}\n`);
      try {
        if (!command.trim()) return;
        const shell = await getShell();
        const result = await shell.execute(command, {
          history: session.history,
          columns: () => terminalRef.current?.cols ?? 80,
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
        setNotice(result.notices.join(" "));
        if (result.clear) clear();
        append(result.stdout);
        append(result.stderr);
        if (result.exit) closeWindow("terminal");
      } catch (error) {
        append(`${error instanceof Error ? error.message : "The command failed."}\n`);
      } finally {
        busyRef.current = false;
        setBusy(false);
        if (session.transcript && !session.transcript.endsWith("\n")) append("\n");
        redraw();
        if (focusedRef.current) focusEditor();
      }
    },
    [addWindow, append, clear, closeWindow, editor, redraw, focusEditor],
  );

  const receive = useCallback(
    (data: string) => {
      if (busyRef.current) {
        if (data === "\x03") void getShell().then((shell) => shell.cancel());
        return;
      }
      const action = editor.receive(data);
      if (action === "submit") void run(editor.text);
      else if (action === "cancel") {
        const cancelled = editor.text;
        editor.reset();
        append(`${prompt}${cancelled}^C\n`);
      } else if (action === "clear") clear();
      else if (action === "complete") {
        const revision = editor.revision;
        void getShell()
          .then(async (shell) => {
            const result = await completeLine(editor.text, editor.cursor, (path) =>
              shell.completionDirectory(path),
            );
            // Typing, history, cancellation or another command invalidates a pending completion.
            if (editor.revision !== revision || busyRef.current) return;
            if (result.text !== undefined) editor.set(result.text, result.cursor);
            else if (result.matches.length)
              append(`${prompt}${editor.text}\n${result.matches.join("  ")}\n`);
            setAnnouncement(
              result.matches.length ? result.matches.join(", ") : "No completions for this token.",
            );
            redraw();
          })
          .catch(() => setAnnouncement("Completion is unavailable. You can still type a command."));
      }
      redraw();
    },
    [append, clear, editor, redraw, run],
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let terminal: Terminal | undefined;
    const cleanups: (() => void)[] = [];
    const start = async () => {
      try {
        const ghostty = await loadGhostty();
        if (cancelled) return;
        const previousFocus = document.activeElement as HTMLElement | null;
        const restoreFocus = focusedRef.current;
        terminal = new Terminal({
          ghostty,
          fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace',
          fontSize: 14,
          cursorBlink: false,
          cursorStyle: "bar",
          smoothScrollDuration: 0,
          scrollback: 2000,
          theme: {
            background: "#141719",
            foreground: "#e2e5dc",
            cursor: "#b4d598",
            selectionBackground: "#46573d",
          },
        });
        const fit = new FitAddon();
        terminal.loadAddon(fit);
        terminal.open(host);
        if (terminal.renderer) alignViewportRows(terminal.renderer);
        // Ghostty's own textarea owns native input. The host must not add a DOM caret.
        host.removeAttribute("contenteditable");
        host.removeAttribute("role");
        host.removeAttribute("aria-label");
        host.removeAttribute("aria-multiline");
        host.setAttribute("tabindex", "-1");
        const textarea = terminal.textarea!;
        const forwardFocus = () => {
          // Terminal.open schedules a second host.focus(). Preserve menu/dialog focus
          // when rebuilding a display that did not own keyboard input.
          (restoreFocus ? textarea : previousFocus)?.focus({ preventScroll: true });
        };
        host.addEventListener("focus", forwardFocus);
        cleanups.push(() => host.removeEventListener("focus", forwardFocus));
        textarea.setAttribute("aria-label", t("terminal.command"));
        textarea.setAttribute("aria-describedby", "terminal-instructions");
        textarea.setAttribute("autocomplete", "off");
        textarea.setAttribute("enterkeyhint", "send");
        textarea.style.fontSize = "16px";
        textarea.style.caretColor = "transparent";
        fit.fit();
        terminalRef.current = terminal;
        displayRef.current = new PromptDisplay(terminal);
        // Bracketed paste keeps newlines and control-looking text in the draft until Enter.
        terminal.write("\x1b[?2004h");
        terminal.onData(receive);
        terminal.attachCustomKeyEventHandler((event) => {
          if (event.key === "Escape" || (event.key === "Tab" && event.shiftKey)) {
            event.stopPropagation();
            sectionRef.current?.querySelector<HTMLButtonElement>('[aria-haspopup="menu"]')?.focus();
            return true;
          }
          if (event.shiftKey && ["PageUp", "PageDown"].includes(event.key)) {
            terminal?.scrollPages(event.key === "PageUp" ? -1 : 1);
            return true;
          }
          if (event.shiftKey && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
            if (!busyRef.current) editor.move(event.key === "ArrowLeft" ? -1 : 1, true);
            redraw();
            return true;
          }
          return false;
        });
        const listen = (type: string, listener: EventListener, capture = false) => {
          textarea.addEventListener(type, listener, capture);
          cleanups.push(() => textarea.removeEventListener(type, listener, capture));
        };
        // The library's host beforeinput handler cancels mobile keyboard edits. Allow
        // the native textarea to edit, then mirror its value into the same line editor.
        listen("beforeinput", (event) => {
          event.stopPropagation();
          const inputEvent = event as InputEvent;
          if (
            !inputEvent.isComposing &&
            ["insertLineBreak", "insertParagraph"].includes(inputEvent.inputType)
          ) {
            event.preventDefault();
            receive("\r");
          }
        });
        let compositionRange = { start: 0, end: 0 };
        listen("compositionstart", () => {
          composingRef.current = true;
          compositionRange = {
            start: Math.min(editor.cursor, editor.anchor),
            end: Math.max(editor.cursor, editor.anchor),
          };
        });
        listen("compositionupdate", (event) => {
          if (busyRef.current) return;
          const preedit = inputText((event as CompositionEvent).data);
          displayRef.current?.render(
            session.display,
            editor.text.slice(0, compositionRange.start) +
              preedit +
              editor.text.slice(compositionRange.end),
            compositionRange.start + preedit.length,
            true,
          );
          if (terminal) positionInput(terminal);
        });
        listen("compositionend", () => {
          composingRef.current = false;
          // A cancelled composition emits no onData event to restore the draft.
          queueMicrotask(() => {
            if (!cancelled) redraw();
          });
        });
        listen("input", () => {
          if (composingRef.current) return;
          if (!busyRef.current)
            editor.set(
              textarea.value,
              textarea.selectionDirection === "backward"
                ? textarea.selectionStart
                : textarea.selectionEnd,
              textarea.selectionDirection === "backward"
                ? textarea.selectionEnd
                : textarea.selectionStart,
            );
          redraw();
        });
        listen("select", () => {
          if (composingRef.current || busyRef.current) return;
          const cursor =
            textarea.selectionDirection === "backward"
              ? textarea.selectionStart
              : textarea.selectionEnd;
          const anchor =
            textarea.selectionDirection === "backward"
              ? textarea.selectionEnd
              : textarea.selectionStart;
          if (cursor !== editor.cursor || anchor !== editor.anchor) {
            editor.set(editor.text, cursor, anchor);
            redraw();
          }
        });
        listen("focus", () => {
          focusedRef.current = true;
          displayRef.current?.focus(true);
        });
        listen("blur", () => {
          focusedRef.current = false;
          displayRef.current?.focus(false);
        });
        redraw();
        terminal.scrollLines(-viewportRef.current);
        setRendererFailed(false);
        if (restoreFocus) textarea.focus({ preventScroll: true });
        else previousFocus?.focus({ preventScroll: true });
      } catch {
        if (!cancelled) setRendererFailed(true);
      }
    };
    void start();
    return () => {
      cancelled = true;
      viewportRef.current = terminal?.getViewportY() ?? 0;
      cleanups.forEach((cleanup) => cleanup());
      terminalRef.current = undefined;
      displayRef.current = undefined;
      composingRef.current = false;
      terminal?.dispose();
    };
  }, [editor, receive, redraw, rendererVersion, t]);

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
    if (isVisible) focusEditor();
    else displayRef.current?.focus(false);
  }, [focusEditor, isVisible]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (transcriptOpen) dialog?.showModal();
    else dialog?.close();
  }, [transcriptOpen]);

  async function uploadFile(file: File) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    redraw();
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
      redraw();
      focusEditor();
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
    <section
      ref={sectionRef}
      className={styles.window}
      aria-label={t("terminal.label")}
      aria-busy={busy}
    >
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
        onClear={() => {
          clear();
          focusEditor();
        }}
        onClose={() => closeWindow("terminal")}
        onHelp={() => {
          focusEditor();
          void run("help");
        }}
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
          onClick={() => focusEditor()}
          hidden={rendererFailed}
        />
        {rendererFailed && <pre className={styles.error}>{transcript}</pre>}
        {rendererFailed && (
          <form
            className={styles.command}
            onSubmit={(event) => {
              event.preventDefault();
              void run(editor.text);
            }}
          >
            <label htmlFor="terminal-command">{prompt.trimEnd()}</label>
            <input
              id="terminal-command"
              ref={fallbackRef}
              value={input}
              onChange={(event) => {
                editor.set(event.target.value, event.target.selectionStart ?? undefined);
                redraw();
              }}
              readOnly={busy}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label={t("terminal.command")}
              aria-describedby="terminal-instructions"
            />
          </form>
        )}
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
      <div role="status" aria-live="polite">
        {notice}
      </div>
      <span id="terminal-instructions" className={styles.hint}>
        {t("terminal.hint")}
      </span>
      <div className={styles.announcement} role="log" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </section>
  );
}
