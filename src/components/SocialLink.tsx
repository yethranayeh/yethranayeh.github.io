interface SocialLinkProps {
	iconSrc: string;
	name: string;
	link: string;
}

export const SocialLink = ({ iconSrc, name, link }: SocialLinkProps) => (
	<a href={link} target='_blank' title={name}>
		<img src={iconSrc} alt={name} width={24} />
	</a>
);
