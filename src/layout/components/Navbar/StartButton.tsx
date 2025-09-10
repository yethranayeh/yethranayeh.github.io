import { useTranslation } from "react-i18next";

import { useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { AudioButton } from "@/components/AudioButton";
import { Text } from "@/components/Styled";

import ReactLogo from "@/assets/icons/react.svg?react";

import styles from "./StartButton.module.scss";
import { StartMenu } from "./StartMenu/StartMenu";

export function StartButton() {
	const { t } = useTranslation("menu");
	const biggerThanSm = useMediaQuery("sm");
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<AudioButton onClick={() => setOpen(!open)} active={false} style={{ padding: "0 10px" }}>
				<ReactLogo className={styles.reactIcon} />
				{biggerThanSm && <Text>{t("nav.start")}</Text>}
			</AudioButton>
			{open && <StartMenu onClose={() => setOpen(false)} />}
		</div>
	);
}
