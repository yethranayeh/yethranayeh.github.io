import clsx from "clsx";
import styles from "./SVGIcon.module.scss";

interface ImgIconProps {
	src: string;
	size?: number;
	marginRight?: boolean;
	marginLeft?: boolean;
}

export const ImgIcon = ({ src, size = 24, marginLeft, marginRight }: ImgIconProps) => (
	<img
		src={src}
		height={size}
		width='auto'
		aria-roledescription='icon'
		alt='icon'
		className={clsx(marginLeft && styles.ml, marginRight && styles.mr)}
	/>
);
