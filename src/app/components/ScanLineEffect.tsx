import styles from "./ScanLineEffect.module.scss";

export function ScanLineEffect() {
	return (
		<>
			<div className={styles.crt} />
			<div className={styles.scanline} />
		</>
	);
}
