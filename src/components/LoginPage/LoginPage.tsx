import { useTranslation } from "react-i18next";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Branding } from "@/components/Branding";
import { Flex } from "@/components/Styled";
import { User } from "./User";
import { ButtonTurnOff } from "./ButtonTurnOff";

import styles from "./LoginPage.module.scss";

export function LoginPage() {
	const { t } = useTranslation("content");
	const biggerThanLg = useMediaQuery("lg");

	return (
		<main className={styles.container}>
			<section className={styles.branding}>
				<Flex direction='column' align={biggerThanLg ? "flex-end" : "center"} gap={16}>
					<Branding />
					<p className={styles.instructions}>{t("login-screen.instructions")}</p>
				</Flex>
			</section>

			<section className={styles.users}>
				<ul>
					<li>
						<User />
					</li>
				</ul>
			</section>

			{biggerThanLg && (
				<Flex as='footer' className={styles.footer}>
					<Flex as='section' align='center' justify='space-between' sx={{ width: "100%" }} wrap='wrap' gap={8}>
						<Flex gap={12} align='center'>
							<ButtonTurnOff />
							<span>{t("login-screen.turn-off")}</span>
						</Flex>

						<p>{t("login-screen.footer-info")}</p>
					</Flex>
				</Flex>
			)}
		</main>
	);
}
