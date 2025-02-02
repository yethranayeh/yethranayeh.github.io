import { Text } from "@/components/Styled";
import { ProjectLayout } from "./ProjectLayout";
import { useTranslation } from "react-i18next";

export function ExaltRates() {
	const { t } = useTranslation("content");
	console.log("YES");
	return (
		<ProjectLayout website='https://exaltrates.trade/' repo='https://github.com/yethranayeh/ExaltRates'>
			<Text>{t("exalt-rates")}</Text>
		</ProjectLayout>
	);
}
