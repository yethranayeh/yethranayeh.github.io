import type { ButtonProps } from "react95";
import type { ComponentProps, PropsWithChildren } from "react";

import { useRef } from "react";
import Draggable from "react-draggable";
import { Window, WindowHeader } from "react95";

import { Flex } from "../Styled";
import { WindowTitleText } from "./WindowTitleText";
import { MinimizeButton } from "./MinimizeButton";
import { CloseButton } from "./CloseButton";

import styles from "./Window.module.scss";

export type DraggableWindowProps = PropsWithChildren<{
	title: string;
	slotProps?: {
		window?: ComponentProps<typeof Window>;
		header?: ComponentProps<typeof WindowHeader>;
		minimizeButton?: ButtonProps;
		closeButton?: ButtonProps;
	};
}>;

export const DraggableWindow = ({ title, slotProps, children }: DraggableWindowProps) => {
	const windowRef = useRef<HTMLDivElement | null>(null);
	return (
		<Draggable bounds='main' handle={"." + styles.header} nodeRef={windowRef}>
			<Window ref={windowRef} className={styles.window} {...slotProps?.window}>
				<WindowHeader className={styles.header} {...slotProps?.header}>
					<WindowTitleText>{title}</WindowTitleText>
					<Flex gap={4}>
						{/**
						 * The Windows 95 UI strangely separates the close button from the minimize and maximize buttons.
						 * The minimize and maximize buttons have no space,
						 * 	but the close button has a small space to its left.
						 */}
						<Flex>{slotProps?.minimizeButton && <MinimizeButton {...slotProps.minimizeButton} />}</Flex>
						<CloseButton {...slotProps?.closeButton} />
					</Flex>
				</WindowHeader>

				{children}
			</Window>
		</Draggable>
	);
};
