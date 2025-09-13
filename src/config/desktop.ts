import type { AppWindow } from "@/stores/window.atom";

import { lazy } from "react";
import i18next from "i18next";

import UserSheetIcon from "@/assets/icons/User-Sheet.ico";
import WebDocumentIcon from "@/assets/icons/Web-Document.ico";
import FolderIcon from "@/assets/icons/Folder.ico";
import OpenedFolderIcon from "@/assets/icons/Opened-Folder.ico";

const ResumeContent = lazy(() =>
	import("@/features/ResumeWindow").then((module) => ({ default: module.ResumeWindow }))
);
const ProjectsContent = lazy(() =>
	import("@/features/ProjectsWindow/ProjectsWindow").then((module) => ({ default: module.ProjectsWindow }))
);
const AppsContent = lazy(() =>
	import("@/features/AppsWindow/AppsWindow").then((module) => ({ default: module.AppsWindow }))
);

export const desktopApps: Array<AppWindow> = [
	{
		id: "resume",
		title: i18next.t("menu:window.resume"),
		minimized: false,
		iconSrc: UserSheetIcon,
		content: ResumeContent,
		WindowProps: {
			slotProps: { window: { as: "section", style: { minWidth: "22.7cm", maxWidth: "unset" } } }
		}
	},
	{
		id: "projects",
		title: i18next.t("menu:window.projects"),
		minimized: false,
		iconSrc: WebDocumentIcon,
		content: ProjectsContent
	},
	{
		id: "apps",
		title: i18next.t("menu:window.apps"),
		minimized: false,
		iconSrc: OpenedFolderIcon,
		minimizedIconSrc: FolderIcon,
		content: AppsContent
	}
];
