// https://codepen.io/Jemimaabu/pen/BaOLPby
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Clippy.module.scss";

const initialRenderDelay = 1000;

type ClippyStateObj<T> = Record<T extends string ? T : string, { src: string; duration: number }>;
type TransitionState = "stationary" | "bikeIn" | "bikeOut";
type CycleState = "atom" | "dozing" | "laze" | "music" | "grinder" | "tapping" | "thinking";

const transitionState: ClippyStateObj<TransitionState> = {
	stationary: { src: "/clippy/stationary.gif", duration: 4000 },
	bikeIn: { src: "/clippy/bike_in.gif", duration: 3500 },
	bikeOut: { src: "/clippy/bike_out.gif", duration: 4000 }
};
const cycleState: ClippyStateObj<CycleState> = {
	atom: { src: "/clippy/atom.gif", duration: 4500 },
	dozing: { src: "/clippy/dozing.gif", duration: 7500 },
	laze: { src: "/clippy/laze.gif", duration: 13800 },
	music: { src: "/clippy/listening_music.gif", duration: 5400 },
	grinder: { src: "/clippy/grinder.gif", duration: 8400 },
	tapping: { src: "/clippy/tapping_screen.gif", duration: 2500 },
	thinking: { src: "/clippy/thinking.gif", duration: 1900 }
};

function getRandomClippyState() {
	const stateKeys = Object.keys(cycleState) as Array<CycleState>;

	const selectedKey = stateKeys[Math.floor(Math.random() * stateKeys.length)];

	return cycleState[selectedKey];
}

export function Clippy() {
	const { t } = useTranslation("content");

	const [shouldRender, setShouldRender] = useState(false);
	const [stateCounter, setStateCounter] = useState(-1);
	const [currentState, setCurrentState] = useState<(typeof cycleState)[keyof typeof cycleState]>(
		transitionState.bikeIn
	);
	const [isHovered, setIsHovered] = useState(false);
	const isTransitioning =
		currentState.src === transitionState.bikeIn.src || currentState.src === transitionState.bikeOut.src;

	// Render Clippy riding bike in
	useLayoutEffect(() => {
		const timeout = setTimeout(() => setShouldRender(true), initialRenderDelay);

		return () => clearTimeout(timeout);
	}, []);

	// Switch to stationary state after bike-in animation completes
	useLayoutEffect(() => {
		const timeout = setTimeout(() => setCurrentState(transitionState.stationary), transitionState.bikeIn.duration);

		if (!shouldRender) {
			clearTimeout(timeout);
		}

		return () => clearTimeout(timeout);
	}, [shouldRender]);

	// Switch to random state, after waiting for current state's duration
	useLayoutEffect(() => {
		const isCounterOdd = stateCounter % 2 !== 0;
		const randomState = getRandomClippyState();

		const timeout = setTimeout(() => {
			setCurrentState(isCounterOdd ? transitionState.stationary : randomState);
			setStateCounter((prev) => prev + 1);
		}, currentState.duration);

		if (!shouldRender) {
			clearTimeout(timeout);
		}

		return () => clearTimeout(timeout);
	}, [stateCounter, currentState, shouldRender]);

	if (!shouldRender) {
		return null;
	}

	return (
		<div className={styles.container}>
			{isHovered && <span className={styles.tooltip}>{t("clippy.greeting")}</span>}

			<img
				src={isHovered ? "/clippy/looking_down.gif" : currentState.src}
				className={styles.clippy}
				title='Clippy'
				alt='Microsoft Clippy animation'
				onMouseEnter={() => !isTransitioning && setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onTouchStart={() => !isTransitioning && setIsHovered(true)}
				onTouchEnd={() => setIsHovered(false)}
			/>
		</div>
	);
}
