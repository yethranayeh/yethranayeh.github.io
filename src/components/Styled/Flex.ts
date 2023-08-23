/** @format */

import transformCssValue from "@/utils/transformCssValue";
import styled from "styled-components";

const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${(props) => props.direction || "row"};
	flex-wrap: ${(props) => props.wrap || "nowrap"};
	justify-content: ${(props) => props.justify || "flex-start"};
	align-items: ${(props) => props.align || "flex-start"};
	align-content: ${(props) => props.alignContent || "flex-start"};
	gap: ${(props) => transformCssValue(props.gap) || "0px"};
	${(props) => ({ ...(props.sx as object) })}
`;

export default Flex;
