import type { AppWindow } from "@/stores/window.atom";

import { lazy } from "react";

const ResumeContent = lazy(() =>
  import("@/features/ResumeWindow").then((module) => ({ default: module.ResumeWindow })),
);
const ProjectsContent = lazy(() =>
  import("@/features/ProjectsWindow/ProjectsWindow").then((module) => ({
    default: module.ProjectsWindow,
  })),
);
const AppsContent = lazy(() =>
  import("@/features/AppsWindow/AppsWindow").then((module) => ({ default: module.AppsWindow })),
);
const MediaContent = lazy(() =>
  import("@/features/MediaWindow/MediaWindow").then((module) => ({
    default: module.MediaWindow,
  })),
);
const ComputerContent = lazy(() =>
  import("@/features/ComputerWindow/ComputerWindow").then((module) => ({
    default: module.ComputerWindow,
  })),
);

export const desktopApps: Array<AppWindow> = [
  {
    id: "computer",
    titleI18nKey: "menu:window.myComputer",
    minimized: false,
    iconSrc: "/icon/program.ico",
    content: ComputerContent,
  },
  {
    id: "projects",
    titleI18nKey: "menu:window.projects",
    minimized: false,
    iconSrc: "/icon/desktop.ico",
    content: ProjectsContent,
  },
  {
    id: "resume",
    titleI18nKey: "menu:window.resume",
    minimized: false,
    iconSrc: "/icon/user_card.ico",
    content: ResumeContent,
    WindowProps: {
      slotProps: { window: { as: "section", style: { minWidth: "22.7cm", maxWidth: "unset" } } },
    },
  },
  {
    id: "apps",
    titleI18nKey: "menu:window.apps",
    minimized: false,
    iconSrc: "/icon/folder.ico",
    openWindowIconSrc: "/icon/folder_open.ico",
    content: AppsContent,
  },
  {
    id: "media",
    titleI18nKey: "menu:window.media",
    minimized: false,
    iconSrc: "/icon/folder-media.svg",
    openWindowIconSrc: "/icon/folder-media-open.svg",
    content: MediaContent,
  },
];
