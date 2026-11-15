import ClickAwayListener from "react-click-away-listener";
import clsx from "clsx";

import { useSelectableItem } from "@/hooks/useSelectableItem";
import { Flex, Text } from "./Styled";
import { ImgIcon } from "./ImgIcon";

import styles from "./DesktopIcon.module.scss";

const isTouchDevice =
  typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export interface DesktopIconProps {
  id: string;
  title: string;
  iconSrc: string;
  onOpen: () => void;
  /** Label box size, for file names longer than a normal icon caption. */
  boxWidth?: number;
  boxHeight?: number;
}

// TODO: add Draggable with "grid" prop allow dragging icons on desktop grid
export default function DesktopIcon({
  title,
  iconSrc,
  onOpen,
  boxWidth = 75,
  boxHeight = 75,
}: DesktopIconProps) {
  "use memo";
  const { isSelected, onSelect, onDeselect } = useSelectableItem();

  return (
    <ClickAwayListener onClickAway={onDeselect}>
      <Flex
        direction="column"
        role="button"
        tabIndex={0}
        aria-label={title}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen();
          }
        }}
        onDoubleClick={!isTouchDevice ? onOpen : undefined}
        onClick={isTouchDevice ? onOpen : onSelect}
        align="center"
        gap={4}
        style={{ height: boxHeight, width: boxWidth }}
        className={clsx("no-select", styles.icon, isSelected && styles.selected)}
      >
        <ImgIcon strictSizing src={iconSrc} size={48} alt={title} />
        <Text
          light
          variant="small"
          style={{
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </Flex>
    </ClickAwayListener>
  );
}
