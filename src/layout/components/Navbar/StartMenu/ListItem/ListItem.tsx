import type { PropsWithChildren } from "react";
import { MenuListItem } from "react95";
import { ListItemContent } from "./ListItemContent";
import { ImgIcon } from "@/components/ImgIcon";

interface Props extends PropsWithChildren {
	onClick: () => void;
	iconSrc: string;
	iconSize?: number;
	hotkeyLetterIndex?: number;
}

export function ListItem({ onClick, iconSrc, iconSize = 32, hotkeyLetterIndex, children }: Props) {
	return (
		<MenuListItem onClick={onClick}>
			<ListItemContent Icon={<ImgIcon src={iconSrc} size={iconSize} />} hotkeyLetterIndex={hotkeyLetterIndex}>
				{children}
			</ListItemContent>
		</MenuListItem>
	);
}
