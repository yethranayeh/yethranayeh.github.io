import type { SVGIconProps } from "./SVGIcon";

import { SVGIcon } from "./SVGIcon";

interface SocialLinkProps {
	Icon: SVGIconProps["Icon"];
	name: string;
	link: string;
}

export const SocialLink = ({ Icon, name, link }: SocialLinkProps) => (
	<a href={link} target='_blank' title={name}>
		<SVGIcon Icon={Icon} />
	</a>
);
