import { clsx } from "clsx";

import styles from "./SVGIcon.module.scss";

interface SVGIconProps {
	src: string;
	alt: string;
	className?: string;

	disabled?: boolean;
	marginRight?: boolean;
	marginLeft?: boolean;
	small?: boolean;
}

export const SVGIcon = ({ src, alt, className, disabled, marginLeft, marginRight, small }: SVGIconProps) => (
	<img
		aria-roledescription='icon'
		src={src}
		className={clsx(
			styles.icon,
			className,
			disabled && styles.disabled,
			marginLeft && styles.ml,
			marginRight && styles.mr,
			small && styles.small
		)}
		alt={alt}
	/>
);
