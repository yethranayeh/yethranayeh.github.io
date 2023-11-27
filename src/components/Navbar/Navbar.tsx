import { AppBar, Toolbar } from "react95";

import { StartButton } from "./StartButton";
import { LanguageSelect } from "./LanguageSelect";

import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav>
			<AppBar className={styles.container}>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<StartButton />

					<LanguageSelect />
				</Toolbar>
			</AppBar>
		</nav>
	);
}
