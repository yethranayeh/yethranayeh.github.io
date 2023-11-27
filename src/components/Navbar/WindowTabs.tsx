import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react95";

import NotesIcon from "pixelarticons/svg/notes.svg";

const Windows = {
	IntroductionWindow: lazy(() =>
		import("@/components/Navbar/windows/IntroductionWindow").then((module) => ({ default: module.IntroductionWindow }))
	)
} as const;

type WindowOption = keyof typeof Windows;

const tabs = Object.keys(Windows) as unknown as Array<WindowOption>;

export function WindowTabs() {
	const [activeTab, setActiveTab] = useState<WindowOption | null>(null);

	const { t } = useTranslation("menu");
	return (
		<>
			<Button
				active={activeTab === "IntroductionWindow"}
				onClick={() => {
					if (activeTab === "IntroductionWindow") {
						setActiveTab(null);
					} else {
						setActiveTab("IntroductionWindow");
					}
				}}>
				<img src={NotesIcon} className='icon' alt='an icon of a page with lines, indicating writing' />
				{t("window.hello")}
			</Button>

			<Suspense fallback={null}>{activeTab === "IntroductionWindow" && <Windows.IntroductionWindow />}</Suspense>
		</>
	);
}
