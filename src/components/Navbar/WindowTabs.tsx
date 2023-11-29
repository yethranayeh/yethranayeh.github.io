import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react95";

import NotesIcon from "pixelarticons/svg/notes.svg";
import { SVGIcon } from "../SVGIcon";

const Windows = {
	IntroductionWindow: lazy(() =>
		import("@/components/Navbar/windows/IntroductionWindow").then((module) => ({ default: module.IntroductionWindow }))
	)
} as const;

type WindowOption = keyof typeof Windows;

export function WindowTabs() {
	const [activeTab, setActiveTab] = useState<WindowOption | null>(null);

	const { t } = useTranslation("menu");
	return (
		<>
			{/* Window Buttons */}
			<Button
				active={activeTab === "IntroductionWindow"}
				onClick={() => setActiveTab(activeTab === "IntroductionWindow" ? null : "IntroductionWindow")}>
				<SVGIcon marginRight src={NotesIcon} alt='an icon of a page, indicating writing' />
				{t("window.hello")}
			</Button>

			{/* Window Screens */}
			<Suspense fallback={null}>{activeTab === "IntroductionWindow" && <Windows.IntroductionWindow />}</Suspense>
		</>
	);
}
