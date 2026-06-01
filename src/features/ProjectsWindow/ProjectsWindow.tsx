import { lazy, useState } from "react";

import { AppTabs } from "@/components/AppTabs";

import styles from "./ProjectsWindow.module.scss";

const preload = {
  Sarmal: () => import("@/features/ProjectsWindow/Projects/Sarmal"),
  "Shades of Space": () => import("@/features/ProjectsWindow/Projects/DailySpacePalette"),
  Deckplate: () => import("@/features/ProjectsWindow/Projects/Deckplate"),
} as const;

const Project = {
  Sarmal: lazy(() => preload.Sarmal().then((m) => ({ default: m.Sarmal }))),
  ShadesOfSpace: lazy(() =>
    preload["Shades of Space"]().then((m) => ({ default: m.DailySpacePalette })),
  ),
  Deckplate: lazy(() => preload.Deckplate().then((m) => ({ default: m.Deckplate }))),
} as const;

export function ProjectsWindow() {
  const [activeTab, setActiveTab] = useState("Shades of Space");

  return (
    <AppTabs
      value={activeTab}
      onChange={setActiveTab}
      tabBodyProps={{ as: "article", className: styles.tabBody }}
    >
      <AppTabs.Tab title="Shades of Space" onTabHover={() => preload["Shades of Space"]()}>
        <Project.ShadesOfSpace />
      </AppTabs.Tab>
      <AppTabs.Tab title="Sarmal" onTabHover={() => preload.Sarmal()}>
        <Project.Sarmal />
      </AppTabs.Tab>
      <AppTabs.Tab title="Deckplate" onTabHover={() => preload.Deckplate()}>
        <Project.Deckplate />
      </AppTabs.Tab>
    </AppTabs>
  );
}
