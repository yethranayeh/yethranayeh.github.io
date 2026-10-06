import type { ReactNode } from "react";

import { Anchor, Frame } from "react95";
import { useTranslation } from "react-i18next";

import { Flex } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { SVGIcon } from "@/components/SVGIcon";

import Github from "@/assets/icons/github.svg?react";
import OpenIcon from "pixelarticons/svg/open.svg?react";

import windowStyles from "@/components/windows/Window.module.scss";
import styles from "./ProjectLayout.module.scss";

interface ProjectLayoutProps {
  children: ReactNode;
  website?: string;
  repo?: string;
  preview?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function ProjectLayout({ children, website, repo, preview }: ProjectLayoutProps) {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap={16} className={styles.layout}>
      <article className={styles.description}>
        {children}
        {preview && (
          <Frame variant="well" className={styles.previewFrame}>
            <img
              src={preview.src}
              alt={preview.alt}
              width={preview.width}
              height={preview.height}
              referrerPolicy="no-referrer"
              className={styles.preview}
            />
          </Frame>
        )}
      </article>

      <Frame variant="well" className={windowStyles.frame}>
        <Flex gap={12} justify="space-between">
          <Anchor
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.webLink}
          >
            <SVGIcon marginRight Icon={OpenIcon} />
            {t("btn.go-to-page")}
          </Anchor>
          {repo && <SocialLink Icon={Github} name="Github" link={repo} />}
        </Flex>
      </Frame>
    </Flex>
  );
}
