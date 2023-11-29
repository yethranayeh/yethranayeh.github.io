import { SVGIcon } from "./SVGIcon";

interface SocialLinkProps {
	iconSrc: string;
	name: string;
	link: string;
}

export const SocialLink = ({ iconSrc, name, link }: SocialLinkProps) => (
	<a href={link} target='_blank' title={name}>
		<SVGIcon src={iconSrc} alt={name} />
	</a>
);
