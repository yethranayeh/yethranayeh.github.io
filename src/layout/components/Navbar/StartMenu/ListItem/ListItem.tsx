import type { PropsWithChildren } from "react";
import { MenuListItem } from "react95";
import { ListItemContent } from "./ListItemContent";
import { ImgIcon } from "@/components/ImgIcon";

interface Props extends PropsWithChildren {
	onClick: () => void;
	iconSrc: string;
	hotkeyLetterIndex?: number;
}

export function ListItem({ onClick, iconSrc, hotkeyLetterIndex, children }: Props) {
	return (
		<MenuListItem onClick={onClick}>
			<ListItemContent Icon={<ImgIcon src={iconSrc} size={32} />} hotkeyLetterIndex={hotkeyLetterIndex}>
				{children}
			</ListItemContent>
		</MenuListItem>
	);
}
