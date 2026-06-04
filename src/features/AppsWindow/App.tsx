import ClickAwayListener from "react-click-away-listener";
import clsx from "clsx";

import { useSelectableItem } from "@/hooks/useSelectableItem";
import { Flex } from "@/components/Styled";
import { ImgIcon } from "@/components/ImgIcon";

import styles from "./App.module.scss";

interface AppProps {
  name: string;
  onDoubleClick: () => void;
  iconSrc: string;
}

export function App({ name, onDoubleClick, iconSrc }: AppProps) {
  "use memo";
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
        <span className={styles.name}>{`${name}.exe`}</span>
      </Flex>
    </ClickAwayListener>
  );
}
