import type { AppWindow } from "@/stores/window.atom";

import { desktopApps, createAppWindow, helpWindow } from "@/config/windowRegistry";

const COOLDOWN = {
  firstVisit: 120_000,
  windowSpecific: 60_000,
  idle: 90_000,
  help: 120_000,
} as const;

export type Tip = {
  id: string;
  context: (openWindowIds: string[]) => boolean;
  i18nKey: string;
  cooldownMs: number;
  actionWindow?: AppWindow;
  actionLabelI18nKey?: string;
};

export const tips: Tip[] = [
  {
    id: "first-visit",
    context: (ids) => ids.length === 0,
    i18nKey: "clippy.tips.firstVisit",
    cooldownMs: COOLDOWN.firstVisit,
  },
  {
    id: "no-windows",
    context: (ids) => ids.length === 0,
    i18nKey: "clippy.tips.noWindows",
    cooldownMs: COOLDOWN.windowSpecific,
    actionWindow: desktopApps.find((a) => a.id === "resume"),
    actionLabelI18nKey: "clippy.actions.openResume",
  },
  {
    id: "resume-open",
    context: (ids) => ids.includes("resume"),
    i18nKey: "clippy.tips.resumeOpen",
    cooldownMs: COOLDOWN.windowSpecific,
  },
  {
    id: "projects-open",
    context: (ids) => ids.includes("projects"),
    i18nKey: "clippy.tips.projectsOpen",
    cooldownMs: COOLDOWN.windowSpecific,
  },
  {
    id: "apps-open",
    context: (ids) => ids.includes("apps"),
    i18nKey: "clippy.tips.appsOpen",
    cooldownMs: COOLDOWN.windowSpecific,
    actionWindow: createAppWindow("VigenereCipher"),
    actionLabelI18nKey: "clippy.actions.openCipher",
  },
  {
    id: "idle",
    context: () => true,
    i18nKey: "clippy.tips.idle",
    cooldownMs: COOLDOWN.idle,
    actionWindow: helpWindow,
    actionLabelI18nKey: "clippy.actions.showHelp",
  },
  {
    id: "help-open",
    context: (ids) => ids.includes("help"),
    i18nKey: "clippy.tips.helpOpen",
    cooldownMs: COOLDOWN.help,
  },
];
