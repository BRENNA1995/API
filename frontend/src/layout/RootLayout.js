import { Link, Outlet } from "react-router-dom";
import styles from "./rootLayout.module.css";

export function RootLayout() {
	return (
		<>
			<header className={styles.header}>
				<h1>SUPER Tela</h1>
				<h2>O melhor do cinema em um só lugar</h2>
				<button id={styles.btnHome}><Link to={"/"} style={{ textDecoration: 'none' }}>Início</Link></button>
			</header>
			<Outlet />
			<footer className={styles.footer}>
				Copyright 2023. Todos os direitos reservados.
			</footer>
		</>
	)
}
