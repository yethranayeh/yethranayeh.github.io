import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { windowTitlesAtom } from "@/stores/window.atom";

/**
 * Lets a window's content drive its title bar and taskbar entry.
 *
 * The window's `titleI18nKey` stays the fallback — a window that never calls
 * this keeps its translated title.
 */
export function useWindowTitle(windowId: string | undefined, title: string) {
  const setTitles = useSetAtom(windowTitlesAtom);

  useEffect(() => {
    if (!windowId) return;
    setTitles((current) =>
      current[windowId] === title ? current : { ...current, [windowId]: title },
    );
  }, [setTitles, title, windowId]);

  useEffect(() => {
    if (!windowId) return;
    return () => {
      setTitles((current) => {
        if (!(windowId in current)) return current;
        const next = { ...current };
        delete next[windowId];
        return next;
      });
    };
  }, [setTitles, windowId]);
}
