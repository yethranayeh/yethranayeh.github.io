import { createHashRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import { pathDefinitions } from "@/constants/path-definitions";
import { lazy } from "react";

const ErrorPage = lazy(() => import("@/routes/ErrorPage").then((module) => ({ default: module.ErrorPage })));

const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: pathDefinitions,
		errorElement: <ErrorPage />
	}
]);

export default router;
