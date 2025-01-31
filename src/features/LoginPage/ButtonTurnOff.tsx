// https://codepen.io/jkantner/pen/oNPRMQY

import { useTranslation } from "react-i18next";

import styles from "./ButtonTurnOff.module.scss";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export function ButtonTurnOff() {
	const { t } = useTranslation("content");
	const polylineRef = useRef<SVGPolylineElement>(null);
	const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

	function handleAnimationEnd() {
		setShouldPlayAnimation(false);
	}

	function handleHover() {
		setShouldPlayAnimation(true);
	}

	useEffect(() => {
		polylineRef.current?.addEventListener("animationend", handleAnimationEnd);

		return () => {
			polylineRef.current?.removeEventListener("animationend", handleAnimationEnd);
		};
	}, []);

	return (
		<button
			className={clsx(styles.button, shouldPlayAnimation && styles.animated)}
			type='button'
			title={t("login-screen.turn-off")}
			aria-label={t("login-screen.turn-off")}
			onFocus={handleHover}
			onMouseOver={handleHover}
			onTouchStart={handleHover}
			onClick={() => window.close()}>
			<svg className={styles.icon} viewBox='0 0 24 24' width='24px' height='24px' aria-hidden='true'>
				<g fill='none' stroke='#fff'>
					<polyline
						ref={polylineRef}
						className={clsx(styles.iconPart, styles.part1, shouldPlayAnimation && styles.animated)}
						strokeWidth='3'
						points='12,7 12,17'
					/>
					<circle
						className={clsx(styles.iconPart, styles.part2, shouldPlayAnimation && styles.animated)}
						cx='12'
						cy='12'
						r='9'
						strokeDasharray='56.549 56.549'
						strokeLinecap='square'
						strokeWidth='2'
						transform='rotate(-90,12,12)'
					/>
				</g>
			</svg>
		</button>
	);
}
