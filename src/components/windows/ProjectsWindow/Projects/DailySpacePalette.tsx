import { useTranslation } from "react-i18next";

import { ProjectLayout } from "./ProjectLayout";
import { Text } from "@/components/Styled";

export function DailySpacePalette() {
	const { t } = useTranslation("content");

	return (
		<ProjectLayout
			website='https://www.aktasalper.com/daily-space-palette/'
			repo='https://github.com/yethranayeh/daily-space-palette'>
			<Text>{t("daily-space-palette")}</Text>
		</ProjectLayout>
	);
}
