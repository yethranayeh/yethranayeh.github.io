import { unsupported } from "./host.js";
export const execFileSync = () => unsupported("native executables, including git identity lookup");
export const spawnSync = () => unsupported("shell hooks");
