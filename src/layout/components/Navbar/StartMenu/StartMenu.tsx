import { MenuList, MenuListItem, Separator } from "react95";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";
import ClickAwayListener from "react-click-away-listener";

import { setBodyLoadingState } from "@/utils/setBodyLoadingState";
import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/config/storage";
import { soundAtom } from "@/stores/soundAtom";

import ClockIcon from "pixelarticons/svg/clock.svg?react";
import W98Key from "@/assets/icons/w98_key.ico";
import ShutdownIcon from "@/assets/icons/shutdown.ico";
import LogoffSound from "@/assets/audio/logoff.mp3";

import { SVGIcon } from "@/components/SVGIcon";
import { ListItem } from "./ListItem/ListItem";

import styles from "../StartButton.module.scss";

export function StartMenu({ onClose }: { onClose: () => void }) {
	const { t } = useTranslation("menu");
	const { setIsLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const [sound] = useAtom(soundAtom);
	const [playLogoff] = useSound(LogoffSound, { volume: 0.25, soundEnabled: sound.enabled });

	const onClickLogout = () => {
		playLogoff();
		navigate("/");
		setIsLoggedIn(false);
		setBodyLoadingState("true");
		localStorage.setItem(isLoggedOutKey, "true");
	};

	const onClickShutdown = () => {
		// TODO: Implement a confirmation dialog before actually shutting down
		document.documentElement.innerHTML = "";
		document.body.style.backgroundColor = "black";
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key.toLowerCase()) {
				case "Escape":
					onClose();
					break;
				case "l":
					onClose();
					onClickLogout();
					break;
				case "u":
					onClose();
					onClickShutdown();
					break;
				default:
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<ClickAwayListener onClickAway={onClose}>
			<MenuList className={styles.list} onClick={onClose}>
				<MenuListItem disabled aria-disabled>
					<SVGIcon disabled marginRight Icon={ClockIcon} /> In Progress
				</MenuListItem>

				{/* TODO: Add meta information (the stack used to build this - libraries etc.) */}
				{/* TODO: Add "volume-3" & "volume-x" pixelart icons to toggle app-wide sound on or off */}

				<Separator />

				<ListItem onClick={onClickLogout} iconSrc={W98Key} hotkeyLetterIndex={0}>
					{t("nav.logout")}
				</ListItem>

				<ListItem onClick={onClickShutdown} iconSrc={ShutdownIcon} hotkeyLetterIndex={2}>
					{t("nav.shutdown")}
				</ListItem>
			</MenuList>
		</ClickAwayListener>
	);
}
