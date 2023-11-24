/** @format */

import React from "react";
import { AppBar, Toolbar, TextInput, Button, MenuList, MenuListItem, Separator, Tooltip } from "react95";
import ReactLogo from "@/assets/icons/react.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	const [open, setOpen] = React.useState(false);
	return (
		<nav>
			<AppBar className={styles.container}>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<div style={{ position: "relative", display: "inline-block" }}>
						<Button onClick={() => setOpen(!open)} active={open}>
							<img src={ReactLogo} alt='home' style={{ height: "20px", marginRight: 4 }} />
							Start
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
											(<MenuList>
												<MenuListItem onClick={() => console.log("Turkish")}>Turkish</MenuListItem>
												<MenuListItem onClick={() => console.log("English")}>English</MenuListItem>
											</MenuList>) as any
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
