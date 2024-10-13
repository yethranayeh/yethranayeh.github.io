import { AppBar, Handle, Toolbar } from "react95";

import Flex from "@/components/Styled/Flex";
import { StartButton } from "./StartButton";
import { LanguageSelect } from "./LanguageSelect";
import { WindowTabs } from "./WindowTabs";
import { AudioToggle } from "./AudioToggle";

import styles from "./Navbar.module.scss";

// FIXME: Navbar height changes when start button menu is opened
export const Navbar = () => (
	<AppBar as='nav' className={styles.container}>
		<Toolbar className={styles.toolbar}>
			<Flex gap={4} sx={{ marginRight: 4 }}>
				<StartButton />
				<Handle size={35} />
			</Flex>
			<WindowTabs />

			{/* TODO: Add battery icon for mobile or laptop: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery */}
			<Flex gap={4} sx={{ marginLeft: "auto" }}>
				<Handle size={35} />
				<AudioToggle />
				<LanguageSelect />
			</Flex>
		</Toolbar>
	</AppBar>
);
