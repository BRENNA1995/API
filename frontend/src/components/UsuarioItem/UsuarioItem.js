
import React from "react";
import { MoviesService } from "../../api/MoviesService";

export function UsuarioItem( props) {


function deletar(){
    MoviesService.deleteUsuario(props.usuario.id)
 }
 function bloquear(){
    
 }
 function liberar(){
    
 }

 console.log(props.usuario.username)

  return (
    <li className="collection-item">
       <span>{props.usuario.username}</span> 
            <button className="btn waves-effect waves-light light-blue accent-3" type="submit" name="action" onClick={() => deletar()}>EXCLUIR
                <i className="material-icons right">delete</i>
            </button>
            <button className="btn waves-effect waves-light light-blue accent-3" type="submit" name="action" onClick={() => bloquear()}>BLOQUEAR
                <i className="material-icons right">block</i>
            </button>
            <button className="btn waves-effect waves-light light-blue accent-3" type="submit" name="action" onClick={() => liberar()}>LIBERAR
                <i className="material-icons right">lock_open</i>
            </button>
      
    </li>
  );
}