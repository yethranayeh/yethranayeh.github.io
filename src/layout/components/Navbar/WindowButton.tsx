import { AudioButton } from "@/components/AudioButton";
import { ImgIcon } from "@/components/ImgIcon";

import styles from "./WindowTabs.module.scss";

interface WindowButtonProps {
	text: string;
	onClick: () => void;
	isActive?: boolean;
	iconSrc?: string;
}

export function WindowButton({ onClick, isActive, iconSrc, text }: WindowButtonProps) {
	return (
		<AudioButton active={isActive} onClick={onClick} className={styles.button}>
			{iconSrc && <ImgIcon src={iconSrc} />}
			{text}
		</AudioButton>
	);
}
