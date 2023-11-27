import { Window, Button, WindowHeader, WindowContent, Toolbar, Frame, Anchor } from "react95";

import { useTranslation } from "react-i18next";

import { Flex, Text } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";

import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

import styles from "./IntroductionWindow.module.scss";
import Draggable from "react-draggable";

export function IntroductionWindow() {
	const { t } = useTranslation("content");

	return (
		<Draggable bounds='main' handle='.window-title'>
			<Window className={styles.window}>
				<WindowHeader className='window-title'>
					<span>Merhaba.txt</span>
				</WindowHeader>
				<Toolbar>
					<Button disabled variant='menu' size='sm'>
						Dosya
					</Button>
					<Button disabled variant='menu' size='sm'>
						Düzenle
					</Button>
					<Button variant='menu' size='sm'>
						Özgeçmiş
					</Button>
				</Toolbar>
				<WindowContent className={styles.windowContent}>
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
