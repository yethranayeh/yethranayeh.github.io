import type { ButtonProps } from "react95";

import { Button } from "react95";
import { useNavigate } from "react-router-dom";

import styles from "./CloseButton.module.scss";

export function CloseButton(props: ButtonProps) {
	const navigate = useNavigate();
	const returnToHomePage = () => navigate("/");

	return (
		<Button onClick={returnToHomePage} onTouchEnd={returnToHomePage} {...props}>
			<span className={styles.icon} />
		</Button>
	);
}
