// Test-only preload: give the unchanged released CLI the same terminal geometry as the browser.
if (process.env.PORT_PROOF_COLUMNS) {
  Object.defineProperty(process.stdout, "isTTY", { value: true });
  Object.defineProperty(process.stdout, "columns", {
    value: Number(process.env.PORT_PROOF_COLUMNS),
  });
}
