import { Button, MenuList, MenuListItem, Separator } from "react95";

import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Text } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";

import { AuthContext } from "@/context/AuthContext";

import LogoutIcon from "pixelarticons/svg/logout.svg?react";
import ClockIcon from "pixelarticons/svg/clock.svg?react";
import ReactLogo from "@/assets/icons/react.svg?react";

import styles from "./StartButton.module.scss";
import { setBodyLoadingState } from "@/utils/setBodyLoadingState";
import { useNavigate } from "react-router-dom";

export function StartButton() {
	const { t } = useTranslation("menu");
	const { setIsLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const biggerThanSm = useMediaQuery("sm");

	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Button onClick={() => setOpen(!open)} active={open}>
				<ReactLogo className={styles.reactIcon} />
				{biggerThanSm && <Text>{t("nav.start")}</Text>}
			</Button>
			{open && (
				<MenuList className={styles.list} onClick={() => setOpen(false)}>
					<MenuListItem disabled aria-disabled>
						<SVGIcon disabled marginRight Icon={ClockIcon} /> In Progress
					</MenuListItem>

					<Separator />

					<MenuListItem
						onClick={() => {
							navigate("/");
							setIsLoggedIn(false);
							setBodyLoadingState("true");
						}}>
						<LogoutIcon height={24} />
						{t("nav.logout")}
					</MenuListItem>
				</MenuList>
			)}
		</div>
	);
}
