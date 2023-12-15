import type { ButtonProps } from "react95";

import { Button } from "react95";
import useSound from "use-sound";

import ClickSound from "@/assets/audio/click.mp3";

export function AudioButton(props: ButtonProps) {
	const [play] = useSound(ClickSound);

	return (
		<Button
			{...props}
			onClick={(e) => {
				play();
				props.onClick?.(e);
			}}
		/>
	);
}
