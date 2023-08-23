/** @format */

import PixelatedIMG from "@/assets/pixelated.png";
import PixelatedIMGEyesClosed from "@/assets/pixelated_c.png";
import useCounter from "@/hooks/useCounter";
import { useEffect } from "react";
import { Avatar } from "react95";

export default function BlinkingEyes() {
	const { count, increment } = useCounter(0);

	useEffect(() => {
		const interval = setInterval(() => {
			increment();
		}, 150);
		return () => clearInterval(interval);
	}, []);

	return <Avatar size={80} src={count % 10 ? PixelatedIMG : PixelatedIMGEyesClosed} />;
}
