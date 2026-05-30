import { AppBar, Frame, Handle, Toolbar } from "react95";

import Flex from "@/components/Styled/Flex";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { StartButton } from "./StartButton";
import { WindowTabs } from "./WindowTabs";
import { AudioToggle } from "./AudioToggle";
import { LanguageSelect } from "./LanguageSelect";
import { CurrentTime } from "./CurrentTime";
import { BatteryIndicator } from "./BatteryIndicator";
import { MobileOverflowMenu } from "./MobileOverflowMenu";

import styles from "./Navbar.module.scss";

const trayStyle = { height: 35, display: "flex", alignItems: "center" } as const;

export const Navbar = () => {
  const biggerThanSm = useMediaQuery("sm");

  return (
    <AppBar as="nav" className={styles.container}>
      <Toolbar className={styles.toolbar}>
        <Flex gap={4} sx={{ marginRight: 4, flexShrink: 0 }}>
          <StartButton />
          <Handle size={35} />
        </Flex>

        <WindowTabs />

        <Flex gap={4} sx={{ marginLeft: "auto", flexShrink: 0 }}>
          <Handle size={35} />
          {biggerThanSm ? (
            <Frame variant="well" style={trayStyle}>
              <Flex gap={8} align="center" sx={{ padding: "0 8px" }}>
                <AudioToggle />
                <LanguageSelect />
                <CurrentTime />
                <BatteryIndicator />
              </Flex>
            </Frame>
          ) : (
            <Frame variant="well" style={trayStyle}>
              <Flex gap={2} align="center" sx={{ padding: "0 8px" }}>
                <CurrentTime />
                <MobileOverflowMenu />
              </Flex>
            </Frame>
          )}
        </Flex>
      </Toolbar>
    </AppBar>
  );
};
