import { Tabs, Tab, TabBody } from "react95";
import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";

import { Loader } from "@/components/Loader";
import { DraggableWindow } from "@/components/windows/DraggableWindow";

import styles from "./ProjectsWindow.module.scss";

// TODO: Add ExaltRates
const Project = {
	DailySpacePalette: lazy(() =>
		import("@/features/ProjectsWindow/Projects/DailySpacePalette").then((module) => ({
			default: module.DailySpacePalette
		}))
	)
} as const;

const tabs = ["Daily Space Palette"] as const;

export function ProjectsWindow() {
	const { t } = useTranslation(["content", "menu"]);
	const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

	return (
		<DraggableWindow title={t("menu:window.projects")}>
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
		</DraggableWindow>
	);
}
