import type { ButtonProps } from "react95";
import type { CSSProperties, ComponentProps, PropsWithChildren } from "react";

import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { Window, WindowHeader } from "react95";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Flex } from "../Styled";
import { WindowTitleText } from "./WindowTitleText";
import { MinimizeButton } from "./MinimizeButton";
import { CloseButton } from "./CloseButton";
import { HelpButton } from "./HelpButton";
import { HelpBubble } from "./HelpBubble";

import styles from "./Window.module.scss";

export type DraggableWindowProps = PropsWithChildren<{
  title: string;
  helpText?: string;
  slotProps?: {
    draggable?: ComponentProps<typeof Draggable>;
    window?: ComponentProps<typeof Window>;
    header?: ComponentProps<typeof WindowHeader>;
    minimizeButton?: ButtonProps;
    closeButton?: ButtonProps;
    helpButton?: ButtonProps;
  };
}>;

export const DraggableWindow = ({ title, helpText, slotProps, children }: DraggableWindowProps) => {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const [showHelp, setShowHelp] = useState(false);

  const baseStyle: CSSProperties = slotProps?.window?.style ?? {};
  const windowStyle: CSSProperties = isMobile
    ? (({ minWidth: _mw, maxWidth: _xw, width: _w, ...rest }) => rest as CSSProperties)(baseStyle)
    : baseStyle;

  return (
    <Draggable
      defaultPosition={{ x: 50, y: 100 }}
      {...slotProps?.draggable}
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
            {helpText && (
              <div className={styles.helpContainer}>
                <HelpButton
                  onClick={() => setShowHelp((prev) => !prev)}
                  {...slotProps?.helpButton}
                />
                {showHelp && <HelpBubble text={helpText} onDismiss={() => setShowHelp(false)} />}
              </div>
            )}
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
