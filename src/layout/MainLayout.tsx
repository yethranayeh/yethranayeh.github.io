import { Outlet } from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import { getRandomIntRange } from "@/utils/getRandomIntRange";
import { setBodyLoadingState } from "@/utils/setBodyLoadingState";

import { Navbar } from "./components/Navbar";
import { LoadingScreen } from "./components/LoadingScreen";
import { Clippy } from "./components/Clippy";
import { WindowsOutlet } from "./components/WindowsOutlet";
import DesktopOutlet from "./components/DesktopOutlet";
import { Loader } from "@/components/Loader";

import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/config/storage";

import styles from "./MainLayout.module.scss";

// TODO: consider changing location away from layout. a "route" does not really make sense as a part of layout
const LoginPage = lazy(() =>
	import("@/features/LoginPage/LoginPage").then((module) => ({ default: module.LoginPage }))
);

const isLoggedInStorageVal = localStorage.getItem(isLoggedOutKey) !== "true";

const loadingTimeMultiplier = isLoggedInStorageVal ? 1 : 0.6;
const loadingTime = import.meta.env.DEV
	? 0
	: getRandomIntRange(2500 * loadingTimeMultiplier, 4000 * loadingTimeMultiplier);

// TODO: refactor loading screen handling
export default function MainLayout() {
	const [loading, setLoading] = useState(!import.meta.env.DEV);
	const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInStorageVal);

	const authContextValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
			isLoggedIn && setBodyLoadingState("false");
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

	if (!isLoggedIn) {
		return (
			<AuthContext.Provider value={authContextValue}>
				<Suspense fallback={null}>
					<LoginPage />
				</Suspense>
			</AuthContext.Provider>
		);
	}

	return (
		<div className={[styles.container, styles.fadeIn].join(" ")}>
			<AuthContext.Provider value={authContextValue}>
				<Navbar />
			</AuthContext.Provider>

			<main className={styles.main}>
				<DesktopOutlet />

				{/* TODO: decide on what to do with routing and Outlet */}
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>

				<WindowsOutlet />
				<Clippy />
			</main>
		</div>
	);
}
