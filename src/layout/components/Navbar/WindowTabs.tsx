import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { toggleMinimizeWindowAtom, windowsAtom } from "@/stores/window.atom";

import { Flex } from "@/components/Styled";
import { TaskbarButton } from "./TaskbarButton";

import styles from "./WindowTabs.module.scss";

export function WindowTabs() {
	const { t } = useTranslation();
	const [windows] = useAtom(windowsAtom);
	const [_, toggleMinimize] = useAtom(toggleMinimizeWindowAtom);

	return (
		<Flex className={styles.container}>
			{windows.map((w) => (
				<TaskbarButton
					key={w.id}
					onClick={() => toggleMinimize(w.id)}
					isActive={!w.minimized}
					iconSrc={!w.minimized ? w.openWindowIconSrc ?? w.iconSrc : w.iconSrc}
					text={t(w.titleKey)}
				/>
			))}
		</Flex>
	);
}
