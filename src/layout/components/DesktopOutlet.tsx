import { useAtom, useSetAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { desktopApps, malwareIcon } from "@/config/windowRegistry";
import { addWindowAtom } from "@/stores/window.atom";
import { startMalwareAtom } from "@/features/Malware/state";

import DesktopIcon from "@/components/DesktopIcon";
import { Flex } from "@/components/Styled";

import styles from "./DesktopOutlet.module.scss";

export default function DesktopOutlet() {
  const { t } = useTranslation();
  const [, addWindow] = useAtom(addWindowAtom);
  const startMalware = useSetAtom(startMalwareAtom);

  return (
    <>
      <Flex
        direction="column"
        align="center"
        gap={24}
        sx={{ maxWidth: "max-content", padding: 12 }}
      >
        {desktopApps.map((app) => (
          <DesktopIcon
            key={app.id}
            id={app.id}
            title={t(app.titleI18nKey)}
            iconSrc={app.iconSrc}
            onOpen={() => addWindow(app)}
          />
        ))}
      </Flex>

      {/* One file in the corner of the desktop, clear of the app column. */}
      <div className={styles.stray}>
        <DesktopIcon
          id={malwareIcon.id}
          title={t(malwareIcon.titleI18nKey)}
          iconSrc={malwareIcon.iconSrc}
          boxWidth={96}
          boxHeight={86}
          onOpen={startMalware}
        />
      </div>
    </>
  );
}
