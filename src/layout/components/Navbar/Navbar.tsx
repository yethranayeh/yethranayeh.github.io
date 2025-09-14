import { AppBar, Frame, Handle, Toolbar } from "react95";

import Flex from "@/components/Styled/Flex";
import { StartButton } from "./StartButton";
import { WindowTabs } from "./WindowTabs";
import { AudioToggle } from "./AudioToggle";
import { LanguageSelect } from "./LanguageSelect";
import { CurrentTime } from "./CurrentTime";

import styles from "./Navbar.module.scss";
import { BatteryIndicator } from "./BatteryIndicator";

(navigator as any)?.getBattery().then((battery: any) => {
	console.log("🚀 ~ battery:", battery);
	// You can use the battery object here
	console.log("Battery level:", battery.level * 100 + "%");
});

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
