import { MenuList, MenuListItem, Separator } from "react95";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import ClickAwayListener from "react-click-away-listener";

import { setBodyLoadingState } from "@/utils/setBodyLoadingState";
import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/config/storage";
import { soundAtom } from "@/stores/soundAtom";
import { SVGIcon } from "@/components/SVGIcon";

import LogoutIcon from "pixelarticons/svg/logout.svg?react";
import ClockIcon from "pixelarticons/svg/clock.svg?react";
import LogoffSound from "@/assets/audio/logoff.mp3";

import styles from "./StartButton.module.scss";

export function StartMenu({ onClose }: { onClose: () => void }) {
	const { t } = useTranslation("menu");
	const { setIsLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const [sound] = useAtom(soundAtom);
	const [playLogoff] = useSound(LogoffSound, { volume: 0.25, soundEnabled: sound.enabled });

	return (
		<ClickAwayListener onClickAway={onClose}>
			<MenuList className={styles.list} onClick={onClose}>
				<MenuListItem disabled aria-disabled>
					<SVGIcon disabled marginRight Icon={ClockIcon} /> In Progress
				</MenuListItem>

				{/* TODO: Add meta information (the stack used to build this - libraries etc.) */}
				{/* TODO: Add "volume-3" & "volume-x" pixelart icons to toggle app-wide sound on or off */}

				<Separator />

				<MenuListItem
					onClick={() => {
						playLogoff();
						navigate("/");
						setIsLoggedIn(false);
						setBodyLoadingState("true");
						localStorage.setItem(isLoggedOutKey, "true");
					}}>
					<LogoutIcon height={24} />
					{t("nav.logout")}
				</MenuListItem>
			</MenuList>
		</ClickAwayListener>
	);
}
