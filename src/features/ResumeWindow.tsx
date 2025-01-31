import { useTranslation } from "react-i18next";
import { WindowContent, Frame } from "react95";

import { Flex } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { MailLink } from "@/components/MailLink";
import { DraggableWindow } from "@/components/windows/DraggableWindow";

import Github from "@/assets/icons/github.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";

import styles from "@/components/windows/Window.module.scss";

export function ResumeWindow() {
	const { t, i18n } = useTranslation(["content", "menu"]);

	return (
		<DraggableWindow
			title={t("menu:window.resume")}
			WindowProps={{ as: "section", style: { minWidth: "22.7cm", maxWidth: "unset" } }}>
			<WindowContent as='article' className={styles.content}>
				<Frame variant='field' style={{ overflowY: "scroll", overflowX: "hidden" }}>
					<iframe
						title='Resume'
						src={"https://www.aktasalper.com/resume/#/" + i18n.language}
						style={{ width: "21.5cm", height: "calc(29.7cm * 2)" }}
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
		</DraggableWindow>
	);
}
