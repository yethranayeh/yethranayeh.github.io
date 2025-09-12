import { useAtom } from "jotai";
import { DraggableWindow } from "./windows/DraggableWindow";
import { closeModalAtom, modalAtom } from "@/stores/modalAtom";

// FIXME: when multiple windows are open, this one is positioned in a way to not block the other, but the window title are can get out of bounds, thus making this unusable at certain scenarios
export function GeneralModal() {
	const [modal] = useAtom(modalAtom);
	const [_, closeModal] = useAtom(closeModalAtom);

	if (!modal.isOpen) {
		return null;
	}

	return (
		<DraggableWindow
			title={modal.title || ""}
			slotProps={{
				closeButton: { onClick: closeModal },
				window: {
					style: {
						// TODO: find a better solution for max-width of DraggableWindow
						maxWidth: 700
					}
				}
			}}>
			{modal.content}
		</DraggableWindow>
	);
}
