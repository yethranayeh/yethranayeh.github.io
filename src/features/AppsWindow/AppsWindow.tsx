import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Frame } from "react95";
import { useAtom } from "jotai";

import { addWindowAtom, removeWindowAtom } from "@/stores/window.atom";

import { App } from "./App";
import { WindowURL } from "@/components/windows/WindowURL";
import ProgramIcon from "@/assets/icons/Program.ico";

import styles from "./AppsWindow.module.scss";

const Apps = {
	VigenereCipher: {
		name: "vigenère cipher",
		translationId: "vigenere-cipher.title", // TODO: find a better field name
		iconSrc: ProgramIcon,
		Element: lazy(() =>
			import("@/features/AppsWindow/VigenereCipher/VigenereCipher").then((module) => ({
				default: module.VigenereCipher
			}))
		)
	}
} as const;

const appKeys = Object.keys(Apps) as Array<keyof typeof Apps>;

export function AppsWindow() {
	const { t } = useTranslation("content");

	const [_, addWindow] = useAtom(addWindowAtom);

	return (
		<>
			<WindowURL />
			<Frame as='section' variant='field' className={styles.frame}>
				{appKeys.map((appKey, index) => {
					const app = Apps[appKey];

					return (
						<App
							key={app.name}
							name={app.name}
							iconSrc={app.iconSrc}
							onDoubleClick={() => {
								const Element = app.Element;

								addWindow({
									id: `app:${app.name}`,
									title: t(app.translationId),
									iconSrc: ProgramIcon,
									minimized: false,
									content: Element
								});
							}}
						/>
					);
				})}
			</Frame>
		</>
	);
}
