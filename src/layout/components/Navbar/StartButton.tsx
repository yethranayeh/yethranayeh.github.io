import { useTranslation } from "react-i18next";
import { useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Text } from "@/components/Styled";
import { AudioButton } from "@/components/AudioButton";
import { StartMenu } from "./StartMenu/StartMenu";

import ReactLogo from "@/assets/icons/react.svg?react";

import styles from "./StartButton.module.scss";

export function StartButton() {
	const { t } = useTranslation("menu");
	const biggerThanSm = useMediaQuery("sm");
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<AudioButton onClick={() => setOpen(!open)} active={open} style={{ padding: "0 10px" }}>
				<ReactLogo className={styles.reactIcon} />
				{biggerThanSm && <Text>{t("nav.start")}</Text>}
			</AudioButton>

			{open && <StartMenu onClose={() => setOpen(false)} />}
		</div>
	);
}
