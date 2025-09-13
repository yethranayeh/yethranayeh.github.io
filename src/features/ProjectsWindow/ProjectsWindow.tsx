import { Tabs, Tab, TabBody } from "react95";
import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";

import { Loader } from "@/components/Loader";

import styles from "./ProjectsWindow.module.scss";

const Project = {
	DailySpacePalette: lazy(() =>
		import("@/features/ProjectsWindow/Projects/DailySpacePalette").then((module) => ({
			default: module.DailySpacePalette
		}))
	),
	ExaltRates: lazy(() =>
		import("@/features/ProjectsWindow/Projects/ExaltRates").then((module) => ({
			default: module.ExaltRates
		}))
	)
} as const;

const tabs = ["Daily Space Palette", "Exalt Rates"] as const;

export function ProjectsWindow() {
	const { t } = useTranslation(["content", "menu"]);
	const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

	return (
		<>
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
					{activeTab === "Exalt Rates" && <Project.ExaltRates />}
				</Suspense>
			</TabBody>
		</>
	);
}
