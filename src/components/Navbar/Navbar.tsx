import { AppBar, Handle, Toolbar } from "react95";

import { StartButton } from "./StartButton";
import { LanguageSelect } from "./LanguageSelect";
import Flex from "@/components/Styled/Flex";
import { WindowTabs } from "./WindowTabs";

import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<AppBar as='nav' className={styles.container}>
			<Toolbar style={{ justifyContent: "space-between" }}>
				<Flex gap={4}>
					<Flex gap={4}>
						<StartButton />
						<Handle size={35} />
					</Flex>

					<WindowTabs />
				</Flex>

				<Flex gap={4} sx={{ marginLeft: 4 }}>
					<Handle size={35} />
					<LanguageSelect />
				</Flex>
			</Toolbar>
		</AppBar>
	);
}
