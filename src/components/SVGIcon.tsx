import { clsx } from "clsx";

import styles from "./SVGIcon.module.scss";

interface SVGIconProps {
	src: string;
	marginRight?: boolean;
	marginLeft?: boolean;
	small?: boolean;
	alt: string;
}

export const SVGIcon = ({ src, marginLeft, marginRight, small, alt }: SVGIconProps) => (
	<img
		aria-roledescription='icon'
		src={src}
		className={clsx(styles.icon, marginLeft && styles.ml, marginRight && styles.mr, small && styles.small)}
		alt={alt}
	/>
);
