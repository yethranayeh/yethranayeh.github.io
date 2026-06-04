import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Frame } from "react95";
import { useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Flex } from "@/components/Styled";
import { ImgIcon } from "@/components/ImgIcon";

import styles from "./WindowURL.module.scss";

export function WindowURL({ className }: { className?: string }) {
  const { t } = useTranslation("content");
  const biggerThanSm = useMediaQuery("sm");
  const urlRef = useRef<HTMLSpanElement>(null);
  // For visual purposes only, for now. It had navigation functionality before
  const pathname = useLocation().pathname.replace("/", "");

  return (
    <Frame variant="field" className={`${styles.frame}${className ? ` ${className}` : ""}`}>
      <Flex as="header" align="center" gap={8}>
        <ImgIcon src="/icon/folder_open.ico" size={20} />
        <div>
          <span>{(biggerThanSm ? t("base-url") : "\\..") + "\\alper\\"}</span>
          <span
            contentEditable
            suppressContentEditableWarning
            ref={urlRef}
            role="textbox"
            aria-label="URL bar (decorative only)"
          >
            {pathname}
          </span>
        </div>
      </Flex>
    </Frame>
  );
}
