import { Button, MenuList, MenuListItem, Separator } from "react95";

import { useState } from "react";

import { Text } from "@/components/Styled";

import ReactLogo from "@/assets/icons/react.svg";

export function StartButton() {
	const [open, setOpen] = useState(false);

	return (
		<div style={{ position: "relative", display: "inline-block" }}>
			<Button onClick={() => setOpen(!open)} active={open}>
				<img src={ReactLogo} alt='home' style={{ height: "20px", marginRight: 4 }} />
				<Text>Start</Text>
			</Button>
			{open && (
				<MenuList
					style={{
						position: "absolute",
						left: "0",
						top: "100%"
					}}
					onClick={() => setOpen(false)}>
					<MenuListItem>
						<span role='img' aria-label='📁'>
							📁
						</span>
						My account
					</MenuListItem>
					<Separator />
					<MenuListItem disabled>
						<span role='img' aria-label='🔙'>
							🔙
						</span>
						Logout
					</MenuListItem>
				</MenuList>
			)}
		</div>
	);
}
