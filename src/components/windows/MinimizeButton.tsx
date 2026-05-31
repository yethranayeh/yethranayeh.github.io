import type { ButtonProps } from "react95";
import { WindowButton } from "./WindowButton";
import { WindowIcon } from "@/components/WindowIcon";

export const MinimizeButton = (props: Omit<ButtonProps, "children">) => (
  <WindowButton {...props}>
    <WindowIcon type="minimize" />
  </WindowButton>
);
