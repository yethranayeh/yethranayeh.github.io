import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { WindowContent, Frame } from "react95";

import { useIsMobile } from "@/hooks/useIsMobile";

import { Flex } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { MailLink } from "@/components/MailLink";

import Github from "@/assets/icons/github.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";

import styles from "@/components/windows/Window.module.scss";

// Physical dimensions of the resume document
const RESUME_WIDTH_CM = 21.5;
const RESUME_HEIGHT_CM = 60;
const CM_PX_MULTIPLIER = 37.795;
const RESUME_WIDTH_PX = Math.round(RESUME_WIDTH_CM * CM_PX_MULTIPLIER);
const RESUME_HEIGHT_PX = Math.round(RESUME_HEIGHT_CM * CM_PX_MULTIPLIER);

const desktopFrameStyle = { overflowY: "auto", overflowX: "hidden" } as const;
const desktopIframeStyle = { width: "21.5cm", height: "calc(30cm * 2)" } as const;

export function ResumeWindow() {
  const { i18n } = useTranslation(["content", "menu"]);
  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const update = () => {
      if (wrapperRef.current) {
        setScale(wrapperRef.current.clientWidth / RESUME_WIDTH_PX);
      }
    };

    update();
    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [isMobile]);

  // --Mobile: scale the fixed-width document down to fit
  // transform doesn't affect layout flow, so clip the excess layout space
  //  with overflow:hidden and set an explicit height equal to the visual height.
  const mobileFrameStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${RESUME_HEIGHT_PX * scale}px`,
      flexShrink: 0,
    }),
    [scale],
  );

  const mobileIframeStyle = useMemo(
    () => ({
      display: "block",
      width: `${RESUME_WIDTH_PX}px`,
      height: `${RESUME_HEIGHT_PX}px`,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
    }),
    [scale],
  );

  return (
    <>
      <WindowContent as="article" className={styles.content}>
        <Frame
          variant="field"
          ref={wrapperRef}
          style={isMobile ? mobileFrameStyle : desktopFrameStyle}
        >
          <iframe
            title="Resume"
            src={"https://www.aktasalper.com/resume/#/" + i18n.language}
            style={isMobile ? mobileIframeStyle : desktopIframeStyle}
          />
        </Frame>
      </WindowContent>
      <Frame variant="well" className={styles.frame}>
        <Flex gap={12} justify="space-between">
          <MailLink />
          <Flex gap={12}>
            <SocialLink Icon={Github} name="Github" link="https://github.com/yethranayeh" />
            <SocialLink
              Icon={LinkedIn}
              name="LinkedIn"
              link="https://www.linkedin.com/in/aktasalper/"
            />
          </Flex>
        </Flex>
      </Frame>
    </>
  );
}
