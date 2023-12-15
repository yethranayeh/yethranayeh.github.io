import { MenuList, MenuListItem, Separator } from "react95";

import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { setBodyLoadingState } from "@/utils/setBodyLoadingState";

import { AudioButton } from "@/components/AudioButton";
import { Text } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";

import { AuthContext } from "@/context/AuthContext";

import LogoutIcon from "pixelarticons/svg/logout.svg?react";
import ClockIcon from "pixelarticons/svg/clock.svg?react";
import ReactLogo from "@/assets/icons/react.svg?react";

import LogoffSound from "@/assets/audio/logoff.mp3";

import styles from "./StartButton.module.scss";

import { isLoggedOutKey } from "@/constants/storage";

export function StartButton() {
	const { t } = useTranslation("menu");
	const { setIsLoggedIn } = useContext(AuthContext);
	const [playLogoff] = useSound(LogoffSound, { volume: 0.25 });
	const navigate = useNavigate();
	const biggerThanSm = useMediaQuery("sm");

	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<AudioButton onClick={() => setOpen(!open)} active={open}>
				<ReactLogo className={styles.reactIcon} />
				{biggerThanSm && <Text>{t("nav.start")}</Text>}
			</AudioButton>
			{open && (
				<MenuList className={styles.list} onClick={() => setOpen(false)}>
					<MenuListItem disabled aria-disabled>
						<SVGIcon disabled marginRight Icon={ClockIcon} /> In Progress
					</MenuListItem>

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
			)}
		</div>
	);
}
