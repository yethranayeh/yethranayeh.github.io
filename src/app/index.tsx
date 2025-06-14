/** @format */
import "@/styles/globals.scss";

import { AppProvider } from "./provider";
import { ScanLineEffect } from "./components/ScanLineEffect";
import GlobalStyles from "../config/GlobalStyles";

const App = () => (
	<AppProvider>
		<ScanLineEffect />
		<GlobalStyles />
	</AppProvider>
);

export default App;
