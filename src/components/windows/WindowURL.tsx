import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Frame } from "react95";
import { useRef } from "react";

import { Flex } from "@/components/Styled";

import OpenedFolderIcon from "@/assets/icons/Opened-Folder.ico";

import styles from "./WindowURL.module.scss";
import { ImgIcon } from "../ImgIcon";

export function WindowURL() {
	const { t } = useTranslation("content");
	const urlRef = useRef<HTMLSpanElement>(null);
	const pathname = useLocation().pathname.replace("/", "");
	const navigate = useNavigate();

	return (
		<Frame variant='field' className={styles.frame}>
			<Flex as='header' align='center' gap={8}>
				<ImgIcon src={OpenedFolderIcon} size={20} />
				<div>
					<span>{t("base-url") + "\\"}</span>
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
