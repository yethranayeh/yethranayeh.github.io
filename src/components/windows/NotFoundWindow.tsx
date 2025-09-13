import { WindowContent } from "react95";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { DraggableWindow } from "./DraggableWindow";

import styles from "./Window.module.scss";

export function NotFoundWindow() {
	const { t } = useTranslation("content");
	const navigate = useNavigate();
	const path = useLocation().pathname.replace("/", "");

	return (
		<DraggableWindow
			title={t("404.title")}
			slotProps={{
				closeButton: {
					onClick: () => navigate("/")
				}
			}}>
			<WindowContent className={styles.content}>{t("404.descripton", { path })}</WindowContent>
		</DraggableWindow>
	);
}
