import type { ButtonProps } from "react95";

import { AudioButton } from "@/components/AudioButton";

import styles from "./CloseButton.module.scss";

export const WindowButton = ({ onClick, children, ...props }: ButtonProps) => (
	<AudioButton onMouseDown={(e) => e.stopPropagation()} onClick={onClick} onTouchEnd={onClick as any} {...props}>
		{children}
	</AudioButton>
);
