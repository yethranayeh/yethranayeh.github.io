/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import styles from "./MainLayout.module.scss";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { getRandomIntRange } from "@/utils/getRandomIntRange";

const loadingTime = getRandomIntRange(2500, 4000);

export default function MainLayout() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), loadingTime);

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
			<Footer />
		</div>
	);
}
