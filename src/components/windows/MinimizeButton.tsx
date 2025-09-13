import type { ButtonProps } from "react95";
import { WindowButton } from "./WindowButton";
import styles from "./MinimizeButton.module.scss";

export const MinimizeButton = ({ onClick, ...props }: Omit<ButtonProps, "children">) => (
	<WindowButton {...props}>
		<span className={styles.icon} />
	</WindowButton>
);
