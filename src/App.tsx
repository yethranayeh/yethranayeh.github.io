/** @format */
import "@/styles/globals.scss";

import { CRT } from "./components/CRT";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import original from "react95/dist/themes/original";

import router from "./routes";
import GlobalStyles from "./config/GlobalStyles";

const App = () => (
	<ThemeProvider theme={original}>
		<CRT />
		<GlobalStyles />
		<RouterProvider router={router} />
	</ThemeProvider>
);

export default App;
