import { useContext } from "react";
import { Button, TextInput } from "react95";
import { useTranslation } from "react-i18next";

import { setBodyLoadingState } from "@/utils/setBodyLoadingState";

import { Flex } from "@/components/Styled";
import { BlinkingEyesAvatar } from "@/components/BlinkingEyesAvatar";
import { SVGIcon } from "@/components/SVGIcon";

import ArrowRight from "pixelarticons/svg/arrow-right.svg?react";

import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/constants/storage";

import styles from "./User.module.scss";

export function User() {
	const { setIsLoggedIn } = useContext(AuthContext);
	const { t } = useTranslation("general");

	return (
		<Flex gap={20}>
			<BlinkingEyesAvatar />
			<Flex direction='column' gap={8}>
				<p>Alper Aktaş</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setIsLoggedIn(true);
						setBodyLoadingState("false");
						localStorage.setItem(isLoggedOutKey, "false");
					}}>
					<Flex gap={4}>
						<TextInput required fullWidth minLength={6} className={styles.input} placeholder={t("password")} />
						<Button type='submit' className={styles.button} title={t("btn.login")}>
							<SVGIcon Icon={ArrowRight} />
						</Button>
					</Flex>
				</form>
			</Flex>
		</Flex>
	);
}
