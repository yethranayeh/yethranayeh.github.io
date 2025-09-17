import { useState, useEffect } from "react";

export const CurrentTime = () => {
	const getTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	const [time, setTime] = useState(getTime);

	useEffect(() => {
		const now = new Date();
		// TODO: the logic for syncing with system time is AI generated, so may need a refactor or a better look for performance, etc.
		const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
		let intervalId: NodeJS.Timeout;
		const timeoutId = setTimeout(() => {
			setTime(getTime());
			intervalId = setInterval(() => {
				setTime(getTime());
			}, 60 * 1000);
		}, msToNextMinute);
		return () => {
			clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
		};
	}, []);

	return <span>{time}</span>;
};
