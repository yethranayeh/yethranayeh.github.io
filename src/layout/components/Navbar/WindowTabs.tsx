import type { SVGIconProps } from "@/components/SVGIcon";

import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { AudioButton } from "@/components/AudioButton";
import { Flex } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";
import { ImgIcon } from "@/components/ImgIcon";

import UserSheetIcon from "@/assets/icons/User-Sheet.ico";
import WebDocumentIcon from "@/assets/icons/Web-Document.ico";
import FolderIcon from "@/assets/icons/Folder.ico";
import OpenedFolderIcon from "@/assets/icons/Opened-Folder.ico";

import styles from "./WindowTabs.module.scss";

import { routes } from "@/app/routes/routes";

interface WindowButtonProps {
	route: string;
	text: string;

	Icon?: SVGIconProps["Icon"];
	iconSrc?: string;
	activeIconSrc?: string;
}

function WindowButton({ route, Icon, iconSrc, activeIconSrc, text }: WindowButtonProps) {
	const navigate = useNavigate();
	const path = useLocation().pathname;
	const isActive = path === route;

	return (
		<AudioButton active={isActive} onClick={() => navigate(path === route ? "/" : route)} className={styles.button}>
			{Icon && <SVGIcon Icon={Icon} />}
			{iconSrc && <ImgIcon src={activeIconSrc && isActive ? activeIconSrc : iconSrc} />}
			{text}
		</AudioButton>
	);
}

export function WindowTabs() {
	const { t } = useTranslation("menu");

	return (
		<Flex className={styles.container}>
			<WindowButton route={routes.resume} iconSrc={UserSheetIcon} text={t("window.resume")} />
			<WindowButton route={routes.projects} iconSrc={WebDocumentIcon} text={t("window.projects")} />
			<WindowButton route={routes.apps} iconSrc={FolderIcon} activeIconSrc={OpenedFolderIcon} text={t("window.apps")} />
		</Flex>
	);
}
