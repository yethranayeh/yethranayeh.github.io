import { useEffect } from "react";
import { Avatar } from "react95";

import useCounter from "@/hooks/useCounter";

import PixelatedIMG from "@/assets/pixelated.png";
import PixelatedIMGEyesClosed from "@/assets/pixelated_c.png";

export function BlinkingEyesAvatar({ avatarSize = 80 }: { avatarSize?: number }) {
	// TODO: switch to GIF or webp?
	const { count, increment } = useCounter(0);

	useEffect(() => {
		const interval = setInterval(() => {
			increment();
		}, 150);
		return () => clearInterval(interval);
	}, []);

	return (
		<Avatar
			size={avatarSize}
			src={count % 10 ? PixelatedIMG : PixelatedIMGEyesClosed}
			style={{ pointerEvents: "none" }}
		/>
	);
}
