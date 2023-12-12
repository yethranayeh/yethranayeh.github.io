import { useContext } from "react";
import { Button, TextInput } from "react95";

import { setBodyLoadingState } from "@/utils/setBodyLoadingState";

import { Branding } from "@/components/Branding";
import { Flex } from "@/components/Styled";
import { BlinkingEyesAvatar } from "@/components/BlinkingEyesAvatar";
import { SVGIcon } from "@/components/SVGIcon";

import ArrowRight from "pixelarticons/svg/arrow-right.svg?react";

import { AuthContext } from "@/context/AuthContext";
import { isLoggedOutKey } from "@/constants/storage";

import styles from "./LoginPage.module.scss";

function User() {
	const { setIsLoggedIn } = useContext(AuthContext);

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
						<TextInput required fullWidth minLength={6} className={styles.input} placeholder='Password' />
						<Button type='submit'>
							<SVGIcon Icon={ArrowRight} />
						</Button>
					</Flex>
				</form>
			</Flex>
		</Flex>
	);
}

export function LoginPage() {
	return (
		<main className={styles.container}>
			<header className={styles.header}></header>
			<section className={styles.branding}>
				<Flex direction='column'>
					<Branding />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem neque totam minus distinctio
						nesciunt.
					</p>
				</Flex>
			</section>
			<section className={styles.users}>
				<ul>
					<li>
						<User />
					</li>
				</ul>
			</section>
			<footer className={styles.footer}></footer>
		</main>
	);
}
