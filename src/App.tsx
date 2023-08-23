/** @format */
import "@/styles/globals.scss";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import original from "react95/dist/themes/original";

import router from "./routes";
import GlobalStyles from "./config/GlobalStyles";

const App = () => (
	<>
		<ThemeProvider theme={original}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	</>
);

export default App;
