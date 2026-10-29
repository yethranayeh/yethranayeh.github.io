import type { Activity } from "./types.js";

export type HookRecord = Activity & { task_key: string | null };

/** Browser clients do not launch shell hooks. */
export function isRecordingChange() {
  return false;
}

export function recordChange(_record: HookRecord) {}

export function withChangeHooks<T>(commit: () => T): T {
  return commit();
}
