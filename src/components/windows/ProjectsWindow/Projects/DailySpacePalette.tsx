import { useTranslation } from "react-i18next";
import { ProjectLayout } from "./ProjectLayout";

export function DailySpacePalette() {
	const { t } = useTranslation("content");
	return (
		<ProjectLayout
			website='https://www.aktasalper.com/daily-space-palette/'
			repo='https://github.com/yethranayeh/daily-space-palette'>
			{t("daily-space-palette")}
		</ProjectLayout>
	);
}
