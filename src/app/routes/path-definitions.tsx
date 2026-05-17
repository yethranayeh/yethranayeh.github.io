import type { RouteObject } from "react-router-dom";

import { lazy } from "react";

const Windows = {
  NotFoundWindow: lazy(() =>
    import("@/components/windows/NotFoundWindow").then((module) => ({
      default: module.NotFoundWindow,
    })),
  ),
} as const;

export const pathDefinitions: Array<RouteObject> = [
  {
    path: "/",
    /**
     * Root route renders empty because MainLayout handles all state (login/desktop)
     * 	independently of routing.
     * This placeholder satisfies the router's requirement for a matching route at "/"
     */
    element: <div></div>,
  },
  {
    path: "*",
    element: <Windows.NotFoundWindow />,
  },
];
