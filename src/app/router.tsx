import { createHashRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "@/layout/MainLayout";

import { pathDefinitions } from "./routes/path-definitions";

const ErrorPage = lazy(() =>
	import("@/app/routes/components/ErrorPage").then((module) => ({ default: module.ErrorPage }))
);

const router = createHashRouter(
	[
		{
			path: "/",
			element: <MainLayout />,
			children: pathDefinitions,
			errorElement: <ErrorPage />
		}
	],
	{ future: { v7_relativeSplatPath: true } }
);

export default router;
