import { useTranslation } from "react-i18next";

import { ProjectLayout } from "./ProjectLayout";
import { Text } from "@/components/Styled";

export function DailySpacePalette() {
  const { t } = useTranslation("content");

  return (
    <ProjectLayout
      website="https://shadesof.space/"
      repo="https://github.com/yethranayeh/daily-space-palette"
      preview={{
        src: "https://github.com/user-attachments/assets/f9bbe6bb-ecf9-41bd-b3a8-eb854c74823a",
        alt: "Shades of Space aurora palette preview",
        width: 1200,
        height: 630,
      }}
    >
      <Text>{t("project-teasers.shades-of-space")}</Text>
    </ProjectLayout>
  );
}
