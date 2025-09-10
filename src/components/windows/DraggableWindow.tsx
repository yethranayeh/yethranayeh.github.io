import type { ButtonProps } from "react95";
import type { ComponentProps, PropsWithChildren } from "react";

import { useRef } from "react";
import Draggable from "react-draggable";
import { Window, WindowHeader } from "react95";

import { WindowTitleText } from "./WindowTitleText";
import { CloseButton } from "../CloseButton";

import styles from "./Window.module.scss";

type Props = PropsWithChildren<{
	title: string;
	slotProps?: {
		window?: ComponentProps<typeof Window>;
		header?: ComponentProps<typeof WindowHeader>;
		closeButton?: ButtonProps;
	};
}>;

export const DraggableWindow = ({ title, slotProps, children }: Props) => {
	const windowRef = useRef<HTMLDivElement | null>(null);
	return (
		<Draggable bounds='main' handle={"." + styles.header} nodeRef={windowRef}>
			<Window ref={windowRef} className={styles.window} {...slotProps?.window}>
				<WindowHeader className={styles.header} {...slotProps?.header}>
					<WindowTitleText>{title}</WindowTitleText>
					<CloseButton {...slotProps?.closeButton} />
				</WindowHeader>

				{children}
			</Window>
		</Draggable>
	);
};
