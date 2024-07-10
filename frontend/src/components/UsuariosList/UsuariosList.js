import { UsuarioItem } from "../UsuarioItem/UsuarioItem"

export function UsuarioList({ usuarios }) {
	return (
		<section className="with-header">
			<ul className="container collection">{usuarios.length > 0 ?? usuarios.map((usuario, index) => <UsuarioItem key={index} usuario={usuario} />)}</ul>
		</section>
	)
}
