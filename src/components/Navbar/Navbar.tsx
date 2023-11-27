import { AppBar, Handle, Toolbar } from "react95";

import { StartButton } from "./StartButton";
import { LanguageSelect } from "./LanguageSelect";
import Flex from "@/components/Styled/Flex";
import { WindowTabs } from "./WindowTabs";

import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav>
			<AppBar className={styles.container}>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<Flex gap={8}>
						<Flex gap={8}>
							<StartButton />
							<Handle size={35} />
						</Flex>

						<WindowTabs />
					</Flex>

					<Flex gap={8}>
						<Handle size={35} />
						<LanguageSelect />
					</Flex>
				</Toolbar>
			</AppBar>
		</nav>
	);
}
