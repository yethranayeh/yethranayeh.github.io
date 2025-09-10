import { atom } from "jotai";
import { ReactNode } from "react";

type ModalState = {
	isOpen: boolean;
	title: string | null;
	content: ReactNode | null;
};

export const modalAtom = atom<ModalState>({
	isOpen: false,
	title: null,
	content: null
});

export const openModalAtom = atom(null, (get, set, { title, content }: { title: string; content: ReactNode }) => {
	set(modalAtom, { isOpen: true, title, content });
});

export const closeModalAtom = atom(null, (get, set) => {
	set(modalAtom, { isOpen: false, title: null, content: null });
});
