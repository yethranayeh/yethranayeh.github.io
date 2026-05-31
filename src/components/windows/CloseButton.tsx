import type { ButtonProps } from "react95";
import { WindowButton } from "./WindowButton";
import { WindowIcon } from "@/components/WindowIcon";

export const CloseButton = (props: Omit<ButtonProps, "children">) => (
  <WindowButton {...props}>
    <WindowIcon type="close" />
  </WindowButton>
);
