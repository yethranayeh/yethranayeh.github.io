const segments = new Intl.Segmenter(undefined, { granularity: "grapheme" });

export function inputText(text: string) {
  return (
    text
      .replace(/\r\n?/g, "\n")
      // oxlint-disable-next-line no-control-regex -- Input must not inject terminal controls.
      .replace(/[\u0000-\u0008\u000b-\u001f\u007f-\u009f]/g, "")
      .replace(/\t/g, "    ")
      .slice(0, 8000)
  );
}

export class LineEditor {
  text = "";
  cursor = 0;
  anchor = 0;
  revision = 0;
  private historyIndex: number;
  private draft = { text: "", cursor: 0, anchor: 0 };

  constructor(readonly history: string[]) {
    this.historyIndex = history.length;
  }

  set(text: string, cursor = text.length, anchor = cursor) {
    this.text = inputText(text);
    this.cursor = Math.min(cursor, this.text.length);
    this.anchor = Math.min(anchor, this.text.length);
    this.revision++;
  }

  insert(text: string) {
    const start = Math.min(this.cursor, this.anchor);
    const end = Math.max(this.cursor, this.anchor);
    const safe = inputText(text).slice(0, 8000 - (this.text.length - (end - start)));
    this.set(this.text.slice(0, start) + safe + this.text.slice(end), start + safe.length);
  }

  move(direction: -1 | 1, select = false) {
    const boundaries = [...segments.segment(this.text)].map((part) => part.index);
    boundaries.push(this.text.length);
    const next =
      direction < 0
        ? (boundaries.filter((index) => index < this.cursor).at(-1) ?? 0)
        : (boundaries.find((index) => index > this.cursor) ?? this.text.length);
    const edge =
      direction < 0 ? Math.min(this.cursor, this.anchor) : Math.max(this.cursor, this.anchor);
    const cursor = !select && this.cursor !== this.anchor ? edge : next;
    this.set(this.text, cursor, select ? this.anchor : cursor);
  }

  delete(direction: -1 | 1) {
    if (this.cursor === this.anchor) this.move(direction, true);
    this.insert("");
  }

  recall(direction: -1 | 1) {
    if (this.historyIndex === this.history.length)
      this.draft = { text: this.text, cursor: this.cursor, anchor: this.anchor };
    this.historyIndex = Math.max(0, Math.min(this.history.length, this.historyIndex + direction));
    if (this.historyIndex === this.history.length)
      this.set(this.draft.text, this.draft.cursor, this.draft.anchor);
    else this.set(this.history[this.historyIndex]);
  }

  reset(command?: string) {
    if (command?.trim()) {
      this.history.push(command);
      if (this.history.length > 100) this.history.shift();
    }
    this.historyIndex = this.history.length;
    this.draft = { text: "", cursor: 0, anchor: 0 };
    this.set("");
  }

  receive(data: string): "submit" | "cancel" | "clear" | "complete" | undefined {
    if (data.startsWith("\x1b[200~") && data.endsWith("\x1b[201~")) {
      this.insert(data.slice(6, -6));
      return;
    }
    switch (data) {
      case "\r":
      case "\n":
        return "submit";
      case "\x03":
        return "cancel";
      case "\x0c":
        return "clear";
      case "\t":
        return "complete";
      case "\x1b[A":
      case "\x1bOA":
        this.recall(-1);
        break;
      case "\x1b[B":
      case "\x1bOB":
        this.recall(1);
        break;
      case "\x1b[D":
      case "\x1bOD":
        this.move(-1);
        break;
      case "\x1b[C":
      case "\x1bOC":
        this.move(1);
        break;
      case "\x01":
      case "\x1b[H":
      case "\x1b[1~":
        this.set(this.text, 0);
        break;
      case "\x05":
      case "\x1b[F":
      case "\x1b[4~":
        this.set(this.text);
        break;
      case "\x7f":
      case "\b":
        this.delete(-1);
        break;
      case "\x1b[3~":
      case "\x04":
        this.delete(1);
        break;
      case "\x15":
        this.set(this.text.slice(this.cursor), 0);
        break;
      case "\x0b":
        this.set(this.text.slice(0, this.cursor));
        break;
      case "\x1b":
        break;
      default:
        if (!data.startsWith("\x1b")) this.insert(data);
    }
  }
}
