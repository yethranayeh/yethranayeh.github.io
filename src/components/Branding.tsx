import { Flex } from "@/components/Styled";

import styles from "./Branding.module.scss";
import { DotMatrixAtom } from "./DotMatrixAtom";

export const Branding = () => (
  <div className={styles.container}>
    <Flex align="flex-end">
      <p className={styles.company}>Meta</p>
      <DotMatrixAtom size={100} />
    </Flex>
    <p className={styles.product}>
      React<span className={styles.language}>JS</span>
    </p>
    <p className={styles.version}>18.2.0</p>
  </div>
);
