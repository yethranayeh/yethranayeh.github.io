import { useTranslation } from "react-i18next";

import { ProjectLayout } from "./ProjectLayout";
import { Text } from "@/components/Styled";

export function Deckplate() {
	const { t } = useTranslation("content");
	return (
		<ProjectLayout website='https://deckplate.netlify.app' repo='https://github.com/yethranayeh/DECKPLATE'>
			<Text>{t("deckplate")}</Text>
		</ProjectLayout>
	);
}
