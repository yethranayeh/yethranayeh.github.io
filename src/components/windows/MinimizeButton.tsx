import type { ButtonProps } from "react95";

import { AudioButton } from "@/components/AudioButton";

import styles from "./MinimizeButton.module.scss";

export const MinimizeButton = ({ onClick, ...props }: ButtonProps) => (
	<AudioButton onMouseDown={(e) => e.stopPropagation()} onClick={onClick} onTouchEnd={onClick as any} {...props}>
		<span className={styles.icon} />
	</AudioButton>
);
