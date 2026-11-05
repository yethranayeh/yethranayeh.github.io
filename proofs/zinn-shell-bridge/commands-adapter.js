/** Explicit presentation policy. FORCE_COLOR has the pinned CLI's precedence. */
export function commandContext(env = {}, columns = 80) {
  if (!Number.isInteger(columns) || columns <= 0)
    throw new Error("Supply a positive integer column count");
  const force = env.FORCE_COLOR ?? "";
  const color = force.length > 0 ? force !== "0" : false;
  // The released renderer gates width on isTTY. This is caller-selected layout,
  // with color always explicit, and does not assert destination/TTY detection.
  return { tty: true, columns, color };
}

/** Register under BashOptions.commands. Keep the runtime's own invocation queue. */
export function zinnCommand(invoke, { columns = 80 } = {}) {
  const encoder = new TextEncoder();
  return async (ctx) => {
    const result = await invoke(ctx.argv, commandContext(ctx.env, columns));
    await ctx.stdout.write(encoder.encode(result.stdout));
    await ctx.stderr.write(encoder.encode(result.stderr));
    return result.status;
  };
}
