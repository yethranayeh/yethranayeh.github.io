import { useAtom } from "jotai";
import { Suspense } from "react";

import { removeWindowAtom, toggleMinimizeWindowAtom, windowsAtom } from "@/stores/window.atom";

import { DraggableWindow } from "@/components/windows/DraggableWindow";
import { Loader } from "@/components/Loader";

export function WindowsOutlet() {
	const [windows] = useAtom(windowsAtom);
	const [_, closeWindow] = useAtom(removeWindowAtom);
	const [__, toggleMinimizeWindow] = useAtom(toggleMinimizeWindowAtom);

	return (
		<>
			{windows
				.filter((w) => !w.minimized)
				.map((w) => {
					const Content = w.content;
					return (
						<DraggableWindow
							key={w.id}
							{...w.WindowProps}
							title={w.title}
							slotProps={{
								...w.WindowProps?.slotProps,
								minimizeButton: {
									onClick: () => toggleMinimizeWindow(w.id),
									...w.WindowProps?.slotProps?.minimizeButton
								},
								closeButton: { onClick: () => closeWindow(w.id), ...w.WindowProps?.slotProps?.closeButton }
							}}>
							<Suspense fallback={<Loader />}>
								<Content />
							</Suspense>
						</DraggableWindow>
					);
				})}
		</>
	);
}
