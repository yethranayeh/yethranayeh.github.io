import { useTranslation } from "react-i18next";

import { Branding } from "@/components/Branding";
import { Flex } from "@/components/Styled";
import { User } from "./User";
import { ButtonTurnOff } from "./ButtonTurnOff";

import styles from "./LoginPage.module.scss";

export function LoginPage() {
	const { t } = useTranslation("content");
	return (
		<main className={styles.container}>
			<header className={styles.header}></header>

			<section className={styles.branding}>
				<Flex direction='column' align='flex-end' gap={16}>
					<Branding />
					<p>{t("login-screen.instructions")}</p>
				</Flex>
			</section>

			<section className={styles.users}>
				<ul>
					<li>
						<User />
					</li>
				</ul>
			</section>

			<Flex as='footer' className={styles.footer}>
				<Flex as='section' align='center' justify='space-between' sx={{ width: "100%" }} wrap='wrap' gap={8}>
					<Flex gap={12} align='center'>
						<ButtonTurnOff />
						<span>{t("login-screen.turn-off")}</span>
					</Flex>

					<p>{t("login-screen.footer-info")}</p>
				</Flex>
			</Flex>
		</main>
	);
}
