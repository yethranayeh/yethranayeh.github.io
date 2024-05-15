import styles from "./Tally.module.scss";

const startDate = new Date("2024-05-17");
const currentDate = new Date();

const daysSince = Math.floor((currentDate.valueOf() - startDate.valueOf()) / (1000 * 60 * 60 * 24));

// Generated by Amazon Q
// https://stackoverflow.com/questions/51297449
function chunkArray(arr: Array<unknown>) {
	const result = [];
	for (let i = 0; i < arr.length; i += 5) {
		result.push(arr.slice(i, i + 5));
	}
	return result;
}

const originalArray = Array.from({ length: daysSince });
const chunkedArray = chunkArray(originalArray);

export function Tally() {
	return (
		<div className={styles.wrapper}>
			<main className={styles.container}>
				{chunkedArray.map((arr, i) => (
					<div key={i} className={styles.box}>
						{arr.map((_, index) => (
							<span key={index} className={styles["tally-mark"]}></span>
						))}
					</div>
				))}
			</main>
		</div>
	);
}
