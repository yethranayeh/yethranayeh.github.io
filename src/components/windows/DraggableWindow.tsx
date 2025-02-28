import type { ButtonProps } from "react95";
import type { ComponentProps, PropsWithChildren } from "react";

import Draggable from "react-draggable";
import { Window, WindowHeader } from "react95";

import { WindowTitleText } from "./WindowTitleText";
import { CloseButton } from "../CloseButton";

import styles from "./Window.module.scss";

type Props = PropsWithChildren<{
	title: string;
	WindowProps?: ComponentProps<typeof Window>;
	HeaderProps?: ComponentProps<typeof WindowHeader>;
	CloseButtonProps?: ButtonProps;
}>;

export const DraggableWindow = ({ title, WindowProps, HeaderProps, CloseButtonProps, children }: Props) => (
	<Draggable bounds='main' handle={"." + styles.header}>
		<Window className={styles.window} {...WindowProps}>
			<WindowHeader className={styles.header} {...HeaderProps}>
				<WindowTitleText>{title}</WindowTitleText>
				<CloseButton {...CloseButtonProps} />
			</WindowHeader>

			{children}
		</Window>
	</Draggable>
);
