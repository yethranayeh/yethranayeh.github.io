import { useTranslation } from "react-i18next";

import { Text } from "@/components/Styled";

import { ProjectLayout } from "./ProjectLayout";

export function Zinn() {
  const { t } = useTranslation("content");

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
    </ProjectLayout>
  );
}
