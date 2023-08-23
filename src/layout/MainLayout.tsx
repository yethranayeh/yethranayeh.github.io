/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import styles from "./MainLayout.module.scss";
import Footer from "@/components/Footer";

export default function MainLayout() {
	return (
		<div className={styles.container}>
			<Navbar />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
