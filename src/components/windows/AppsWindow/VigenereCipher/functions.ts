function generateColumn(alphabet: string) {
	const column: Record<string, Array<string>> = {};

	for (let letter of alphabet) {
		const splitArr = alphabet.split(letter);
		const letterPattern = (letter + splitArr[1] + splitArr[0]).split("");
		column[letter] = letterPattern;
	}

	return column;
}

interface FunctionParams {
	method: "encrypt" | "decrypt";
	key: string;
	message: string;
	alphabet: string;
}

export function handleVigenere({ method, key, message, alphabet }: FunctionParams) {
	const column = generateColumn(alphabet);

	let ciphered = "";
	let keyIndex = 0;

	for (let character of message) {
		let characterToAppend = "";

		if (alphabet.includes(character)) {
			const currentKeyChar = key[keyIndex];
			if (method === "encrypt") {
				const currentColumn = column[character];
				const alphabetIndex = alphabet.indexOf(currentKeyChar);

				characterToAppend = currentColumn[alphabetIndex];
			} else if (method === "decrypt") {
				const currentColumn = column[currentKeyChar];
				const columnIndex = currentColumn.indexOf(character);

				characterToAppend = alphabet[columnIndex];
			}

			if (++keyIndex >= key.length) {
				keyIndex = 0;
			}
		} else {
			characterToAppend = character;
		}
		ciphered += characterToAppend;
	}

	return ciphered;
}
