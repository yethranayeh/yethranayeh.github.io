import { Suspense, lazy, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Frame } from "react95";

import { App } from "./App";
import { WindowURL } from "@/components/windows/WindowURL";
import { DraggableWindow } from "@/components/windows/DraggableWindow";
import { Loader } from "@/components/Loader";

import styles from "./AppsWindow.module.scss";

const Apps = {
	VigenereCipher: {
		name: "vigenère cipher",
		Element: lazy(() =>
			import("@/features/AppsWindow/VigenereCipher/VigenereCipher").then((module) => ({
				default: module.VigenereCipher
			}))
		)
	}
} as const;

const appKeys = Object.keys(Apps) as Array<keyof typeof Apps>;

export function AppsWindow() {
	const { t } = useTranslation(["menu", "content"]);

	const [openedApp, setOpenedApp] = useState(-1);

	const closeApp = useCallback(() => setOpenedApp(-1), []);
	const onCloseProps = useMemo(
		() => ({
			onClick: closeApp,
			onTouchEnd: closeApp
		}),
		[]
	);

	return (
		<>
			<DraggableWindow title={t("window.apps")} HeaderProps={{ active: openedApp === -1 }}>
				<WindowURL />
				<Frame as='section' variant='field' className={styles.frame}>
					{appKeys.map((appKey, index) => (
						<App key={Apps[appKey].name} name={Apps[appKey].name} onDoubleClick={() => setOpenedApp(index)} />
					))}
				</Frame>
			</DraggableWindow>

			<Suspense fallback={<Loader />}>
				{appKeys.map((appKey, index) => {
					if (index === openedApp) {
						const Element = Apps[appKey].Element;

						return <Element key={appKey} handleCloseProps={onCloseProps} />;
					}

					return null;
				})}
			</Suspense>
		</>
	);
}
