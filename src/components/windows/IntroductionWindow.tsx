import { Window, Button, WindowHeader, WindowContent, Toolbar, Frame, Anchor } from "react95";

import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";

import { Flex, Text } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { CloseButton } from "@/components/CloseButton";

import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

import styles from "./Window.module.scss";

export function IntroductionWindow() {
	const { t } = useTranslation(["content", "menu"]);

	return (
		<Draggable bounds='main' handle='.sc-cabOPr'>
			<Window as='section' className={styles.window}>
				<WindowHeader className={styles.header}>
					<span className='window-title'>{t("menu:window.hello")}</span>
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
						<Anchor href='mailto:contact@aktasalper.com'>contact@aktasalper.com</Anchor>
						<Flex gap={12}>
							<SocialLink iconSrc={Github} name='Github' link='https://github.com/yethranayeh' />
							<SocialLink iconSrc={LinkedIn} name='LinkedIn' link='https://www.linkedin.com/in/aktasalper/' />
						</Flex>
					</Flex>
				</Frame>
			</Window>
		</Draggable>
	);
}
