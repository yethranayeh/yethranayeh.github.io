import { atom } from "jotai";

export const isScreensaverActiveAtom = atom(false);

export const screensaverTypeAtom = atom<"idle" | "manual">("idle");
