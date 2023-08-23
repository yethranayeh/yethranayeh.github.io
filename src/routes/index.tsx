/** @format */

import { createHashRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "./home";

const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />
			},
			{
				path: "test",
				element: <div>test</div>
			}
		]
	}
]);

export default router;
