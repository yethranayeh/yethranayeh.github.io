import { Flex, Text } from "./Styled";
import { ImgIcon } from "./ImgIcon";

const isTouchDevice =
  typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export interface DesktopIconProps {
  id: string;
  title: string;
  iconSrc: string;
  onOpen: () => void;
}

// TODO: add highlight state on single click. @see: Apps content
// TODO: add Draggable with "grid" prop allow dragging icons on desktop grid
export default function DesktopIcon({ title, iconSrc, onOpen }: DesktopIconProps) {
  "use memo";
  return (
    <Flex
      direction="column"
      onDoubleClick={!isTouchDevice ? onOpen : undefined}
      onClick={isTouchDevice ? onOpen : undefined}
      align="center"
      gap={4}
      style={{ cursor: "pointer", height: 75, width: 75 }}
      className="no-select"
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
  );
}
