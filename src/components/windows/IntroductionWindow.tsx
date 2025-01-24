import { useTranslation } from "react-i18next";
import { Window, WindowHeader, WindowContent, Frame } from "react95";
import Draggable from "react-draggable";

import { WindowTitleText } from "./WindowTitleText";
import { Flex } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { CloseButton } from "@/components/CloseButton";
import { MailLink } from "@/components/MailLink";

import Github from "@/assets/icons/github.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";

import styles from "./Window.module.scss";

export function IntroductionWindow() {
	const { t, i18n } = useTranslation(["content", "menu"]);

	return (
		<Draggable bounds='main' handle={styles.header}>
			<Window as='section' className={styles.window} style={{ width: "22.7cm", maxWidth: "unset" }}>
				<WindowHeader className={styles.header}>
					<WindowTitleText>{t("menu:window.resume")}</WindowTitleText>
					<CloseButton />
				</WindowHeader>

				<WindowContent as='article' className={styles.content}>
					<Frame variant='field' style={{ overflowY: "scroll", overflowX: "hidden" }}>
						<iframe
							title='Resume'
							src={"https://www.aktasalper.com/resume/#/" + i18n.language}
							style={{ width: "21.5cm", height: "29.7cm" }}
						/>
					</Frame>
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
