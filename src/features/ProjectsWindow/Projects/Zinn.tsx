import { useTranslation } from "react-i18next";
import { useSetAtom } from "jotai";
import { Button } from "react95";

import { Text } from "@/components/Styled";
import { terminalWindow } from "@/config/desktop";
import { addWindowAtom } from "@/stores/window.atom";

import { ProjectLayout } from "./ProjectLayout";

export function Zinn() {
  const { t } = useTranslation("content");
  const addWindow = useSetAtom(addWindowAtom);

  return (
    <ProjectLayout
      website="https://zinn.sh/"
      repo="https://github.com/yethranayeh/zinn"
      preview={{
        src: "https://zinn.sh/social/zinn.png",
        alt: "Zinn terminal workflow preview",
        width: 1200,
        height: 630,
      }}
    >
      <Text>{t("project-teasers.zinn")}</Text>
      <Button
        onClick={() =>
          addWindow({
            ...terminalWindow,
            contentProps: { initialCommand: "zinn", launchId: Date.now() },
          })
        }
      >
        {t("terminal.tryZinn")}
      </Button>
    </ProjectLayout>
  );
}
