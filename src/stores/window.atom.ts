import type { ComponentType, LazyExoticComponent } from "react";
import type { DraggableWindowProps } from "@/components/windows/DraggableWindow";

import { atom } from "jotai";
import { projectsWindow } from "@/config/desktop";

export type AppWindow = {
  id: string;
  titleI18nKey: string;
  minimized: boolean;
  iconSrc: string;
  openWindowIconSrc?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: LazyExoticComponent<ComponentType<any>>;
  contentProps?: Record<string, unknown>;
  helpTextI18nKey?: string;
  WindowProps?: Omit<DraggableWindowProps, "title">;
};

export const windowsAtom = atom<Array<AppWindow>>([projectsWindow]);

/**
 * Per-window title overrides, keyed by window id. Some windows (the browser)
 * put the current document in the title bar, and the taskbar entry follows it.
 */
export const windowTitlesAtom = atom<Record<string, string>>({});

export const addWindowAtom = atom(null, (get, set, newWindow: AppWindow) => {
  const windows = get(windowsAtom);

  const windowExists = windows.some((win) => win.id === newWindow.id);
  if (windowExists) {
    // Last in DOM order is in front. Reopening also restores a minimized window.
    const existing = windows.find((win) => win.id === newWindow.id)!;
    set(windowsAtom, [
      ...windows.filter((win) => win.id !== newWindow.id),
      {
        ...existing,
        minimized: false,
        contentProps: newWindow.contentProps ?? existing.contentProps,
      },
    ]);
  } else {
    set(windowsAtom, [...windows, newWindow]);
  }
});

export const removeWindowAtom = atom(null, (get, set, windowId: string) => {
  const windows = get(windowsAtom);
  set(
    windowsAtom,
    windows.filter((win) => win.id !== windowId),
  );
});

export const toggleMinimizeWindowAtom = atom(null, (get, set, windowId: string) => {
  const windows = get(windowsAtom);
  set(
    windowsAtom,
    windows.map((win) => (win.id === windowId ? { ...win, minimized: !win.minimized } : win)),
  );
});
