import type { ButtonProps } from "react95";
import type { CSSProperties, ComponentProps, PropsWithChildren } from "react";

import { useRef } from "react";
import Draggable from "react-draggable";
import { Window, WindowHeader } from "react95";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Flex } from "../Styled";
import { WindowTitleText } from "./WindowTitleText";
import { MinimizeButton } from "./MinimizeButton";
import { CloseButton } from "./CloseButton";

import styles from "./Window.module.scss";

export type DraggableWindowProps = PropsWithChildren<{
  title: string;
  slotProps?: {
    draggable?: ComponentProps<typeof Draggable>;
    window?: ComponentProps<typeof Window>;
    header?: ComponentProps<typeof WindowHeader>;
    minimizeButton?: ButtonProps;
    closeButton?: ButtonProps;
  };
}>;

export const DraggableWindow = ({ title, slotProps, children }: DraggableWindowProps) => {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  // On mobile strip width-related inline styles so the CSS full-screen override can take effect.
  // (inline styles win over class styles, so we must remove them in JS)
  const baseStyle: CSSProperties = slotProps?.window?.style ?? {};
  const windowStyle: CSSProperties = isMobile
    ? (({ minWidth: _mw, maxWidth: _xw, width: _w, ...rest }) => rest as CSSProperties)(baseStyle)
    : baseStyle;

  return (
    <Draggable
      defaultPosition={{ x: 50, y: 100 }}
      {...slotProps?.draggable}
      // On mobile: lock at (0,0) so position:fixed CSS takes full control, and disable dragging
      {...(isMobile && { defaultPosition: { x: 0, y: 0 }, disabled: true })}
      bounds="main"
      handle={"." + styles.header}
      nodeRef={windowRef}
    >
      <Window
        ref={windowRef}
        data-testid={`window-${title}`}
        className={styles.window}
        {...slotProps?.window}
        style={windowStyle}
      >
        <WindowHeader className={styles.header} {...slotProps?.header}>
          <WindowTitleText>{title}</WindowTitleText>
          <Flex gap={4}>
            {/**
             * The Windows 95 UI strangely separates the close button from the minimize and maximize buttons.
             * The minimize and maximize buttons have no space,
             * 	but the close button has a small space to its left.
             */}
            <Flex>
              {slotProps?.minimizeButton && <MinimizeButton {...slotProps.minimizeButton} />}
            </Flex>
            <CloseButton {...slotProps?.closeButton} />
          </Flex>
        </WindowHeader>

        {children}
      </Window>
    </Draggable>
  );
};
