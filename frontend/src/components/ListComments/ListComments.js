// import userImage from "../../images/user.png";

export function ListComments(props) {
    const listComments = props.listComments
    // console.log(listComments.items[0].comentario) 
    console.log(listComments) 

    // const x = listComments.items.map((item, index) => ( console.log(item) )) também ok
    const listItems = 1

    // const listItems = listComments.items.map((item, index) => (
    //     <li key={index}>
    //         <div>{item.nomeUsuario}</div>
    //         <div>{item.comentario}</div>
    //     </li>
    // ))
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
