import { useTranslation } from "react-i18next";

import { Text } from "@/components/Styled";

import { ProjectLayout } from "./ProjectLayout";

export function PlayerType() {
  const { t } = useTranslation("content");

  return (
    <ProjectLayout
      website="https://playertype.gg/"
      preview={{
        src: "https://i.imgur.com/dyAnD7j.jpeg",
        alt: "PlayerType game map preview",
        width: 2814,
        height: 1540,
      }}
    >
      <Text>{t("project-teasers.player-type")}</Text>
    </ProjectLayout>
  );
}
