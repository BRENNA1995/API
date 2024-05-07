// import userImage from "../../images/user.png";

export function ListComments(props) {
    console.log(props.dados) 
    const dados = props.dados
    // console.log(listComments.items[0].comentario) 
    //console.log(dados) 

    let listItems = 1
    if (dados !== 1)  { 
          listItems = dados.items.map((item, index) => (
            <li key={index}>
                <div>{item.nomeUsuario}</div>
                <div>{item.comentario}</div>
            </li>
        ))
    }
     return (<ul>{listItems}</ul>)

    // return (<ul>
    //     {listComments.comentarios.map((item, index) => (
    //         <li key={index}>
    //             <div>{item.nomeUsuario}</div>
    //             <div>{item.comentario}</div>
    //         </li>
    //     ))}
    // </ul>)
}
