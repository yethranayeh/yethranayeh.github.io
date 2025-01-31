/** @format */
import "@/styles/globals.scss";

import { AppProvider } from "./provider";
import { CRT } from "./components/CRT";
import GlobalStyles from "../config/GlobalStyles";

const App = () => (
	<AppProvider>
		<CRT />
		<GlobalStyles />
	</AppProvider>
);

export default App;
