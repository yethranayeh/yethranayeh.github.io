import { Tabs, Tab, TabBody } from "react95";
import { Suspense, lazy, useState } from "react";

import { Loader } from "@/components/Loader";

import styles from "./ProjectsWindow.module.scss";

const preload = {
  Sarmal: () => import("@/features/ProjectsWindow/Projects/Sarmal"),
  "Daily Space Palette": () => import("@/features/ProjectsWindow/Projects/DailySpacePalette"),
  Deckplate: () => import("@/features/ProjectsWindow/Projects/Deckplate"),
} as const;

const Project = {
  Sarmal: lazy(() => preload.Sarmal().then((m) => ({ default: m.Sarmal }))),
  DailySpacePalette: lazy(() =>
    preload["Daily Space Palette"]().then((m) => ({ default: m.DailySpacePalette })),
  ),
  Deckplate: lazy(() => preload.Deckplate().then((m) => ({ default: m.Deckplate }))),
} as const;

const tabs = ["Daily Space Palette", "Sarmal", "Deckplate"] as const;

export function ProjectsWindow() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <>
      <Tabs value={activeTab} onChange={setActiveTab}>
        {tabs.map((tab) => (
          <Tab key={tab} value={tab} onMouseEnter={() => preload[tab]()}>
            {tab}
          </Tab>
        ))}
      </Tabs>
      <TabBody as="article" className={styles.tabBody}>
        <Suspense fallback={<Loader />}>
          {activeTab === "Daily Space Palette" && <Project.DailySpacePalette />}
          {activeTab === "Sarmal" && <Project.Sarmal />}
          {activeTab === "Deckplate" && <Project.Deckplate />}
        </Suspense>
      </TabBody>
    </>
  );
}
