import { WindowContent } from "react95";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { DraggableWindow } from "./DraggableWindow";

import styles from "./Window.module.scss";

export function NotFoundWindow() {
	const { t } = useTranslation("content");
	const path = useLocation().pathname.replace("/", "");

	return (
		<DraggableWindow title={t("404.title")}>
			<WindowContent className={styles.content}>{t("404.descripton", { path })}</WindowContent>
		</DraggableWindow>
	);
}
