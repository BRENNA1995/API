import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import styles from "./rootLayout.module.css";

export function RootLayout() {
	const [status, setStatus] = useState('Entrar')
	const [login, setLogin] = useState(false)
	const [newComment, setNewComment] = useState(0)

	const brand = { cursor: 'pointer' }

	useEffect(() => {
		login ? setStatus('Sair') : setStatus('Entrar')
	}, [login])

	function handleLoginCheck() {
		localStorage.clear();
		setStatus('Entrar')
		setLogin(false)
	}
	return (
		<DataContext.Provider value={{ login, setLogin, newComment, setNewComment }}>
			<header className={styles.header}>
				{login ?
					<Link to={"/home"}><h1 style={{ ...brand }}>SUPER Tela</h1></Link>
					: <Link to={"/"}><h1 style={{ ...brand }}>SUPER Tela</h1></Link>}

				{status === 'Entrar' ? <Link to={"/login"}><button className="btn waves-effect waves-light light-blue accent-4" name="action" onClick={() => handleLoginCheck()}>{status}</button></Link> : <Link to={"/"}><button className="btn waves-effect waves-light light-blue accent-4" name="action" onClick={() => handleLoginCheck()}>{status}</button></Link>}

			</header>
			<Outlet />
		</DataContext.Provider>
	)
}
