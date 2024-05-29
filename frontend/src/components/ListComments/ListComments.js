import userImage from "../../images/user.png";

export function ListComments(props) {
  // const dados = props.dados
  const dados = {
    items: [
      {
        nomeUsuario: "Autor 1",
        comentario: "Filmão! As cenas de ação surpreendem demais! Muito bem executado e muito bem coreografado. Foi uma baita surpresa ver esse ator no papel, pois já tinha visto ele atuar em outros gêneros e na ação ele mandou muito bem. Top demais!!!"
      },
      {
        nomeUsuario: "Autora 2",
        comentario: "Minha opinião: Bem o filme lembra #johnwick ele achou que roubaram pulseira de cachorrinho da filha. John Wick ele mata o filho do mafioso, aqui ele da uma surra no irmão do mafioso. Nos dois estavam aposentados, a diferença aqui é que ele já tinha uma família formada, que não conheciam o passado dele."
      }
    ]
  }

  const titleName = { color: '#0078b0', fontWeight: 500, fontSize: '22px', marginBottom: '8px' }
  const textComment = { fontSize: '18px' }
  const avatar = {border: '#0078b0 1px solid', padding: '4px', boxShadow: ' 0 0 0.4em #0078b0'}

  if (dados) {
    return (
      <ul className="container collection">
        {dados?.items?.map((item, index) => (
          <li key={index} className="collection-item avatar">
            <figure>
              <img src={userImage} className="circle" style={{...avatar}} alt="usuário" />
            </figure>
            <div className="title" style={{ ...titleName }}>{item.nomeUsuario}</div>
            <div style={{ ...textComment }}>{item.comentario}</div>
          </li>
        ))}
      </ul>
    )
  }
}
