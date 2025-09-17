import clsx from "clsx";
import styles from "./SVGIcon.module.scss";

interface ImgIconProps {
	src: string;
	size?: number;
	marginRight?: boolean;
	marginLeft?: boolean;
	/**
	 * When enabled, both width and height attributes are set to `size`
	 * Also, CSS styles are also included to prevent shrinking due to
	 * 	external factors like flex sizing
	 */
	strictSizing?: boolean;
}

export const ImgIcon = ({ src, size = 24, marginLeft, marginRight, strictSizing }: ImgIconProps) => (
	<img
		src={src}
		height={size}
		width={strictSizing ? size : "auto"}
		aria-roledescription='icon'
		alt='icon'
		className={clsx(marginLeft && styles.ml, marginRight && styles.mr)}
		style={strictSizing ? { width: size, height: size } : undefined}
	/>
);
