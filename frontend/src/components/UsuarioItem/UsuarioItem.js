import React from "react";
import { MoviesService } from "../../api/MoviesService";
import styles from "./usuarioItem.module.css";
import useDataContext from "../../hooks/useDataContext";

export function UsuarioItem({ usuario }) {   
    const liPositionGroup = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', border: '1px solid', borderColor: '#303030', padding: '6px', marginTop: 0 }
    const marginLeft1 = { marginLeft: '10px' }
    const nameUser = { fontSize: '18px' }
    const statusMargin = { display: 'inline-block', width: '60px', marginLeft: '6px',fontSize: '14px' , fontWeight: '500'}
    const { delUsuario, setDelUsuario} = useDataContext()
    const { statusUsuario, setStatusUsuario} = useDataContext()

    function deletar() {
        MoviesService.deleteUsuario(usuario.id)
        setDelUsuario(delUsuario + 1 )
    }
    function bloquear() {

    }
    function liberar() {

    }  

    return (
        <li className={styles.flexSmallGroup} style={liPositionGroup}>
            <span className={styles.flexSmallGroup}>
                <span style={nameUser} >{usuario.username}</span>               
            </span>
            <span className={styles.btnUserItems}>
    
                <button className="btn waves-effect waves-light red darken-4" type="submit" name="action" style={marginLeft1} onClick={() => deletar()}>EXCLUIR
                    <i className="material-icons right">delete</i>
                </button>
                <button className="btn waves-effect waves-light orange lighten-1" type="submit" name="action" style={marginLeft1} onClick={() => bloquear()}>BLOQUEAR
                    <i className="material-icons right">block</i>
                </button>
                <button className="btn waves-effect waves-light green accent-4" type="submit" name="action" style={marginLeft1} onClick={() => liberar()}>LIBERAR
                    <i className="material-icons right">lock_open</i>
                </button>
                <span style={statusMargin} >{usuario.status}</span>
            </span>
        </li>
    );
}
