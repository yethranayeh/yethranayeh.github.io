import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { getRandomIntRange } from "@/utils/getRandomIntRange";

import { Navbar } from "@/components/Navbar";
import { LoadingScreen } from "@/components/LoadingScreen";

import styles from "./MainLayout.module.scss";

const loadingTime = getRandomIntRange(2500, 4000);

export default function MainLayout() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
			document.body.setAttribute("data-loading", "false");
		}, loadingTime);

		return () => clearTimeout(timeout);
	}, []);

	if (loading) {
		return (
			<div className={styles.container}>
				<LoadingScreen />
			</div>
		);
	}

	return (
		<div className={[styles.container, styles.fadeIn].join(" ")}>
			<Navbar />
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
}
