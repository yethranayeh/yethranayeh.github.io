import { Flex } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";

import ReactLogo from "@/assets/icons/react.svg?react";

import styles from "./LoadingScreen.module.scss";

export const LoadingScreen = () => (
	<main className={styles.container}>
		<Flex direction='column' gap={4 * 5}>
			<section>
				<Flex align='flex-end'>
					<p className={styles.company}>Meta</p>
					<SVGIcon Icon={ReactLogo} className={styles.logo} />
				</Flex>
				<p className={styles.product}>
					React<span className={styles.language}>JS</span>
				</p>
				<p className={styles.version}>Developer</p>
			</section>
			<section className={styles.loaderContainer}>
				<div className={styles.box}></div>
				<div className={styles.box}></div>
				<div className={styles.box}></div>
			</section>
		</Flex>
	</main>
);
