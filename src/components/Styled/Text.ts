import styled from "styled-components";

import { transformCssValue } from "@/utils/transformCssValue";

const Text = styled.p<TextProps>`
	display: inline-block;
	font-size: ${(props) => (props.variant === "title" ? "24px" : props.variant === "small" ? "13px" : "16px")};
	font-weight: ${(props) => (props.bold ? "600" : "400")};
	text-decoration: ${(props) => (props.underline ? "underline" : "none")};
	color: ${(props) =>
		props.inheritColor
			? "inherit"
			: props.light
				? "#fff"
				: props.variant === "title"
					? "#0a0a0a"
					: "#1a1a1a"} !important;
	padding: ${(props) => transformCssValue(props.p) ?? "0"};
	margin: ${(props) => transformCssValue(props.m) ?? "0"};
`;

export default Text;
