import { Button, MenuList, MenuListItem, Separator } from "react95";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Text } from "@/components/Styled";

import LogoutIcon from "pixelarticons/svg/logout.svg?react";
import ClockIcon from "pixelarticons/svg/clock.svg";
import ReactLogo from "@/assets/icons/react.svg?react";

import styles from "./StartButton.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SVGIcon } from "../SVGIcon";

export function StartButton() {
	const { t } = useTranslation("menu");
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
						<SVGIcon disabled marginRight src={ClockIcon} alt='clock icon' /> In Progress
					</MenuListItem>

					<Separator />

					<MenuListItem onClick={() => window.close()}>
						<LogoutIcon height={24} />
						{t("nav.logout")}
					</MenuListItem>
				</MenuList>
			)}
		</div>
	);
}
