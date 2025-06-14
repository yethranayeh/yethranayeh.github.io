/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "@/i18n/init_i18n";
import { suppressConsoleMessages } from "./utils/suppressConsole";

suppressConsoleMessages();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
