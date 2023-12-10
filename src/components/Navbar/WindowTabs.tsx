import { useTranslation } from "react-i18next";
import { Button } from "react95";
import { useLocation, useNavigate } from "react-router-dom";

import { SVGIcon } from "@/components/SVGIcon";
import { Flex } from "@/components/Styled";

import NotesIcon from "pixelarticons/svg/notes.svg?react";
import BriefCaseSearchIcon from "pixelarticons/svg/briefcase-search.svg?react";

import styles from "./WindowTabs.module.scss";

import { routes } from "@/constants/routes";

export function WindowTabs() {
	const navigate = useNavigate();
	const path = useLocation().pathname;

	const { t } = useTranslation("menu");

	return (
		<Flex className={styles.container}>
			<Button active={path === routes.hello} onClick={() => navigate(path === routes.hello ? "/" : routes.hello)}>
				<SVGIcon marginRight Icon={NotesIcon} />
				{t("window.hello")}
			</Button>

			<Button
				active={path === routes.projects}
				onClick={() => navigate(path === routes.projects ? "/" : routes.projects)}>
				<SVGIcon marginRight Icon={BriefCaseSearchIcon} />
				{t("window.projects")}
			</Button>
		</Flex>
	);
}
