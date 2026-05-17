import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { desktopApps } from "@/config/windowRegistry";
import { addWindowAtom } from "@/stores/window.atom";

import DesktopIcon from "@/components/DesktopIcon";
import { Flex } from "@/components/Styled";

export default function DesktopOutlet() {
  const { t } = useTranslation();
  const [_, addWindow] = useAtom(addWindowAtom);
  return (
    <Flex direction="column" align="center" gap={24} sx={{ maxWidth: "max-content", padding: 12 }}>
      {desktopApps.map((app) => (
        <DesktopIcon
          key={app.id}
          id={app.id}
          title={t(app.titleI18nKey)}
          iconSrc={app.iconSrc}
          onDoubleClick={() => addWindow(app)}
        />
      ))}
    </Flex>
  );
}
