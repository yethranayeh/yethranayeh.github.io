import { clsx } from "clsx";

import styles from "./SVGIcon.module.scss";

interface SVGIconProps {
	src: string;
	alt: string;

	disabled?: boolean;
	marginRight?: boolean;
	marginLeft?: boolean;
	small?: boolean;
}

export const SVGIcon = ({ src, alt, disabled, marginLeft, marginRight, small }: SVGIconProps) => (
	<img
		aria-roledescription='icon'
		src={src}
		className={clsx(
			styles.icon,
			disabled && styles.disabled,
			marginLeft && styles.ml,
			marginRight && styles.mr,
			small && styles.small
		)}
		alt={alt}
	/>
);
