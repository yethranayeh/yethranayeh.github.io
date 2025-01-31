import styles from "./CRT.module.scss";

export function CRT() {
	return (
		<>
			<div className={styles.crt} />
			<div className={styles.scanline} />
		</>
	);
}
