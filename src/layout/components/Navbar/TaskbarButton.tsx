import { AudioButton } from "@/components/AudioButton";
import { ImgIcon } from "@/components/ImgIcon";

import styles from "./WindowTabs.module.scss";

interface TaskbarButtonProps {
	text: string;
	onClick: () => void;
	isActive?: boolean;
	iconSrc?: string;
}

export function TaskbarButton({ onClick, isActive, iconSrc, text }: TaskbarButtonProps) {
	return (
		<AudioButton active={isActive} onClick={onClick} className={styles.button}>
			{iconSrc && <ImgIcon src={iconSrc} />}
			{text}
		</AudioButton>
	);
}
