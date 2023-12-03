import { Flex } from "@/components/Styled";

import styles from "./LoadingScreen.module.scss";
import { SVGIcon } from "./SVGIcon";

import ReactLogo from "@/assets/icons/react.svg";

export const LoadingScreen = () => (
	<main className={styles.container}>
		<Flex direction='column' gap={4 * 5}>
			<section>
				<Flex align='flex-end'>
					<p className={styles.company}>Meta</p>
					<SVGIcon className={styles.logo} src={ReactLogo} alt='react logo' />
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
