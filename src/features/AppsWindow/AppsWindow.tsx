import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Frame } from "react95";
import { useAtom } from "jotai";

import { addWindowAtom } from "@/stores/window.atom";
import { appKeys, createAppWindow } from "@/config/windowRegistry";

import { App } from "./App";
import { WindowURL } from "@/components/windows/WindowURL";

import styles from "./AppsWindow.module.scss";

export function AppsWindow() {
  const { t } = useTranslation("content");

  const [_, addWindow] = useAtom(addWindowAtom);

  return (
    <>
      <WindowURL />
      <Frame as="section" variant="field" className={styles.frame}>
        {appKeys.map((appKey) => {
          const appWindow = createAppWindow(appKey);
          if (!appWindow) {
            return null;
          }

          return (
            <App
              key={appWindow.id}
              name={t(appWindow.titleI18nKey)}
              iconSrc={appWindow.iconSrc}
              onDoubleClick={() => addWindow(appWindow)}
            />
          );
        })}
      </Frame>
    </>
  );
}
