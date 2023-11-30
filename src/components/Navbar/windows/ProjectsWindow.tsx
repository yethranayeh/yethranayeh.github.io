import { Window, Button, WindowHeader, WindowContent, Toolbar, Frame, Anchor, Tabs, Tab } from "react95";

import { useTranslation } from "react-i18next";

import { Flex, Text } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";

import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

import styles from "./Window.module.scss";
import Draggable from "react-draggable";

export function ProjectsWindow() {
	const { t } = useTranslation(["content", "menu"]);

	return (
		<Draggable bounds='main' handle='.sc-cabOPr'>
			<Window className={styles.window}>
				<WindowHeader>
					<span className='window-title'>{t("menu:window.projects")}</span>
				</WindowHeader>
				<Tabs>
					<Tab>...</Tab>
				</Tabs>
				<WindowContent className={styles.windowContent}>...</WindowContent>
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
