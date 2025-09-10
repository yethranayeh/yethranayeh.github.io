import { Fragment, type PropsWithChildren } from "react";
import { Flex } from "@/components/Styled";

interface Props extends PropsWithChildren {
	Icon: React.ReactNode;
	hotkeyLetterIndex?: number;
}

const HotkeyedText = ({ text, hotkeyLetterIndex }: { text: string; hotkeyLetterIndex: number }) => {
	const parts = text.split(new RegExp(`(${text[hotkeyLetterIndex]})`, "i"));
	return (
		<>
			{parts.map((part, index) =>
				index === 1 ? (
					<span key={index + part} style={{ textDecoration: "underline" }}>
						{part}
					</span>
				) : (
					<Fragment key={index + part}>{part}</Fragment>
				)
			)}
		</>
	);
};

export const ListItemContent = ({ Icon, children, hotkeyLetterIndex }: Props) => (
	<Flex align='center' gap={10} sx={{ display: "inline-flex" }}>
		{Icon}
		<span>
			{hotkeyLetterIndex != null ? (
				<HotkeyedText text={children as string} hotkeyLetterIndex={hotkeyLetterIndex} />
			) : (
				children
			)}
		</span>
	</Flex>
);
