import { useAtom } from "jotai";

import { AudioButton } from "../AudioButton";
import { ImgIcon } from "../ImgIcon";

import { soundAtom } from "@/atoms/soundAtom";

import Volume from "@/assets/icons/Volume.ico";
import Muted from "@/assets/icons/Muted.ico";
import styles from "./AudioToggle.module.scss";

export function AudioToggle() {
	const [sound, setSound] = useAtom(soundAtom);
	return (
		<AudioButton className={styles.button} onClick={() => setSound((prev) => ({ enabled: !prev.enabled }))}>
			<ImgIcon src={sound.enabled ? Volume : Muted} />
		</AudioButton>
	);
}
