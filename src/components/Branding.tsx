import { Flex } from "@/components/Styled";

import styles from "./Branding.module.scss";
import { ReactAtom3D } from "./ReactAtom3D";
import { Canvas } from "@react-three/fiber";

// TODO: avoid 3D logo import on slow / metered connections
const Logo = () => (
	<Canvas style={{ width: 90, height: 110, marginLeft: -25, marginBottom: -25 }}>
		<ambientLight intensity={1} />
		<pointLight position={[10, 10, 10]} />
		<ReactAtom3D />
	</Canvas>
);

export const Branding = () => (
	<div className={styles.container}>
		<Flex align='flex-end'>
			<p className={styles.company}>Meta</p>
			<Logo />
		</Flex>
		<p className={styles.product}>
			React<span className={styles.language}>JS</span>
		</p>
		<p className={styles.version}>18.2.0</p>
	</div>
);
