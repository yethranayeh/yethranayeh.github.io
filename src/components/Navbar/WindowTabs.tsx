import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react95";

import { SVGIcon } from "../SVGIcon";
import { Flex } from "../Styled";

import NotesIcon from "pixelarticons/svg/notes.svg";
import BriefCaseSearchIcon from "pixelarticons/svg/briefcase-search.svg";

import styles from "./WindowTabs.module.scss";

const Windows = {
	IntroductionWindow: lazy(() =>
		import("@/components/Navbar/windows/IntroductionWindow").then((module) => ({ default: module.IntroductionWindow }))
	),
	ProjectsWindow: lazy(() =>
		import("@/components/Navbar/windows/ProjectsWindow").then((module) => ({ default: module.ProjectsWindow }))
	)
} as const;

type WindowOption = keyof typeof Windows;

export function WindowTabs() {
	const [activeTab, setActiveTab] = useState<WindowOption | null>(null);

	const { t } = useTranslation("menu");
	return (
		<Flex className={styles.container}>
			{/* Window Buttons */}
			<Button
				active={activeTab === "IntroductionWindow"}
				onClick={() => setActiveTab(activeTab === "IntroductionWindow" ? null : "IntroductionWindow")}>
				<SVGIcon marginRight src={NotesIcon} alt='an icon of a page, indicating writing' />
				{t("window.hello")}
			</Button>

			<Button
				active={activeTab === "ProjectsWindow"}
				onClick={() => setActiveTab(activeTab === "ProjectsWindow" ? null : "ProjectsWindow")}>
				<SVGIcon marginRight src={BriefCaseSearchIcon} alt='an icon of a briefcase' />
				{t("window.projects")}
			</Button>

			{/* Window Screens */}
			<Suspense fallback={null}>{activeTab === "IntroductionWindow" && <Windows.IntroductionWindow />}</Suspense>
			<Suspense fallback={null}>{activeTab === "ProjectsWindow" && <Windows.ProjectsWindow />}</Suspense>
		</Flex>
	);
}
