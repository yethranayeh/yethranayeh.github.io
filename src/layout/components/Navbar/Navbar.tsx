import { AppBar, Frame, Handle, Toolbar } from "react95";

import Flex from "@/components/Styled/Flex";
import { StartButton } from "./StartButton";
import { WindowTabs } from "./WindowTabs";
import { AudioToggle } from "./AudioToggle";
import { LanguageSelect } from "./LanguageSelect";
import { CurrentTime } from "./CurrentTime";

import styles from "./Navbar.module.scss";
import { BatteryIndicator } from "./BatteryIndicator";

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
				<Frame variant='well' style={{ height: 35, display: "flex", alignItems: "center" }}>
					<Flex gap={8} align='center' sx={{ padding: "0 8px" }}>
						<AudioToggle />
						<LanguageSelect />
						<CurrentTime />
						<BatteryIndicator />
					</Flex>
				</Frame>
			</Flex>
		</Toolbar>
	</AppBar>
);
