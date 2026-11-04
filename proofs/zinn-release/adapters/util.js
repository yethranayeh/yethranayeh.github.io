// Node's maintained parseArgs backport. No portfolio command parser lives here.
export { parseArgs } from "@pkgjs/parseargs";
const codes = { bold: [1, 22], dim: [2, 22], gray: [90, 39], green: [32, 39] };
export function styleText(format, text) {
  const formats = Array.isArray(format) ? format : [format];
  return formats.reduce((value, style) => {
    const code = codes[style];
    if (!code) throw new Error(`Unsupported terminal style: ${style}`);
    return `\x1b[${code[0]}m${value.replaceAll(`\x1b[${code[1]}m`, `\x1b[${code[0]}m`)}\x1b[${code[1]}m`;
  }, text);
}
