import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export const AppProvider = (props: PropsWithChildren) => (
	<ThemeProvider theme={original}>
		{props.children}
		<RouterProvider router={router} />
	</ThemeProvider>
);
