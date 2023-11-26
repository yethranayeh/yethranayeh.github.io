/** @format */

import { AppBar, Toolbar, TextInput, Button, MenuList, MenuListItem, Separator, Tooltip } from "react95";

import { useState } from "react";
import { changeLanguage } from "i18next";

import { Text } from "../Styled";

import ReactLogo from "@/assets/icons/react.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<AppBar className={styles.container}>
				<Toolbar style={{ justifyContent: "space-between" }}>
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
									<Tooltip
										text={
											(
												<MenuList>
													<MenuListItem onClick={() => changeLanguage("tr")}>Turkish</MenuListItem>
													<MenuListItem onClick={() => changeLanguage("en")}>English</MenuListItem>
												</MenuList>
											) as any
										}
										position='right'
										enterDelay={100}
										leaveDelay={500}
										style={{
											padding: 0,
											margin: 0,
											backgroundColor: "transparent",
											border: "none"
										}}>
										<span role='img' aria-label='👨‍💻'>
											🌐
										</span>
										Language
									</Tooltip>
								</MenuListItem>
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

					<TextInput placeholder='Search...' width={150} />
				</Toolbar>
			</AppBar>
		</nav>
	);
}
