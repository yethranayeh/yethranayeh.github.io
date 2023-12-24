import { Window, WindowContent, WindowHeader } from "react95";

import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";

import { WindowTitleText } from "./WindowTitleText";
import { CloseButton } from "../CloseButton";

import styles from "./Window.module.scss";
import { useLocation } from "react-router-dom";

export function NotFoundWindow() {
	const { t } = useTranslation("content");
	const path = useLocation().pathname.replace("/", "");

	return (
		<Draggable bounds='main' handle='.sc-cabOPr'>
			<Window className={styles.window}>
				<WindowHeader className={styles.header}>
					<WindowTitleText>{t("404.title")}</WindowTitleText>
					<CloseButton />
				</WindowHeader>
				<WindowContent className={styles.content}>{t("404.descripton", { path })}</WindowContent>
			</Window>
		</Draggable>
	);
}
