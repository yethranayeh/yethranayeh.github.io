import type { ReactNode } from "react";

import { Anchor, Frame } from "react95";
import { useTranslation } from "react-i18next";

import { Flex } from "@/components/Styled";
import { SocialLink } from "@/components/SocialLink";
import { SVGIcon } from "@/components/SVGIcon";

import Github from "@/assets/icons/github.svg";
import OpenIcon from "pixelarticons/svg/open.svg";

import windowStyles from "../../Window.module.scss";
import styles from "./ProjectLayout.module.scss";

interface ProjectLayoutProps {
	children: ReactNode;
	website?: string;
	repo?: string;
}

export function ProjectLayout({ children, website, repo }: ProjectLayoutProps) {
	const { t } = useTranslation();
	return (
		<Flex direction='column' gap={16}>
			<article>{children}</article>

			<Frame variant='well' className={windowStyles.frame}>
				<Flex gap={12} justify='space-between'>
					<Anchor href={website} target='_blank' className={styles.webLink}>
						<SVGIcon marginRight src={OpenIcon} alt='arrow pointing outside of a box' />
						{t("btn.go-to-page")}
					</Anchor>
					{repo && <SocialLink iconSrc={Github} name='Github' link={repo} />}
				</Flex>
			</Frame>
		</Flex>
	);
}
