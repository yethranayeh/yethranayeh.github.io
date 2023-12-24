import { Window, Button, WindowHeader, WindowContent, Toolbar, Frame } from "react95";

import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";

import { WindowTitleText } from "./WindowTitleText";
import { Flex, Text } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { CloseButton } from "@/components/CloseButton";
import { MailLink } from "@/components/MailLink";

import Github from "@/assets/icons/github.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";

import styles from "./Window.module.scss";

export function IntroductionWindow() {
	const { t } = useTranslation(["content", "menu"]);

	return (
		<Draggable bounds='main' handle='.sc-cabOPr'>
			<Window as='section' className={styles.window}>
				<WindowHeader className={styles.header}>
					<WindowTitleText>{t("menu:window.hello")}</WindowTitleText>
					<CloseButton />
				</WindowHeader>
				<Toolbar>
					<Button disabled variant='menu' size='sm'>
						Dosya
					</Button>
					<Button disabled variant='menu' size='sm'>
						Düzenle
					</Button>
				</Toolbar>
				<WindowContent as='article' className={styles.content}>
					<Text>{t("introduction.about-me")}</Text>
					<Text>{t("introduction.about-experience")}</Text>
					<Text>{t("introduction.about-preferences")}</Text>
					<Text>{t("introduction.about-current-job")}</Text>
				</WindowContent>
				<Frame variant='well' className={styles.frame}>
					<Flex gap={12} justify='space-between'>
						<MailLink />
						<Flex gap={12}>
							<SocialLink Icon={Github} name='Github' link='https://github.com/yethranayeh' />
							<SocialLink Icon={LinkedIn} name='LinkedIn' link='https://www.linkedin.com/in/aktasalper/' />
						</Flex>
					</Flex>
				</Frame>
			</Window>
		</Draggable>
	);
}
