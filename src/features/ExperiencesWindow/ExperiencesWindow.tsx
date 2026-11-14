import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { useWindowTitle } from "@/hooks/useWindowTitle";
import { removeWindowAtom } from "@/stores/window.atom";

import { ExperienceFrame } from "./ExperienceFrame";
import { LinksBar } from "./LinksBar";
import { NavigatorChrome } from "./NavigatorChrome";
import { homePage, pageTitle, resolveUrl } from "./pages";
import { Sidebar } from "./Sidebar";
import { useNavigator } from "./useNavigator";

import styles from "./Navigator.module.scss";

interface ExperiencesWindowProps {
  windowId?: string;
  /** Opened from a shortcut: the address to start on. */
  initialUrl?: string;
  /** New on every shortcut activation, including a repeat of the same one. */
  requestKey?: number;
}

/**
 * The browser window's content. The frame, title bar, taskbar entry and
 * close/minimize controls come from the window manager (`WindowsOutlet`).
 */
export function ExperiencesWindow({ windowId, initialUrl, requestKey }: ExperiencesWindowProps) {
  const { t } = useTranslation("content");
  const requested = initialUrl ? resolveUrl(initialUrl) : null;
  const nav = useNavigator(requested ?? homePage);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeWindow = useSetAtom(removeWindowAtom);

  // A shortcut can fire while the window is already open. The key is new on
  // every activation, so clicking the same shortcut again reloads it instead
  // of being swallowed as "already handled".
  const handledRequest = useRef(requestKey);
  useEffect(() => {
    if (!requested || requestKey === undefined || requestKey === handledRequest.current) return;
    handledRequest.current = requestKey;
    nav.navigate(requested);
  }, [nav, requestKey, requested]);

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
