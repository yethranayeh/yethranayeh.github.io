import { AppBar, Handle, Toolbar } from "react95";

import { StartButton } from "./StartButton";
import { LanguageSelect } from "./LanguageSelect";
import Flex from "@/components/Styled/Flex";
import { WindowTabs } from "./WindowTabs";

import styles from "./Navbar.module.scss";

export const Navbar = () => (
	<AppBar as='nav' className={styles.container}>
		<Toolbar className={styles.toolbar}>
			<Flex gap={4} sx={{ marginRight: 4 }}>
				<StartButton />
				<Handle size={35} />
			</Flex>
			<WindowTabs />

			<Flex gap={4} sx={{ marginLeft: "auto" }}>
				<Handle size={35} />
				<LanguageSelect />
			</Flex>
		</Toolbar>
	</AppBar>
);
