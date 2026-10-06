import { useTranslation } from "react-i18next";

import { Text } from "@/components/Styled";

import { ProjectLayout } from "./ProjectLayout";

export function PlayerType() {
  const { t } = useTranslation("content");

  return (
    <ProjectLayout website="https://playertype.gg/">
      <Text>{t("project-teasers.player-type")}</Text>
    </ProjectLayout>
  );
}
