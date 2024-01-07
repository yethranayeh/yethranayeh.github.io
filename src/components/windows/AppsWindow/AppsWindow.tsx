import Draggable from "react-draggable";
import { Suspense, lazy, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Frame, Window, WindowHeader } from "react95";

import { WindowTitleText } from "../WindowTitleText";
import { CloseButton } from "@/components/CloseButton";
import { Loader } from "@/components/Loader";

import styles from "./AppsWindow.module.scss";
import windowStyles from "../Window.module.scss";
import { App } from "./App";
import { WindowURL } from "../WindowURL";

const Apps = {
	VigenereCipher: {
		name: "vigenère cipher",
		Element: lazy(() =>
			import("@/components/windows/AppsWindow/VigenereCipher/VigenereCipher").then((module) => ({
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
			<Draggable bounds='main' handle='.sc-cabOPr'>
				<Window className={windowStyles.window}>
					<WindowHeader active={openedApp === -1} className={windowStyles.header}>
						<WindowTitleText>{t("window.apps")}</WindowTitleText>
						<CloseButton />
					</WindowHeader>
					<WindowURL />
					<Frame as='section' variant='field' className={styles.frame}>
						{appKeys.map((appKey, index) => (
							<App key={Apps[appKey].name} name={Apps[appKey].name} onDoubleClick={() => setOpenedApp(index)} />
						))}
					</Frame>
				</Window>
			</Draggable>
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
