import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Frame } from "react95";
import { useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Flex } from "@/components/Styled";
import { ImgIcon } from "@/components/ImgIcon";

import OpenedFolderIcon from "@/assets/icons/Opened-Folder.ico";

import styles from "./WindowURL.module.scss";

export function WindowURL() {
	const { t } = useTranslation("content");
	const biggerThanSm = useMediaQuery("sm");
	const urlRef = useRef<HTMLSpanElement>(null);
	const pathname = useLocation().pathname.replace("/", "");
	const navigate = useNavigate();

	return (
		<Frame variant='field' className={styles.frame}>
			<Flex as='header' align='center' gap={8}>
				<ImgIcon src={OpenedFolderIcon} size={20} />
				<div>
					<span>{(biggerThanSm ? t("base-url") : "\\..\\alperaktas") + "\\"}</span>
					<span
						contentEditable
						suppressContentEditableWarning
						ref={urlRef}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								const to = `/${urlRef.current?.innerText ?? ""}`;
								navigate(to);
							}
						}}>
						{pathname}
					</span>
				</div>
			</Flex>
		</Frame>
	);
}
