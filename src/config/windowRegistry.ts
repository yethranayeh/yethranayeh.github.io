import type { AppWindow } from "@/stores/window.atom";

import { desktopApps, malwareIcon } from "./desktop";
import { HelpDialogContent, ShutdownDialogContent, VigenereCipherContent } from "./windowContent";
export const helpWindow: AppWindow = {
  id: "help",
  titleI18nKey: "menu:nav.help",
  content: HelpDialogContent,
  minimized: false,
  iconSrc: "/icon/book.ico",
};

export const shutdownWindow: AppWindow = {
  id: "shutdown-dialog",
  titleI18nKey: "content:shutdown.title",
  content: ShutdownDialogContent,
  minimized: false,
  iconSrc: "/icon/shut_down_with_computer.ico",
  WindowProps: {
    slotProps: {
      draggable: {
        defaultPosition: {
          x: (document.body.clientWidth - 340) / 2,
          y: (document.body.clientHeight - 230) / 2,
        },
      },
    },
  },
};

const Apps = {
  VigenereCipher: {
    name: "vigenère cipher",
    titleI18nKey: "vigenere-cipher.title",
    iconSrc: "/icon/program.ico",
    Element: VigenereCipherContent,
  },
} as const;

export type AppKey = keyof typeof Apps;

export function createAppWindow(appKey: AppKey): AppWindow | undefined {
  const app = Apps[appKey];
  if (!app) return undefined;

  return {
    id: `app:${app.name}`,
    titleI18nKey: app.titleI18nKey,
    iconSrc: app.iconSrc,
    minimized: false,
    content: app.Element,
  };
}

export const appKeys = Object.keys(Apps) as Array<AppKey>;

const allWindows: AppWindow[] = [...desktopApps, helpWindow, shutdownWindow];

export function getWindowById(id: string) {
  return allWindows.find((w) => w.id === id);
}

export { desktopApps, malwareIcon };
