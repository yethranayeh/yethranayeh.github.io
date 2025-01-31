import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";

import { MailLink } from "@/components/MailLink";
import { Flex, Text } from "@/components/Styled";

export function ErrorPage() {
	const { t } = useTranslation("content");
	const error = useRouteError();

	console.error(error);

	return (
		<Flex direction='column' style={{ color: "#fff" }} gap={8}>
			<Text>{t("error.fallback-element")}</Text>
			<MailLink />
		</Flex>
	);
}
