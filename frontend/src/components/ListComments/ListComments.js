// import userImage from "../../images/user.png";

export function ListComments(props) {
    console.log(props) 
    const dados = props.dados
    // console.log(listComments.items[0].comentario) 
    console.log(dados) 

    //let listItems = 1
<<<<<<< HEAD
    
    if (dados)   {
      console.log(12,dados)
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
    
=======
    //if (dados !== 1)  { 
      if (dados)   { 

        return (
            <ul> 
             {/* {dados.items.map((item, index) => (
                <li key={index}>
                    <div>{item.nomeUsuario}</div>
                    <div>{item.comentario}</div>
                </li>
            )) } */}
            </ul>
        )
      }
    //}
>>>>>>> 7251085a9e3ffeddb95c94ce9be6da927c621326

    // return (<ul>
    //     {listComments.comentarios.map((item, index) => (
    //         <li key={index}>
    //             <div>{item.nomeUsuario}</div>
    //             <div>{item.comentario}</div>
    //         </li>
    //     ))}
    // </ul>)
}
