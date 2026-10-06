import { lazy } from "react";
import { atom, useAtom } from "jotai";

import { AppTabs } from "@/components/AppTabs";

import styles from "./ProjectsWindow.module.scss";

const preload = {
  Zinn: () => import("@/features/ProjectsWindow/Projects/Zinn"),
  PlayerType: () => import("@/features/ProjectsWindow/Projects/PlayerType"),
  Sarmal: () => import("@/features/ProjectsWindow/Projects/Sarmal"),
  "Shades of Space": () => import("@/features/ProjectsWindow/Projects/DailySpacePalette"),
} as const;

const Project = {
  Zinn: lazy(() => preload.Zinn().then((m) => ({ default: m.Zinn }))),
  PlayerType: lazy(() => preload.PlayerType().then((m) => ({ default: m.PlayerType }))),
  Sarmal: lazy(() => preload.Sarmal().then((m) => ({ default: m.Sarmal }))),
  ShadesOfSpace: lazy(() =>
    preload["Shades of Space"]().then((m) => ({ default: m.DailySpacePalette })),
  ),
} as const;

const activeProjectAtom = atom("Zinn");

export function ProjectsWindow() {
  const [activeTab, setActiveTab] = useAtom(activeProjectAtom);

  return (
    <AppTabs
      value={activeTab}
      onChange={setActiveTab}
      tabListClassName={styles.tabList}
      tabBodyProps={{ as: "article", className: styles.tabBody }}
    >
      <AppTabs.Tab title="Zinn" onTabHover={() => preload.Zinn()}>
        <Project.Zinn />
      </AppTabs.Tab>
      <AppTabs.Tab title="PlayerType" onTabHover={() => preload.PlayerType()}>
        <Project.PlayerType />
      </AppTabs.Tab>
      <AppTabs.Tab title="Sarmal" onTabHover={() => preload.Sarmal()}>
        <Project.Sarmal />
      </AppTabs.Tab>
      <AppTabs.Tab title="Shades of Space" onTabHover={() => preload["Shades of Space"]()}>
        <Project.ShadesOfSpace />
      </AppTabs.Tab>
    </AppTabs>
  );
}
