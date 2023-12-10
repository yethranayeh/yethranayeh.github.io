import type { RouteObject } from "react-router-dom";

import { lazy } from "react";

import { routes } from "@/constants/routes";

const Windows = {
	IntroductionWindow: lazy(() =>
		import("@/components/windows/IntroductionWindow").then((module) => ({ default: module.IntroductionWindow }))
	),
	ProjectsWindow: lazy(() =>
		import("@/components/windows/ProjectsWindow/ProjectsWindow").then((module) => ({ default: module.ProjectsWindow }))
	)
} as const;

export const pathDefinitions: Array<RouteObject> = [
	{
		path: "/",
		element: <div></div>
	},
	{
		path: routes.hello,
		element: <Windows.IntroductionWindow />
	},
	{
		path: routes.projects,
		element: <Windows.ProjectsWindow />
	},
	{
		path: "*",
		element: <div>404</div>
	}
];