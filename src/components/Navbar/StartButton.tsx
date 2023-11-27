import { Button, MenuList, MenuListItem, Separator } from "react95";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Text } from "@/components/Styled";

import LogoutIcon from "pixelarticons/svg/logout.svg";
import ClockIcon from "pixelarticons/svg/clock.svg";
import ReactLogo from "@/assets/icons/react.svg";

import styles from "./StartButton.module.scss";

export function StartButton() {
	const { t } = useTranslation("menu");

	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Button onClick={() => setOpen(!open)} active={open}>
				<img src={ReactLogo} className='icon small' alt='react logo as start button icon' />
				<Text>{t("nav.start")}</Text>
			</Button>
			{open && (
				<MenuList className={styles.list} onClick={() => setOpen(false)}>
					<MenuListItem disabled aria-disabled onClick={() => undefined}>
						<img src={ClockIcon} className='icon' alt='clock icon' /> In Progress
					</MenuListItem>

					<Separator />

					<MenuListItem onClick={() => window.close()}>
						<img src={LogoutIcon} className='icon' alt='arrow pointing out of door, a logout icon' /> {t("nav.logout")}
					</MenuListItem>
				</MenuList>
			)}
		</div>
	);
}
