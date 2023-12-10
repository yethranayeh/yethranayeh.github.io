import { createHashRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import { pathDefinitions } from "@/constants/path-definitions";

const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: pathDefinitions
	}
]);

export default router;
