import type { FunctionComponent, SVGProps } from "react";

/**
 * Window title bar button icons sourced from react95:
 * https://github.com/React95/React95/tree/master/packages/core/components/TitleBar/
 *
 * To add new icons, place an SVG file in src/assets/icons/ and import it here.
 */

import CloseIcon from "@/assets/icons/window-close.svg?react";
import MinimizeIcon from "@/assets/icons/window-minimize.svg?react";
import MaximizeIcon from "@/assets/icons/window-maximize.svg?react";
import RestoreIcon from "@/assets/icons/window-restore.svg?react";
import HelpIcon from "@/assets/icons/window-help.svg?react";

type WindowIconType = "close" | "minimize" | "maximize" | "restore" | "help";

type WindowIconProps = {
  type: WindowIconType;
  size?: number;
};

const ICON_MAP: Record<WindowIconType, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  close: CloseIcon,
  minimize: MinimizeIcon,
  maximize: MaximizeIcon,
  restore: RestoreIcon,
  help: HelpIcon,
};

export const WindowIcon = ({ type, size = 10 }: WindowIconProps) => {
  const Icon = ICON_MAP[type];
  return <Icon width={size} height={size} aria-hidden="true" />;
};
