// Only browser extensions are parsed here. Ordinary argv belongs to the released CLI.
export function parseExtension(args: string[]) {
  const name = args[0];
  if (name !== "reset" && name !== "export" && name !== "import") return undefined;
  const usage =
    name === "reset"
      ? "zinn reset --yes"
      : name === "export"
        ? "zinn export [file]"
        : "zinn import <file>";
  const values: string[] = [];
  let literal = false;
  let yes = false;
  for (const arg of args.slice(1)) {
    if (!literal && (arg === "-h" || arg === "--help"))
      return { name, help: `Usage: ${usage}\nBrowser extension for this playground format.\n` };
    if (!literal && arg === "--") literal = true;
    else if (!literal && arg === "--yes" && name === "reset" && !yes) yes = true;
    else if (!literal && arg.startsWith("-"))
      throw new Error(`Usage: ${usage}. Unknown or repeated option: ${arg}`);
    else values.push(arg);
  }
  if (
    (name === "reset" && (values.length || !yes)) ||
    (name === "export" && values.length > 1) ||
    (name === "import" && values.length !== 1)
  )
    throw new Error(
      `Usage: ${usage}${name === "reset" ? ". To replace your board, type zinn reset --yes" : ""}`,
    );
  return { name, file: values[0] };
}
