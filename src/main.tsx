/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@/i18n/init_i18n";
import { Tally } from "./Tally";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* <App /> */}
		<Tally />
	</React.StrictMode>
);
