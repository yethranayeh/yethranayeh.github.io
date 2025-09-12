import { Frame, MenuList, MenuListItem, Separator } from "react95";
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

import W98Book from "@/assets/icons/w98_book.ico";
import W98Key from "@/assets/icons/w98_key.ico";
import ShutdownIcon from "@/assets/icons/shutdown.ico";
import LogoffSound from "@/assets/audio/logoff.mp3";

import { SVGIcon } from "@/components/SVGIcon";
import { ListItem } from "./ListItem/ListItem";

import styles from "../StartButton.module.scss";
import { closeModalAtom, openModalAtom } from "@/stores/modalAtom";
import { ShutdownDialogContent } from "./ShutdownDialogContent";
import HelpDialogContent from "./HelpDialogContent";

// FIXME: add alternating logic for hotkeys when language changes
export function StartMenu({ onClose }: { onClose: () => void }) {
	const { t } = useTranslation("menu");
	const { setIsLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const [sound] = useAtom(soundAtom);
	const [playLogoff] = useSound(LogoffSound, { volume: 0.25, soundEnabled: sound.enabled });

	// TODO: refactor general modal handling
	const [_, openModal] = useAtom(openModalAtom);
	const [__, closeModal] = useAtom(closeModalAtom);

	const onClickHelp = () =>
		openModal({
			title: t("nav.help"),
			content: <HelpDialogContent />
		});

	const onClickLogout = () => {
		playLogoff();
		navigate("/");
		setIsLoggedIn(false);
		setBodyLoadingState("true");
		localStorage.setItem(isLoggedOutKey, "true");
	};

	const onClickShutdown = () =>
		openModal({
			title: t("content:shutdown.title"),
			content: (
				<ShutdownDialogContent
					onConfirm={(choice) => {
						if (choice === "shutdown") {
							document.documentElement.innerHTML = "";
							document.body.style.backgroundColor = "black";
						} else if (choice === "restart") {
							window.location.reload();
						}
					}}
					onCancel={closeModal}
				/>
			)
		});

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// TODO: refactor to reduce code duplication
			switch (event.key.toLowerCase()) {
				case "Escape":
					onClose();
					break;
				case "h":
					onClose();
					onClickHelp();
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
				<ListItem onClick={onClickHelp} iconSrc={W98Book} iconSize={24} hotkeyLetterIndex={0}>
					{t("nav.help")}
				</ListItem>

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
