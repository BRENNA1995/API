import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import styles from "./rootLayout.module.css";

export function RootLayout() {
	const [status, setStatus] = useState('Entrar')
	const [login, setLogin] = useState(false)
	const [newComment, setNewComment] = useState(0)
	const [administrator, setAdministrator] = useState(true)
	const [delUsuario, setDelUsuario]= useState(0)
	const [ statusUsuario, setStatusUsuario] = useState(0)

	const brand = { cursor: 'pointer' }
   
	const marginRightButton = { marginRight:'12px'}

	useEffect(() => {
		login ? setStatus('Sair') : setStatus('Entrar')
	}, [login])

	function handleLoginCheck() {
		localStorage.clear();
		setStatus('Entrar')
		setLogin(false)
	}
	return (
		<DataContext.Provider value={{ login, setLogin, newComment, setNewComment, delUsuario, setDelUsuario , statusUsuario, setStatusUsuario }}>
			<header className={styles.header}>
				{login ?
					<Link to={"/home"}><h1 style={{ ...brand }}>SUPER Tela</h1></Link>
					: <Link to={"/"}><h1 style={{ ...brand }}>SUPER Tela</h1></Link>}
				<span>
                    <span style={marginRightButton}>
                        {administrator === true ? <Link to={"/administrator"}><button className="btn waves-effect waves-light light-blue accent-4" name="action">Administrador</button></Link> : null}
                    </span>
                    <span>
                        {status === 'Entrar' ? <Link to={"/login"}><button className="btn waves-effect waves-light light-blue accent-4" name="action" onClick={() => handleLoginCheck()}>{status}</button></Link> : <Link to={"/"}><button className="btn waves-effect waves-light light-blue accent-4" name="action" onClick={() => handleLoginCheck()}>{status}</button></Link>}
                    </span>
                </span>
			</header>
			<Outlet />
		</DataContext.Provider>
	)
}
