import { useTranslation } from "react-i18next";

import { ProjectLayout } from "./ProjectLayout";
import { Text } from "@/components/Styled";

export function Sarmal() {
  const { t } = useTranslation("content");
  return (
    <ProjectLayout website="https://sarmal.art" repo="https://github.com/yethranayeh/sarmal">
      <Text>{t("sarmal")}</Text>
    </ProjectLayout>
  );
}
