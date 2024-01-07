interface FunctionProps {
	method: "encrypt" | "decrypt";
	key: string;
	message: string;
	alphabet: string;
}

export function handleCrypt({ method, key, message, alphabet }: FunctionProps) {
	const column: Record<string, Array<string>> = {};
	const msg = message.toUpperCase();

	for (let letter of alphabet) {
		const splitArr = alphabet.split(letter);
		const letterPattern = (letter + splitArr[1] + splitArr[0]).split("");
		column[letter] = letterPattern;
	}

	let ciphered = "";
	let keyIndex = 0;

	for (let character of msg) {
		if (alphabet.includes(character)) {
			// Check column <character>, at <key[keyIndex]>
			const currentKeyChar = key[keyIndex];
			const alphabetIndex = alphabet.indexOf(currentKeyChar);
			const currentColumn = column[character];
			const cipheredLetter = currentColumn[alphabetIndex];
			if (++keyIndex >= key.length) {
				keyIndex = 0;
			}
			ciphered += cipheredLetter;
		} else {
			ciphered += character;
		}
	}
	return ciphered;
}
