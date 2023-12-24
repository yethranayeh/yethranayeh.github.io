import { Window, WindowHeader, Tabs, Tab, TabBody } from "react95";

import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import Draggable from "react-draggable";

import { WindowTitleText } from "../WindowTitleText";
import { CloseButton } from "@/components/CloseButton";
import { Loader } from "@/components/Loader";

import windowStyles from "../Window.module.scss";
import styles from "./ProjectsWindow.module.scss";

const Project = {
	DailySpacePalette: lazy(() =>
		import("@/components/windows/ProjectsWindow/Projects/DailySpacePalette").then((module) => ({
			default: module.DailySpacePalette
		}))
	)
} as const;

const tabs = ["Daily Space Palette", "Civciv"] as const;

export function ProjectsWindow() {
	const { t } = useTranslation(["content", "menu"]);
	const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

	return (
		<Draggable bounds='main' handle='.sc-cabOPr'>
			<Window as='section' className={windowStyles.window}>
				<WindowHeader className={windowStyles.header}>
					<WindowTitleText>{t("menu:window.projects")}</WindowTitleText>
					<CloseButton />
				</WindowHeader>
				<Tabs value={activeTab} onChange={setActiveTab}>
					{tabs.map((tab) => (
						<Tab key={tab} value={tab}>
							{tab}
						</Tab>
					))}
				</Tabs>
				<TabBody as='article' className={styles.tabBody}>
					<Suspense fallback={<Loader />}>
						{activeTab === "Daily Space Palette" && <Project.DailySpacePalette />}
					</Suspense>
				</TabBody>
			</Window>
		</Draggable>
	);
}
