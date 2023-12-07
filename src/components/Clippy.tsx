// https://codepen.io/Jemimaabu/pen/BaOLPby
import { useEffect, useState } from "react";

import BikeIn from "@/assets/clippy/bike_in.gif";
import Stationary from "@/assets/clippy/stationary.gif";

import styles from "./Clippy.module.scss";

const delay = 1000;

export function Clippy() {
	const [shouldRender, setShouldRender] = useState(false);
	const [currentSrc, setCurrentSrc] = useState(BikeIn);

	useEffect(() => {
		const timeout = setTimeout(() => setShouldRender(true), delay);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => setCurrentSrc(Stationary), 3500);

		if (!shouldRender) {
			clearTimeout(timeout);
		}

		return () => clearTimeout(timeout);
	}, [shouldRender]);

	if (!shouldRender) {
		return null;
	}

	return <img src={currentSrc} className={styles.clippy} title='Clippy' alt='Microsoft Clippy animation' />;
}
