import { Outlet } from "react-router-dom";
import styles from "./rootLayout.module.css";

export function RootLayout() {
	return (
		<>
			<header className={styles.header}>
				<h1>SUPER Tela</h1>
			</header>
			<Outlet />
		</>
	)
}
