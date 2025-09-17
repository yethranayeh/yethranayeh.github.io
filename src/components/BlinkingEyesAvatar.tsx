import { Avatar } from "react95";

import styles from "./BlinkingEyesAvatar.module.scss";

export const BlinkingEyesAvatar = ({ avatarSize = 80 }: { avatarSize?: number }) => (
	<Avatar size={avatarSize} src='/misc/blinking.webp' className={styles.avatar} />
);
