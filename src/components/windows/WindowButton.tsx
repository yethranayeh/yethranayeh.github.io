import type { ButtonProps } from "react95";

import { AudioButton } from "@/components/AudioButton";

import styles from "./WindowButton.module.scss";

export const WindowButton = ({ onClick, children, ...props }: ButtonProps) => (
  <AudioButton
    className={styles.button}
    onMouseDown={(e) => e.stopPropagation()}
    onClick={onClick}
    onTouchEnd={(e) => { e.preventDefault(); (onClick as any)?.(e); }}
    {...props}
  >
    {children}
  </AudioButton>
);
