import type { AppWindow } from "@/stores/window.atom";

import { lazy } from "react";
import i18next from "i18next";

const ResumeContent = lazy(() =>
	import("@/features/ResumeWindow").then((module) => ({ default: module.ResumeWindow }))
);
const ProjectsContent = lazy(() =>
	import("@/features/ProjectsWindow/ProjectsWindow").then((module) => ({ default: module.ProjectsWindow }))
);
const AppsContent = lazy(() =>
	import("@/features/AppsWindow/AppsWindow").then((module) => ({ default: module.AppsWindow }))
);

// FIXME: i18n is not dynamic since the `t` function is not from the hook
export const desktopApps: Array<AppWindow> = [
	{
		id: "resume",
		title: i18next.t("menu:window.resume"),
		minimized: false,
		iconSrc: "/icon/user_card.ico",
		content: ResumeContent,
		WindowProps: {
			slotProps: { window: { as: "section", style: { minWidth: "22.7cm", maxWidth: "unset" } } }
		}
	},
	{
		id: "projects",
		title: i18next.t("menu:window.projects"),
		minimized: false,
		iconSrc: "/icon/desktop.ico",
		content: ProjectsContent
	},
	{
		id: "apps",
		title: i18next.t("menu:window.apps"),
		minimized: false,
		iconSrc: "/icon/folder.ico",
		openWindowIconSrc: "/icon/folder_open.ico",
		content: AppsContent
	}
];
