import { BlinkingEyesAvatar } from "@/components/BlinkingEyesAvatar";
import { Flex, Text } from "@/components/Styled";
import { ScrollView, WindowContent } from "react95";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MyCard = () => {
	const { t } = useTranslation("content");
	return (
		<Flex direction='column'>
			<Flex wrap='wrap' gap={24} justify='space-around' align='center'>
				<Flex align='center' gap={8}>
					<BlinkingEyesAvatar avatarSize={60} />
					<Flex direction='column'>
						<Text bold variant='title'>
							Alper
						</Text>
						<Text>{t("help-dialog.title")}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

const Li = styled.li`
	list-style-type: disc;
`;

const HelpDialogContent = () => {
	const { t } = useTranslation("content");
	return (
		<WindowContent>
			<ScrollView style={{ height: 400 }}>
				<div
					style={{
						background: "#ffffe1",
						padding: "1.5rem"
						// color: "#333",
					}}>
					<Flex direction='column' gap={16}>
						<MyCard />
						<Flex direction='column' gap={12}>
							<Flex direction='column'>
								<Text bold variant='title'>
									{t("help-dialog.information-title")}
								</Text>
								<Text>{t("help-dialog.information-body")}</Text>
							</Flex>

							<Flex direction='column'>
								<Text bold variant='title'>
									{t("help-dialog.tips-title")}
								</Text>

								<ul
									style={{
										paddingLeft: 20
									}}>
									<Li>
										<Text bold underline>
											{t("help-dialog.tips.navigation-title")}
										</Text>{" "}
										{t("help-dialog.tips.navigation-body")}
									</Li>
									<Li>
										<Text bold underline>
											{t("help-dialog.tips.shortcuts-title")}
										</Text>{" "}
										{t("help-dialog.tips.shortcuts-body")}
									</Li>
									<Li>
										<Text bold underline>
											{t("help-dialog.tips.responsiveness-title")}
										</Text>{" "}
										{t("help-dialog.tips.responsiveness-body")}
									</Li>
									<Li>
										<Text bold underline>
											{t("help-dialog.tips.feedback-title")}
										</Text>{" "}
										{t("help-dialog.tips.feedback-body")}
									</Li>
								</ul>
							</Flex>
						</Flex>
					</Flex>
				</div>
			</ScrollView>
		</WindowContent>
	);
};

export default HelpDialogContent;
