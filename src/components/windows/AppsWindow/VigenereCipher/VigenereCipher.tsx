import { useCallback, useState } from "react";
import { Frame, GroupBox, Hourglass, Radio, TextInput, Window, WindowContent, WindowHeader } from "react95";
import { useTranslation } from "react-i18next";
import Draggable from "react-draggable";

import { handleCrypt } from "./functions";

import { Flex, Text } from "@/components/Styled";
import { WindowTitleText } from "@/components/windows/WindowTitleText";
import { CloseButton } from "@/components/CloseButton";
import { AudioButton } from "@/components/AudioButton";

import windowStyles from "@/components/windows/Window.module.scss";
import styles from "./VigenereCipher.module.scss";

interface AppWindowProps {
	handleCloseProps: any;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // TODO: make alphabet user customizable

export function VigenereCipher({ handleCloseProps }: AppWindowProps) {
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
			setOutput(handleCrypt({ method: method, key, message: input, alphabet }));
		}, 0);
	}, [method, key, input, alphabet]);

	return (
		<Draggable bounds='main' handle='.sc-cabOPr'>
			<Window className={windowStyles.window}>
				<WindowHeader className={windowStyles.header}>
					<WindowTitleText>{t("vigenere-cipher.title")}</WindowTitleText>
					<CloseButton {...handleCloseProps} />
				</WindowHeader>
				<WindowContent className={windowStyles.content}>
					<GroupBox label={t("vigenere-cipher.method")} className={styles.radioGroup_P4859}>
						<Radio
							label={t("vigenere-cipher.encrypt")}
							checked={method === "encrypt"}
							value='encrpyt'
							onChange={() => setMethod("encrypt")}
						/>
						<Radio
							disabled
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
							defaultValue={alphabet}
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
			</Window>
		</Draggable>
	);
}
