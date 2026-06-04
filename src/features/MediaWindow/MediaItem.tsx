import ClickAwayListener from "react-click-away-listener";
import clsx from "clsx";

import { useSelectableItem } from "@/hooks/useSelectableItem";
import { Flex } from "@/components/Styled";
import { ImgIcon } from "@/components/ImgIcon";

import styles from "./MediaItem.module.scss";

interface MediaItemProps {
  name: string;
  onDoubleClick: () => void;
  iconSrc: string;
}

export function MediaItem({ name, onDoubleClick, iconSrc }: MediaItemProps) {
  const { isSelected, onSelect, onDeselect } = useSelectableItem();

  return (
    <ClickAwayListener onClickAway={onDeselect}>
      <Flex
        direction="column"
        align="center"
        gap={4}
        className={clsx(styles.container, isSelected && styles.selected)}
        onClick={onSelect}
        onDoubleClick={onDoubleClick}
      >
        <ImgIcon src={iconSrc} size={32} />
        <span className={styles.name}>{name}</span>
      </Flex>
    </ClickAwayListener>
  );
}
