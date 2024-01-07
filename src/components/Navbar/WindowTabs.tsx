import type { SVGIconProps } from "@/components/SVGIcon";

import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { AudioButton } from "@/components/AudioButton";
import { Flex } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";
import { ImgIcon } from "@/components/ImgIcon";

import NotesIcon from "pixelarticons/svg/notes.svg?react";
import BriefCaseSearchIcon from "pixelarticons/svg/briefcase-search.svg?react";
import FolderIcon from "@/assets/icons/Folder.ico";
import OpenedFolderIcon from "@/assets/icons/Opened-Folder.ico";

import styles from "./WindowTabs.module.scss";

import { routes } from "@/constants/routes";

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
			<WindowButton route={routes.hello} Icon={NotesIcon} text={t("window.hello")} />
			<WindowButton route={routes.projects} Icon={BriefCaseSearchIcon} text={t("window.projects")} />
			<WindowButton route={routes.apps} iconSrc={FolderIcon} activeIconSrc={OpenedFolderIcon} text={t("window.apps")} />
		</Flex>
	);
}
