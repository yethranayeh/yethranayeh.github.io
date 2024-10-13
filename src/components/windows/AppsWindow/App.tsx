import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import clsx from "clsx";

import { Flex } from "@/components/Styled";
import { ImgIcon } from "@/components/ImgIcon";

import ProgramIcon from "@/assets/icons/Program.ico";

import styles from "./App.module.scss";

interface AppProps {
	name: string;
	onDoubleClick: Function;
	iconSrc?: string;
}

export function App({ name, onDoubleClick, iconSrc }: AppProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<ClickAwayListener onClickAway={() => setIsFocused(false)}>
			<Flex
				direction='column'
				align='center'
				gap={4}
				className={clsx(styles.container, isFocused && styles.focused)}
				onClick={(e) => {
					setIsFocused(true);

					if (e.detail === 2) {
						onDoubleClick();
					}
				}}>
				<ImgIcon src={iconSrc ?? ProgramIcon} size={32} />
				<span className={styles.name}>{`${name}.exe`}</span>
			</Flex>
		</ClickAwayListener>
	);
}
