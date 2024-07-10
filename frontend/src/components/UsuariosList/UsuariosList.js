import { UsuarioItem } from "../UsuarioItem/UsuarioItem"

export function UsuarioList({ usuarios }) {
	return (
		<section className="with-header">
			<ul className="container collection">{usuarios.map((usuario, index) => <UsuarioItem key={index} usuario={usuario} />)}</ul>
		</section>
	)
}
