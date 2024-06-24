import userImage from "../../images/user.png";
import { useState, useEffect } from "react";
import { MoviesService } from "../../api/MoviesService";


export function ListComments(props) {
  const [comentariosDoFilme, setComentariosDoFilme] = useState([])

  useEffect(() => {
    MoviesService.getComments(props.idFilme)
      .then(({ data }) => setComentariosDoFilme(data))
      .catch((err) => console.error("Erro ao buscar comentários:", err));
  }, [])

  const titleName = { color: '#0078b0', fontWeight: 500, fontSize: '22px', marginBottom: '8px' }
  const textComment = { fontSize: '18px', paddingBottom: '6px', paddingLeft: '4px' }
  const avatar = { border: '#0078b0 1px solid', padding: '4px', boxShadow: ' 0 0 0.4em #0078b0' }

  return (
    <ul className="container collection">
      {comentariosDoFilme.length > 0 ? comentariosDoFilme.map((item, index) => (
        <li key={index} className="collection-item avatar">
          <figure>
            <img src={userImage} className="circle" style={{ ...avatar }} alt="usuário" />
          </figure>
          <div className="title" style={{ ...titleName }}>{item.username}</div>
          <div style={{ ...textComment }}>{item.comment}</div>
        </li>)) : <li style={{ ...textComment }}>Não há comentários para esse filme. Seja o primeiro a comentar!</li>}
    </ul>
  )
}
