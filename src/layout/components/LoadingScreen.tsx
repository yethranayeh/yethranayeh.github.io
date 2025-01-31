import { Flex } from "@/components/Styled";

import styles from "./LoadingScreen.module.scss";
import { Branding } from "../../components/Branding";

export const LoadingScreen = () => (
	<main className={styles.container}>
		<Flex direction='column' gap={4 * 5}>
			<Branding />
			<section className={styles.loaderContainer}>
				<div className={styles.box}></div>
				<div className={styles.box}></div>
				<div className={styles.box}></div>
			</section>
		</Flex>
	</main>
);
