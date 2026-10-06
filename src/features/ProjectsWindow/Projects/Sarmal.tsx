import { useTranslation } from "react-i18next";

import { ProjectLayout } from "./ProjectLayout";
import { Text } from "@/components/Styled";

export function Sarmal() {
  const { t } = useTranslation("content");
  return (
    <ProjectLayout
      website="https://sarmal.art"
      repo="https://github.com/yethranayeh/sarmal"
      preview={{
        src: "https://i.imgur.com/42Tw708.png",
        alt: "Sarmal site preview",
        width: 2824,
        height: 978,
      }}
    >
      <Text>{t("project-teasers.sarmal")}</Text>
    </ProjectLayout>
  );
}
