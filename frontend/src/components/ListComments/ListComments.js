export function ListComments(props) {
    const dados = props.dados
    if (dados)   {
      return (
          <ul> 
            {dados?.items?.map((item, index) => (
              <li key={index}>
                  <div>{item.nomeUsuario}</div>
                  <div>{item.comentario}</div>
              </li>
          )) } 
          </ul>
      )
    }    
}
