import type { RouteObject } from "react-router-dom";

import { lazy } from "react";

import { routes } from "@/app/routes/routes";

const Windows = {
	IntroductionWindow: lazy(() =>
		import("@/features/ResumeWindow").then((module) => ({ default: module.ResumeWindow }))
	),
	ProjectsWindow: lazy(() =>
		import("@/features/ProjectsWindow/ProjectsWindow").then((module) => ({ default: module.ProjectsWindow }))
	),
	AppsWindow: lazy(() => import("@/features/AppsWindow/AppsWindow").then((module) => ({ default: module.AppsWindow }))),
	NotFoundWindow: lazy(() =>
		import("@/components/windows/NotFoundWindow").then((module) => ({ default: module.NotFoundWindow }))
	)
} as const;

export const pathDefinitions: Array<RouteObject> = [
	{
		path: "/",
		// FIXME: what's going on here?
		element: <div></div>
	},
	{
		path: routes.resume,
		element: <Windows.IntroductionWindow />
	},
	{
		path: routes.projects,
		element: <Windows.ProjectsWindow />
	},
	{
		path: routes.apps,
		element: <Windows.AppsWindow />
	},
	{
		path: "*",
		element: <Windows.NotFoundWindow />
	}
];
