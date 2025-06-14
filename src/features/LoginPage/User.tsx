import { useContext, useEffect, useState } from "react";
import { Button, TextInput } from "react95";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";

import { setBodyLoadingState } from "@/utils/setBodyLoadingState";

import { Flex } from "@/components/Styled";
import { BlinkingEyesAvatar } from "@/components/BlinkingEyesAvatar";
import { SVGIcon } from "@/components/SVGIcon";

import ArrowRight from "pixelarticons/svg/arrow-right.svg?react";

import LoginSound from "@/assets/audio/login.mp3";
import TypingSound from "@/assets/audio/typing.mp3";
import ErrorSound from "@/assets/audio/error.mp3";

import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/config/storage";

import styles from "./User.module.scss";
import { useAtom } from "jotai";
import { soundAtom } from "@/stores/soundAtom";

export function User() {
	const { setIsLoggedIn } = useContext(AuthContext);
	const { t } = useTranslation("general");
	const [sound] = useAtom(soundAtom);

	const [isFormError, setIsFormError] = useState(false);
	const [playLogin] = useSound(LoginSound, { volume: 0.25, soundEnabled: sound.enabled });
	const [playTyping] = useSound(TypingSound, { soundEnabled: sound.enabled });
	const [playError] = useSound(ErrorSound, { volume: 0.5, soundEnabled: sound.enabled });

	useEffect(() => {
		const timeout = setTimeout(() => setIsFormError(false), 820);

		return () => clearTimeout(timeout);
	}, [isFormError]);

	return (
		<Flex className={styles.container}>
			<BlinkingEyesAvatar />
			<Flex direction='column' gap={8} className={styles.formContainer}>
				<label htmlFor='password' className={styles["label-user"]}>
					<span>Alper</span>
					<span className={styles["user-role"]}>Web Developer</span>
				</label>
				<Flex
					as='form'
					gap={8}
					className={isFormError ? styles.formError : undefined}
					onInvalid={() => {
						setIsFormError(true);
						playError();
					}}
					onSubmit={(e) => {
						e.preventDefault();
						playLogin();
						setIsLoggedIn(true);
						setBodyLoadingState("false");
						localStorage.setItem(isLoggedOutKey, "false");
					}}>
					<TextInput
						required
						id='password'
						fullWidth
						minLength={6}
						className={styles.input}
						placeholder={t("password")}
						onChange={() => playTyping()}
					/>
					<Button type='submit' className={styles.button} title={t("btn.login")}>
						<SVGIcon Icon={ArrowRight} />
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
