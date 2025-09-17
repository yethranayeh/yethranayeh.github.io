import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		"process.env": {}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	plugins: [react(), svgr({ include: "**/*.svg?react" })],
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: "globalThis"
			}
		}
	}
});
