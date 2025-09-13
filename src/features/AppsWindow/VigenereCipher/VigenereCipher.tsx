import { useCallback, useState } from "react";
import { Frame, GroupBox, Hourglass, Radio, TextInput, WindowContent } from "react95";
import { useTranslation } from "react-i18next";

import { handleVigenere } from "./utils";

import { Flex, Text } from "@/components/Styled";
import { AudioButton } from "@/components/AudioButton";

import windowStyles from "@/components/windows/Window.module.scss";
import styles from "./VigenereCipher.module.scss";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // TODO: make alphabet user customizable

type CipherMethod = "encrypt" | "decrypt";

export function VigenereCipher() {
	const { t } = useTranslation("content");
	const [method, setMethod] = useState<CipherMethod>("encrypt");
	const [key, setKey] = useState("");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = useCallback(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setOutput(
				handleVigenere({ method: method, key: key.toUpperCase(), message: input.toUpperCase(), alphabet: ALPHABET })
			);
		}, 0);
	}, [method, key, input, ALPHABET]);

	return (
		<WindowContent className={windowStyles.content}>
			<GroupBox label={t("vigenere-cipher.method")} className={styles.radioGroup_P4859}>
				<Radio
					label={t("vigenere-cipher.encrypt")}
					checked={method === "encrypt"}
					value='encrpyt'
					onChange={() => setMethod("encrypt")}
				/>
				<Radio
					label={t("vigenere-cipher.decrypt")}
					checked={method === "decrypt"}
					value='decrypt'
					onChange={() => setMethod("decrypt")}
				/>
			</GroupBox>
			<Flex direction='column' gap={4}>
				<Text as='label' htmlFor='alphabet'>
					{t("vigenere-cipher.alphabet")}
				</Text>
				<TextInput
					readOnly
					id='alphabet'
					defaultValue={ALPHABET}
					title={t("vigenere-cipher.alphabet-disabled-tooltip")}
				/>
			</Flex>
			<Flex direction='column' gap={4}>
				<Text as='label' htmlFor='key'>
					{t("vigenere-cipher.key")}
				</Text>
				<TextInput
					id='key'
					value={key}
					onChange={(e) => setKey(e.target.value)}
					title={t("vigenere-cipher.key-descripton", { method: t(`vigenere-cipher.${method}`) })}
				/>
			</Flex>
			<Flex direction='column' gap={4}>
				<Text as='label' htmlFor='input'>
					{t("vigenere-cipher.input")}
				</Text>

				<Frame variant='field' className={styles.frame_R5g7}>
					<textarea
						id='input'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className={styles.textArea_uKn24U}
					/>
				</Frame>
			</Flex>
			<Flex direction='column' gap={4}>
				<Text>{t("vigenere-cipher.output")}</Text>
				<Frame variant='field' className={styles.frame_R5g7}>
					<textarea readOnly defaultValue={output} className={styles.textArea_uKn24U} />
				</Frame>
			</Flex>
			<AudioButton disabled={isLoading || !key || !input} onClick={handleSubmit}>
				{isLoading ? <Hourglass /> : t(`vigenere-cipher.${method}`)}
			</AudioButton>
		</WindowContent>
	);
}
