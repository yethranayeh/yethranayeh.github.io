import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
export default defineConfig({
  base: "./",
  root: fileURLToPath(new URL("../../proofs/zinn-release", import.meta.url)),
  server: {
    host: "127.0.0.1",
    port: 5190,
    strictPort: true,
    fs: { allow: [fileURLToPath(new URL("../..", import.meta.url))] },
  },
  worker: { format: "es" },
  plugins: [
    {
      name: "zinn-proof-notices",
      generateBundle() {
        for (const name of ["THIRD_PARTY_NOTICES.md", "baseline.json"]) {
          this.emitFile({
            type: "asset",
            fileName: name,
            source: readFileSync(new URL(`../../proofs/zinn-release/${name}`, import.meta.url)),
          });
        }
      },
    },
  ],
  build: {
    outDir: "../../dist/zinn-proof",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("../../proofs/zinn-release/index.html", import.meta.url)),
        commands: fileURLToPath(
          new URL("../../proofs/zinn-release/shell-commands.html", import.meta.url),
        ),
        terminalEvents: fileURLToPath(
          new URL("../../proofs/zinn-release/terminal-events.html", import.meta.url),
        ),
      },
    },
  },
});
