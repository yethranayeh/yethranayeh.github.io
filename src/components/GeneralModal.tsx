import { useAtom } from "jotai";
import { DraggableWindow } from "./windows/DraggableWindow";
import { closeModalAtom, modalAtom } from "@/stores/modalAtom";

export function GeneralModal() {
	const [modal] = useAtom(modalAtom);
	const [_, closeModal] = useAtom(closeModalAtom);

	if (!modal.isOpen) {
		return null;
	}

	return (
		<DraggableWindow title={modal.title || ""} slotProps={{ closeButton: { onClick: closeModal } }}>
			{modal.content}
		</DraggableWindow>
	);
}
