import type { ButtonProps } from "react95";

import { useNavigate } from "react-router-dom";

import { AudioButton } from "@/components/AudioButton";

import styles from "./CloseButton.module.scss";

export function CloseButton(props: ButtonProps) {
	const navigate = useNavigate();
	const returnToHomePage = () => navigate("/");

	return (
		<AudioButton onClick={returnToHomePage} onTouchEnd={returnToHomePage} {...props}>
			<span className={styles.icon} />
		</AudioButton>
	);
}
