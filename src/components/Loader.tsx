import { useEffect, useState } from "react";
import { ProgressBar } from "react95";

import styles from "./Loader.module.scss";

const interval = 50;

export function Loader() {
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setPercent((previousPercent) => {
				if (previousPercent === 100) {
					return 0;
				}
				const diff = Math.random() * 10;
				return Math.min(previousPercent + diff, 100);
			});
		}, interval);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={styles.loader}>
			<ProgressBar variant='tile' value={Math.floor(percent)} />
		</div>
	);
}
