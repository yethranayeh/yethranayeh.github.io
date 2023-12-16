// https://codepen.io/Jemimaabu/pen/BaOLPby
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import BikeIn from "@/assets/clippy/bike_in.gif";
import BikeOut from "@/assets/clippy/bike_out.gif";
import Atom from "@/assets/clippy/atom.gif";
import Dozing from "@/assets/clippy/dozing.gif";
import Grinder from "@/assets/clippy/grinder.gif";
import Laze from "@/assets/clippy/laze.gif";
import ListeningToMusic from "@/assets/clippy/listening_music.gif";
import LookingDown from "@/assets/clippy/looking_down.gif";
import Stationary from "@/assets/clippy/stationary.gif";
import TappingScreen from "@/assets/clippy/tapping_screen.gif";
import Thinking from "@/assets/clippy/thinking.gif";

import styles from "./Clippy.module.scss";

const initialRenderDelay = 1000;

type ClippyStateObj<T> = Record<T extends string ? T : string, { src: string; duration: number }>;
type TransitionState = "stationary" | "bikeIn" | "bikeOut";
type CycleState = "atom" | "dozing" | "laze" | "music" | "grinder" | "tapping" | "thinking";

const transitionState: ClippyStateObj<TransitionState> = {
	stationary: { src: Stationary, duration: 4000 },
	bikeIn: { src: BikeIn, duration: 3500 },
	bikeOut: { src: BikeOut, duration: 4000 }
};
const cycleState: ClippyStateObj<CycleState> = {
	atom: { src: Atom, duration: 4500 },
	dozing: { src: Dozing, duration: 7500 },
	laze: { src: Laze, duration: 13800 },
	music: { src: ListeningToMusic, duration: 5400 },
	grinder: { src: Grinder, duration: 8400 },
	tapping: { src: TappingScreen, duration: 2500 },
	thinking: { src: Thinking, duration: 1900 }
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
	const isTransitioning = currentState.src === BikeIn || currentState.src === BikeOut

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
				src={isHovered ? LookingDown : currentState.src}
				className={styles.clippy}
				title='Clippy'
				alt='Microsoft Clippit animation'
				onMouseEnter={() => !isTransitioning && setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onTouchStart={() => !isTransitioning && setIsHovered(true)}
				onTouchEnd={() => setIsHovered(false)}
			/>
		</div>
	);
}
