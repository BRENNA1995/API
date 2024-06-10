import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./rootLayout.module.css";

export function RootLayout() {
	const [status, setStatus] = useState('x')

	// const login = false
	// TODO: fazer fucao que testa usuario logado

	const brand = { cursor: 'pointer'}

	const connected = false
	// const connected = true
	
	// if (login === false) 
	// 	setConnected('Sair')
	// else if (login === true)
	// 	setConnected('Entrar')

	function userCheck() {
		if (connected === false) {
			setStatus('Entrar')
		}	
		else {
			setStatus('Sair')
		}	
	}
	// userCheck() 

	function handleLoginCheck() {
		if (connected === false) {
			setStatus('Entrar')
		}	
		else {
			setStatus('Sair')
		}	
	}

	return (
		<>
			<header className={styles.header}>
				<Link to={"/"}><h1 style={{...brand}}>SUPER Tela</h1></Link>
				<Link to={"/login"}><button className="btn waves-effect waves-light light-blue accent-4" name="action" onClick={() => handleLoginCheck()}>{status}</button></Link>					
			</header>
			<Outlet />
		</>
	)
}
