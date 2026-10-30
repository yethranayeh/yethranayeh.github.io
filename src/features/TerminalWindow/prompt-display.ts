import type { Terminal } from "ghostty-web";
import { prompt, terminalText } from "./shell";

// All VT controls in this module are owned by the editor. User text is always sanitized.
export class PromptDisplay {
  private transcript = "";
  private origin: number | undefined;
  private focused = false;
  private editing = true;

  constructor(private readonly terminal: Terminal) {}

  private position() {
    const cursor = this.terminal.wasmTerm!.getCursor();
    return { x: cursor.x, row: this.terminal.getScrollbackLength() + cursor.y };
  }

  private replay(transcript: string) {
    this.terminal.write("\x1b[3J\x1b[2J\x1b[H" + terminalText(transcript));
    this.origin = undefined;
  }

  render(transcript: string, text: string, cursor: number, editing: boolean) {
    const terminal = this.terminal;
    const scrollback = terminal.getScrollbackLength();
    let atPromptStart = false;
    if (
      (this.origin !== undefined && this.origin < scrollback) ||
      !transcript.startsWith(this.transcript)
    ) {
      this.replay(transcript);
    } else {
      if (this.origin !== undefined) {
        terminal.write(`\x1b[${this.origin - scrollback + 1};1H\x1b[J`);
        atPromptStart = transcript === this.transcript;
        this.origin = undefined;
      }
      const added = transcript.slice(this.transcript.length);
      if (added) terminal.write(terminalText(added));
    }
    this.transcript = transcript;
    this.editing = editing;
    if (editing) {
      // Output without a trailing newline still needs a separate prompt line.
      if (!atPromptStart && transcript && !transcript.endsWith("\n")) terminal.write("\r\n");
      this.origin = this.position().row;
      terminal.write(terminalText(prompt + text.slice(0, cursor)) + " \b");
      let caret = this.position();
      const suffix = text.slice(cursor);
      terminal.write(terminalText(suffix) + " \b");
      if (caret.row < terminal.getScrollbackLength()) {
        // Very long drafts must keep the caret in view even when their tail fills a screen.
        this.replay(transcript);
        if (transcript && !transcript.endsWith("\n")) terminal.write("\r\n");
        this.origin = this.position().row;
        terminal.write(terminalText(prompt + text.slice(0, cursor)) + " \b");
        caret = this.position();
        for (const part of new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(
          suffix,
        )) {
          if (this.position().row - caret.row >= terminal.rows - 2) break;
          terminal.write(terminalText(part.segment));
        }
      }
      terminal.write(`\x1b[${caret.row - terminal.getScrollbackLength() + 1};${caret.x + 1}H`);
    }
    terminal.scrollToBottom();
    this.focus(this.focused);
  }

  focus(focused: boolean) {
    this.focused = focused;
    const terminal = this.terminal;
    // Ghostty 0.4 changes DEC visibility but leaves the old cursor pixels when its
    // position is unchanged and blinking is off. A full paint clears that stale block.
    terminal.wasmTerm!.write(focused && this.editing ? "\x1b[?25h" : "\x1b[?25l");
    terminal.renderer!.render(terminal.wasmTerm!, true, terminal.getViewportY(), terminal, 0);
  }
}
