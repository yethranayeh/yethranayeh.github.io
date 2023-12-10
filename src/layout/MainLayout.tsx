import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

import { getRandomIntRange } from "@/utils/getRandomIntRange";

import { BlinkingEyesAvatar } from "@/components/BlinkingEyesAvatar";
import { Clippy } from "@/components/Clippy";
import { Flex, Text } from "@/components/Styled";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";

import styles from "./MainLayout.module.scss";

const loadingTime = getRandomIntRange(2500, 4000);

export default function MainLayout() {
	const [loading, setLoading] = useState(!import.meta.env.DEV);

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

				<Suspense fallback={null}>
					<Outlet />
				</Suspense>

				<Clippy />
			</main>
		</div>
	);
}
