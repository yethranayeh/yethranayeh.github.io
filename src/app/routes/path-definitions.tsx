import type { RouteObject } from "react-router-dom";

import { lazy } from "react";

const Windows = {
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
		path: "*",
		element: <Windows.NotFoundWindow />
	}
];
