import { Flex, Text } from "@/components/Styled";

import { memo } from "react";

import { BlinkingEyesAvatar } from "./components/BlinkingEyesAvatar";
import { Clippy } from "@/components/Clippy";

import styles from "./HomePage.module.scss";

const HomePage = memo(() => {
	return (
		<Flex wrap='wrap' gap={24} justify='space-around' align='center' className={styles.container}>
			<Flex align='center' gap={14}>
				<BlinkingEyesAvatar />

				<Flex direction='column'>
					<Text bold variant='title'>
						Alper Aktaş
					</Text>
					<Text>Web Developer</Text>
				</Flex>
			</Flex>

			<Clippy />
		</Flex>
	);
});

export default HomePage;
