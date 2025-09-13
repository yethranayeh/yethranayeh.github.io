import type { ButtonProps } from "react95";
import { WindowButton } from "./WindowButton";
import styles from "./CloseButton.module.scss";

export const CloseButton = (props: Omit<ButtonProps, "children">) => (
	<WindowButton {...props}>
		<span className={styles.icon} />
	</WindowButton>
);
