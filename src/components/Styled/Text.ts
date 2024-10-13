import styled from "styled-components";

import { transformCssValue } from "@/utils/transformCssValue";

const Text = styled.p<TextProps>`
	display: inline-block;
	font-size: ${(props) => (props.variant === "title" ? "24px" : props.variant === "caption" ? "10px" : "13px")};
	font-weight: ${(props) => (props.bold ? "600" : "400")};
	color: ${(props) => (props.variant === "title" ? "#0a0a0a" : "#1a1a1a")} !important;
	&::selection {
		background-color: #c6c6c6;
		color: #0a0a0a;
	}
	padding: ${(props) => transformCssValue(props.p) ?? "0"};
	margin: ${(props) => transformCssValue(props.m) ?? "0"};
`;

export default Text;
