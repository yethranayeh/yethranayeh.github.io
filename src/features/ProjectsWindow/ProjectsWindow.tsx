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
	Sarmal: lazy(() =>
		import("@/features/ProjectsWindow/Projects/Sarmal").then((module) => ({
			default: module.Sarmal
		}))
	),
	Deckplate: lazy(() =>
		import("@/features/ProjectsWindow/Projects/Deckplate").then((module) => ({
			default: module.Deckplate
		}))
	)
} as const;

const tabs = ["Daily Space Palette", "Sarmal", "Deckplate"] as const;

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
					{activeTab === "Sarmal" && <Project.Sarmal />}
					{activeTab === "Deckplate" && <Project.Deckplate />}
				</Suspense>
			</TabBody>
		</>
	);
}
