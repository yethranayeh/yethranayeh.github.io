import { commandNames } from "./shell";

type Token = {
  start: number;
  end: number;
  prefix: string;
  quote: string;
  closedQuote: boolean;
  command: boolean;
  unsafe: boolean;
};

// This only identifies literal editing tokens. It never expands or evaluates shell syntax.
function currentToken(line: string, cursor: number): Token | undefined {
  let literalQuote = "";
  for (let index = 0; index < line.length; index++) {
    const character = line[index];
    if (character === "\\" && literalQuote !== "'") {
      index++;
      continue;
    }
    if ((character === "'" || character === '"') && (!literalQuote || literalQuote === character))
      literalQuote = literalQuote ? "" : character;
    else if (
      literalQuote !== "'" &&
      (character === "`" || (character === "$" && line[index + 1] === "("))
    )
      return;
  }
  let command = true;
  let commandName = "";
  let i = 0;
  while (i <= line.length) {
    while (/\s/.test(line[i] ?? "") && i < line.length) i++;
    if (/[|;&()<>]/.test(line[i] ?? "") && i < line.length) {
      command = !/[<>]/.test(line[i]);
      commandName = "";
      i++;
      continue;
    }
    const start = i;
    let value = "",
      prefix = "",
      quote = "",
      unsafe = false;
    const initialQuote = /['"]/.test(line[i] ?? "") ? line[i] : "";
    while (i < line.length) {
      const ch = line[i];
      if (!quote && /[\s|;&()<>]/.test(ch)) break;
      if (i === cursor) prefix = value;
      if (ch === "\\" && quote !== "'" && i + 1 < line.length) {
        if (quote === '"' && !/[\\"$`\n]/.test(line[i + 1])) value += ch;
        else value += line[++i];
      } else if ((ch === "'" || ch === '"') && (!quote || quote === ch)) {
        quote = quote ? "" : ch;
      } else {
        if (quote !== "'" && /[$`]/.test(ch)) unsafe = true;
        value += ch;
      }
      i++;
    }
    if (cursor >= start && cursor <= i) {
      if (cursor === i) prefix = value;
      return {
        start,
        end: i,
        prefix,
        quote: initialQuote,
        closedQuote: Boolean(initialQuote && !quote),
        command,
        unsafe: unsafe || (!command && !commandName),
      };
    }
    if (command) commandName = value;
    command = false;
    if (i >= line.length) return;
  }
}

function encode(value: string, quote: string, finished: boolean) {
  if (quote === "'") return "'" + value.replace(/'/g, "'\\''") + (finished ? "'" : "");
  if (quote === '"') return '"' + value.replace(/[\\"$`]/g, "\\$&") + (finished ? '"' : "");
  return value.replace(/[^\p{L}\p{N}_./~-]/gu, "\\$&");
}

export type CompletionDirectory = (path: string) => Promise<{ name: string; directory: boolean }[]>;

export async function completeLine(
  line: string,
  cursor: number,
  readDirectory: CompletionDirectory,
) {
  const token = currentToken(line, cursor);
  if (!token || token.unsafe) return { matches: [] as string[] };
  let matches: string[];
  const pathMode = !token.command || token.prefix.includes("/") || token.prefix.startsWith("~");
  if (!pathMode) matches = commandNames.filter((name) => name.startsWith(token.prefix)).sort();
  else {
    const slash = token.prefix.lastIndexOf("/");
    const parent = slash < 0 ? "" : token.prefix.slice(0, slash + 1);
    const partial = token.prefix.slice(slash + 1);
    const command = line.slice(0, token.start).trim().split(/\s+/).at(-1);
    try {
      matches = (await readDirectory(parent || "."))
        .filter(
          (entry) =>
            entry.name.startsWith(partial) &&
            (partial.startsWith(".") || !entry.name.startsWith(".")),
        )
        .filter((entry) => command !== "cd" || entry.directory)
        // oxlint-disable-next-line no-control-regex -- Keep filenames on literal display lines.
        .filter((entry) => !/[\u0000-\u001f\u007f-\u009f]/.test(entry.name))
        .map(
          (entry) =>
            parent +
            (parent === "" && entry.name.startsWith("-") ? "./" : "") +
            entry.name +
            (entry.directory ? "/" : ""),
        )
        .sort();
    } catch {
      matches = [];
    }
  }
  if (!matches.length) return { matches };
  let common = matches[0];
  for (const match of matches) {
    while (!match.startsWith(common)) common = [...common].slice(0, -1).join("");
  }
  if (matches.length > 1 && common.length <= token.prefix.length) return { matches };
  const finished = matches.length === 1 && !common.endsWith("/");
  const replacement =
    encode(common, token.quote, finished || token.closedQuote || token.end < line.length) +
    (finished && !/^\s/.test(line.slice(token.end)) ? " " : "");
  return {
    matches,
    text: line.slice(0, token.start) + replacement + line.slice(token.end),
    cursor: token.start + replacement.length,
  };
}
