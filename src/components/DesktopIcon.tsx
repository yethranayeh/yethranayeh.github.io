import React from "react";
import { Flex, Text } from "./Styled";
import { ImgIcon } from "./ImgIcon";

export interface DesktopIconProps {
	id: string;
	title: string;
	iconSrc: string;
	onDoubleClick: () => void;
}

// TODO: add highlight state on single click. @see: Apps content
// TODO: add Draggable with "grid" prop allow dragging icons on desktop grid
export default function DesktopIcon({ title, iconSrc, onDoubleClick }: DesktopIconProps) {
	return (
		<Flex direction='column' onDoubleClick={onDoubleClick} align='center' gap={4} style={{ cursor: "pointer" }}>
			<ImgIcon src={iconSrc} size={48} />
			<Text light variant='small'>
				{title}
			</Text>
		</Flex>
	);
}
