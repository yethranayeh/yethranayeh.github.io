import type { RefObject } from "react";

import { pageContent } from "./pages";
import { StartPage } from "./StartPage";
import type { Navigator } from "./useNavigator";
import type { Page } from "./pages";

import styles from "./Navigator.module.scss";

interface ExperienceFrameProps {
  nav: Navigator;
  iframeRef?: RefObject<HTMLIFrameElement>;
  /** Overrides what a click on the start page does. */
  onOpen?: (page: Page) => void;
}

export function ExperienceFrame({ nav, iframeRef, onOpen }: ExperienceFrameProps) {
  const content = pageContent(nav.page);

  if (content.type === "home") {
    return (
      <StartPage
        onOpen={(slug) => {
          const page: Page = { kind: "experience", slug };
          if (onOpen) {
            onOpen(page);
            return;
          }
          nav.navigate(page);
        }}
      />
    );
  }

  return (
    <iframe
      key={nav.loadId}
      ref={iframeRef}
      className={styles.frame}
      src={content.src}
      title={content.title}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-pointer-lock"
      onLoad={() => {
        nav.markLoaded(nav.loadId);
      }}
    />
  );
}
