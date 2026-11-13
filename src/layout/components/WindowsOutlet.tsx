import { useAtom } from "jotai";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import {
  removeWindowAtom,
  toggleMinimizeWindowAtom,
  windowsAtom,
  windowTitlesAtom,
} from "@/stores/window.atom";

import { DraggableWindow } from "@/components/windows/DraggableWindow";
import { Loader } from "@/components/Loader";
import { getWindowHelpTextKey } from "@/config/windowHelp";

export function WindowsOutlet() {
  "use memo";
  const { t } = useTranslation();
  const [windows] = useAtom(windowsAtom);
  const [titles] = useAtom(windowTitlesAtom);
  const [_, closeWindow] = useAtom(removeWindowAtom);
  const [__, toggleMinimizeWindow] = useAtom(toggleMinimizeWindowAtom);

  return (
    <>
      {windows
        .filter((w) => !w.minimized || w.id === "terminal")
        .map((w) => {
          const Content = w.content;
          return (
            <DraggableWindow
              key={w.id}
              {...w.WindowProps}
              title={titles[w.id] ?? t(w.titleI18nKey)}
              helpText={t(w.helpTextI18nKey ?? getWindowHelpTextKey(w.id))}
              slotProps={{
                ...w.WindowProps?.slotProps,
                window: {
                  ...w.WindowProps?.slotProps?.window,
                  style: {
                    ...w.WindowProps?.slotProps?.window?.style,
                    ...(w.minimized ? { display: "none" } : {}),
                  },
                },
                minimizeButton: {
                  onClick: () => toggleMinimizeWindow(w.id),
                  ...w.WindowProps?.slotProps?.minimizeButton,
                },
                closeButton: {
                  onClick: () => closeWindow(w.id),
                  ...w.WindowProps?.slotProps?.closeButton,
                },
              }}
            >
              <Suspense fallback={<Loader />}>
                <Content
                  {...(w.contentProps ?? {})}
                  windowId={w.id}
                  {...(w.id === "terminal" ? { isVisible: !w.minimized } : {})}
                />
              </Suspense>
            </DraggableWindow>
          );
        })}
    </>
  );
}
