import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { useWindowTitle } from "@/hooks/useWindowTitle";
import { removeWindowAtom } from "@/stores/window.atom";

import { ExperienceFrame } from "./ExperienceFrame";
import { LinksBar } from "./LinksBar";
import { NavigatorChrome } from "./NavigatorChrome";
import { homePage, pageKey, pageTitle, resolveUrl } from "./pages";
import { Sidebar } from "./Sidebar";
import { useNavigator } from "./useNavigator";

import styles from "./Navigator.module.scss";

interface ExperiencesWindowProps {
  windowId?: string;
  /** Opened from a shortcut: the address to start on. */
  initialUrl?: string;
}

/**
 * The browser window's content. The frame, title bar, taskbar entry and
 * close/minimize controls come from the window manager (`WindowsOutlet`).
 */
export function ExperiencesWindow({ windowId, initialUrl }: ExperiencesWindowProps) {
  const { t } = useTranslation("content");
  const requested = initialUrl ? resolveUrl(initialUrl) : null;
  const nav = useNavigator(requested ?? homePage);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeWindow = useSetAtom(removeWindowAtom);

  // A shortcut can be opened while the window already exists — follow it then too.
  const handled = useRef(requested ? pageKey(requested) : "");
  useEffect(() => {
    if (!requested) return;
    const key = pageKey(requested);
    if (key === handled.current) return;
    handled.current = key;
    if (pageKey(nav.page) !== key) nav.navigate(requested);
  });

  const title = nav.page.kind === "home" ? t("explorer.home.title") : pageTitle(nav.page);
  useWindowTitle(windowId, `${title} - ${t("explorer.brand")}`);

  return (
    <NavigatorChrome
      nav={nav}
      iframeRef={iframeRef}
      onClose={windowId ? () => closeWindow(windowId) : undefined}
      sidebarOpen={sidebarOpen}
      onToggleSidebar={() => setSidebarOpen((value) => !value)}
      beforeViewport={<LinksBar nav={nav} />}
    >
      {sidebarOpen && <Sidebar nav={nav} />}
      <div className={styles.framePane}>
        <ExperienceFrame nav={nav} iframeRef={iframeRef} />
      </div>
    </NavigatorChrome>
  );
}
