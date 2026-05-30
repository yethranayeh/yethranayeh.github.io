import { useTranslation } from "react-i18next";

import { ProjectLayout } from "./ProjectLayout";
import { Text } from "@/components/Styled";

export function DailySpacePalette() {
  const { t } = useTranslation("content");
  return (
    <ProjectLayout
      website="https://shadesof.space/"
      repo="https://github.com/yethranayeh/shades-of-space"
    >
      <Text>{t("shades-of-space")}</Text>
    </ProjectLayout>
  );
}
