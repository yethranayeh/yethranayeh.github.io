import { createHashRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import { pathDefinitions } from "@/constants/path-definitions";
import { lazy } from "react";

const ErrorPage = lazy(() => import("@/routes/ErrorPage").then((module) => ({ default: module.ErrorPage })));
const Resume = lazy(() => import("@/routes/Resume/Resume").then((module) => ({ default: module.Resume })));

const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: pathDefinitions,
		errorElement: <ErrorPage />
	},
	{
		path: "resume",
		element: <Resume />,
		errorElement: <ErrorPage />
	}
]);

export default router;
