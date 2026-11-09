import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { readFileSync } from "node:fs";
import path from "node:path";
import { publicFilesPlugin } from "./plugins/publicFilesPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  worker: { format: "es" },
  plugins: [
    {
      name: "released-zinn-notices",
      generateBundle() {
        for (const [fileName, sourcePath] of [
          ["zinn/THIRD_PARTY_NOTICES.md", "proofs/zinn-release/THIRD_PARTY_NOTICES.md"],
          ["zinn/baseline.json", "proofs/zinn-release/baseline.json"],
          ["zinn/provenance.json", "proofs/zinn-release/generated/provenance.json"],
        ])
          this.emitFile({ type: "asset", fileName, source: readFileSync(sourcePath, "utf8") });
      },
    },
    publicFilesPlugin({
      publicDir: path.resolve(__dirname, "public"),
      srcDir: path.resolve(__dirname, "src"),
      rootDir: __dirname,
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", { target: "18", compilationMode: "annotation" }]],
      },
    }),
    svgr({ include: "**/*.svg?react" }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
    },
  },
});
