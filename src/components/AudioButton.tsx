import type { ButtonProps } from "react95";

import { Button } from "react95";
import { useAtom } from "jotai";
import useSound from "use-sound";

import { soundAtom } from "@/stores/soundAtom";

import ClickSound from "@/assets/audio/click.mp3";

export function AudioButton(props: ButtonProps) {
	const [sound] = useAtom(soundAtom);
	const [play] = useSound(ClickSound, { soundEnabled: sound.enabled });

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
