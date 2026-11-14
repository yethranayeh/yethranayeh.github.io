import { atom, useAtom } from "jotai";

import { AppTabs } from "@/components/AppTabs";
import {
  PlayerTypeContent,
  preloadWindowContent,
  SarmalContent,
  ShadesOfSpaceContent,
  ZinnContent,
} from "@/config/windowContent";

import styles from "./ProjectsWindow.module.scss";

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
      <AppTabs.Tab title="Zinn" onTabHover={() => preloadWindowContent("projectZinn")}>
        <ZinnContent />
      </AppTabs.Tab>
      <AppTabs.Tab title="PlayerType" onTabHover={() => preloadWindowContent("projectPlayerType")}>
        <PlayerTypeContent />
      </AppTabs.Tab>
      <AppTabs.Tab title="Sarmal" onTabHover={() => preloadWindowContent("projectSarmal")}>
        <SarmalContent />
      </AppTabs.Tab>
      <AppTabs.Tab
        title="Shades of Space"
        onTabHover={() => preloadWindowContent("projectShadesOfSpace")}
      >
        <ShadesOfSpaceContent />
      </AppTabs.Tab>
    </AppTabs>
  );
}
