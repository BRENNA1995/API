export function ListComments(props) {
    console.log(props) 
    const dados = props.dados
    console.log(dados) 
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
