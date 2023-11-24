// https://stackoverflow.com/a/1527820
export function getRandomIntRange(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
