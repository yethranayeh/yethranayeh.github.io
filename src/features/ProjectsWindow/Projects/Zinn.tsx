import { useTranslation } from "react-i18next";

import { Text } from "@/components/Styled";

import { ProjectLayout } from "./ProjectLayout";

export function Zinn() {
  const { t } = useTranslation("content");

  return (
    <ProjectLayout website="https://zinn.sh/" repo="https://github.com/yethranayeh/zinn">
      <Text>{t("project-teasers.zinn")}</Text>
    </ProjectLayout>
  );
}
