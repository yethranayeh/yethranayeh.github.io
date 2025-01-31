/** @format */

interface FlexProps {
	direction?: "row" | "column";
	wrap?: "wrap" | "nowrap";
	justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
	align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
	alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
	gap?: string | number;
	rowGap?: string | number;
	columnGap?: string | number;
	sx?: import("styled-components").CSSProp;
}

interface TextProps {
	bold?: boolean;
	variant?: "title" | "body" | "caption";
	p?: string | number;
	m?: string | number;
}
