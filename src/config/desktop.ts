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
const TerminalContent = lazy(() =>
  import("@/features/TerminalWindow/TerminalWindow").then((module) => ({
    default: module.TerminalWindow,
  })),
);
const ExperiencesContent = lazy(() =>
  import("@/features/ExperiencesWindow/ExperiencesWindow").then((module) => ({
    default: module.ExperiencesWindow,
  })),
);

export const terminalWindow: AppWindow = {
  id: "terminal",
  titleI18nKey: "menu:window.terminal",
  minimized: false,
  iconSrc: "/icon/terminal.svg",
  content: TerminalContent,
  WindowProps: {
    slotProps: {
      window: {
        style: {
          width: "min(760px, calc(100vw - 32px))",
          maxWidth: "unset",
          maxHeight: "unset",
          height: "min(550px, calc(100svh - 120px))",
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          resize: "both",
          overflow: "hidden",
        },
      },
      draggable: { defaultPosition: { x: 24, y: 70 } },
    },
  },
};

export const projectsWindow: AppWindow = {
  id: "projects",
  titleI18nKey: "menu:window.projects",
  minimized: false,
  iconSrc: "/icon/desktop.ico",
  content: ProjectsContent,
};

export const experiencesWindow: AppWindow = {
  id: "experiences",
  titleI18nKey: "menu:window.experiences",
  minimized: false,
  iconSrc: "/icon/internet_explorer.ico",
  content: ExperiencesContent,
  WindowProps: {
    slotProps: {
      window: {
        style: {
          width: "min(1000px, calc(100vw - 44px))",
          height: "min(720px, calc(100svh - 120px))",
          maxWidth: "unset",
          maxHeight: "unset",
          minWidth: 520,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          resize: "both",
        },
      },
      draggable: { defaultPosition: { x: 112, y: 78 } },
    },
  },
};

export const desktopApps: Array<AppWindow> = [
  {
    id: "computer",
    titleI18nKey: "menu:window.myComputer",
    minimized: false,
    iconSrc: "/icon/program.ico",
    content: ComputerContent,
    WindowProps: {
      slotProps: {
        window: {
          style: {
            width: "min(620px, calc(100vw - 32px))",
            maxWidth: "unset",
            height: "min(520px, calc(100svh - 120px))",
            display: "flex",
            flexDirection: "column",
          },
        },
      },
    },
  },
  projectsWindow,
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
  terminalWindow,
  experiencesWindow,
];
