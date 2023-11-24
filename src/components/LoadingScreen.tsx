import { Hourglass } from "react95";

import { Flex, Text } from "@/components/Styled";

import styles from "./LoadingScreen.module.scss";

export const LoadingScreen = () => (
	<main className={styles.container}>
		<Flex align='center' gap={8}>
			<Hourglass />

			<Text>Loading...</Text>
		</Flex>
	</main>
);
