import { useTranslation } from "react-i18next";
import { Button, Radio, WindowContent } from "react95";
import { useState } from "react";
import { useAtom } from "jotai";

import { removeWindowAtom } from "@/stores/window.atom";

import { ImgIcon } from "@/components/ImgIcon";
import { Flex } from "@/components/Styled";
import ShutdownIcon from "@/assets/icons/shutdown.ico";
import { computer } from "@/lib/computer";

type ShutdownChoice = "shutdown" | "restart";

export default function ShutdownDialogContent() {
	const { t } = useTranslation();
	const [choice, setChoice] = useState<ShutdownChoice>("shutdown");

	const [_, closeWindow] = useAtom(removeWindowAtom);

	return (
		<WindowContent>
			<Flex gap={12}>
				<ImgIcon size={44} src={ShutdownIcon} />
				<Flex direction='column' align='flex-end' gap={16}>
					<Flex direction='column' gap={8}>
						<p>{t("content:shutdown.message")}</p>
						<Flex direction='column'>
							<Radio
								checked={choice === "shutdown"}
								onChange={() => setChoice("shutdown")}
								value='shutdown'
								label={t("content:shutdown.option-shutdown")}
								name='choice'
							/>
							<Radio
								checked={choice === "restart"}
								onChange={() => setChoice("restart")}
								value='restart'
								label={t("content:shutdown.option-restart")}
								name='choice'
							/>
						</Flex>
					</Flex>

					<Flex gap={8}>
						<Button
							onClick={() => {
								if (choice === "shutdown") {
									computer.shutdown();
								} else if (choice === "restart") {
									window.location.reload();
								}
							}}>
							{t("btn.yes")}
						</Button>
						<Button
							onClick={() =>
								// ? Maybe this component should not be aware of the window id; its responsibility should be to just render the content
								closeWindow("shutdown-dialog")
							}>
							{t("btn.no")}
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</WindowContent>
	);
}
