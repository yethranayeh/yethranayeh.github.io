import type { LazyExoticComponent } from "react";
import type { DraggableWindowProps } from "@/components/windows/DraggableWindow";

import { atom } from "jotai";

export type AppWindow = {
	id: string;
	titleKey: string;
	minimized: boolean;
	iconSrc: string;
	openWindowIconSrc?: string;
	content: LazyExoticComponent<() => JSX.Element>;
	WindowProps?: Omit<DraggableWindowProps, "title">;
};

export const windowsAtom = atom<Array<AppWindow>>([]);

export const addWindowAtom = atom(null, (get, set, newWindow: AppWindow) => {
	const windows = get(windowsAtom);

	const windowExists = windows.some((win) => win.id === newWindow.id);
	if (windowExists) {
		// If the window already exists, instead of adding it again, open if minimized

		if (!windows.find((win) => win.id === newWindow.id)?.minimized) {
			return;
		} else {
			set(
				windowsAtom,
				windows.map((win) => (win.id === newWindow.id ? { ...win, minimized: false } : win))
			);
		}
	} else {
		set(windowsAtom, [...windows, newWindow]);
	}
});

export const removeWindowAtom = atom(null, (get, set, windowId: string) => {
	const windows = get(windowsAtom);
	set(
		windowsAtom,
		windows.filter((win) => win.id !== windowId)
	);
});

export const toggleMinimizeWindowAtom = atom(null, (get, set, windowId: string) => {
	const windows = get(windowsAtom);
	set(
		windowsAtom,
		windows.map((win) => (win.id === windowId ? { ...win, minimized: !win.minimized } : win))
	);
});
