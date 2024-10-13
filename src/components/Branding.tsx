import { Flex } from "@/components/Styled";
import { SVGIcon } from "@/components/SVGIcon";

import ReactLogo from "@/assets/icons/react.svg?react";

import styles from "./Branding.module.scss";

export const Branding = () => (
	<div className={styles.container}>
		<Flex align='flex-end'>
			<p className={styles.company}>Meta</p>
			<SVGIcon Icon={ReactLogo} className={styles.logo} />
		</Flex>
		<p className={styles.product}>
			React<span className={styles.language}>JS</span>
		</p>
		<p className={styles.version}>Developer</p>
	</div>
);
