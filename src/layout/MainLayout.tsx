import { Outlet } from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import { getRandomIntRange } from "@/utils/getRandomIntRange";
import { setBodyLoadingState } from "@/utils/setBodyLoadingState";

import { BlinkingEyesAvatar } from "@/components/BlinkingEyesAvatar";
import { Clippy } from "@/components/Clippy";
import { Flex, Text } from "@/components/Styled";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";

import { AuthContext } from "@/context/AuthContext";

import styles from "./MainLayout.module.scss";

const LoginPage = lazy(() =>
	import("@/components/LoginPage/LoginPage").then((module) => ({ default: module.LoginPage }))
);

const loadingTime = getRandomIntRange(2500, 4000);

export default function MainLayout() {
	const [loading, setLoading] = useState(!import.meta.env.DEV);
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const authContextValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
			setBodyLoadingState("false");
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
				<Flex wrap='wrap' gap={24} justify='space-around' align='center' className={styles.avatar}>
					<Flex align='center' gap={14}>
						<BlinkingEyesAvatar />

						<Flex direction='column'>
							<Text bold variant='title'>
								Alper Aktaş
							</Text>
							<Text>Web Developer</Text>
						</Flex>
					</Flex>
				</Flex>

				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>

				<Clippy />
			</main>
		</div>
	);
}
