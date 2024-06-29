import styles from "./movieComments.module.css";
import userImage from "../../images/user.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import useDataContext from "../../hooks/useDataContext";

export function MovieComments(props) {
  const [data, setData] = useState({
    filmeId: 0,
    comment: "",
    username: ""
  });
  const avatarUser = { width: '50px', height: '50px', borderRadius: '18%', marginRight: '12px' }
  const commentUserName = { fontWeight: '500', fontSize: '20px', marginRight: '10px' }

  const [storageDataUsername, setStorageDataUsername] = useState('')
  const { newComment, setNewComment} = useDataContext()

  useEffect(() => {
    setStorageDataUsername(localStorage.getItem('userName'))
  }, [])

  const handleForm = () => {
    try {
      axios.post(`http://localhost:3003/filmes/${props.idFilme}/comentarios/new`, {
        filmeId: Number(data.filmeId),
        comment: String(data.comment),
        username: storageDataUsername,
      })
      setNewComment(newComment + 1)
      alert('Comentário Adicionado!')
    }
    catch (err) {
      console.error("Erro ao enviar o POST:", err);
    }
  }

  return (
    <div className="container">
      <div className={styles.titleGroup}>
        <h3 className={styles.title}>Comentários</h3>
        <span className={styles.line}></span>
      </div>
      <div className="row">
        <figure className="col s1 m1 l1">
          <img src={userImage} style={{ ...avatarUser }} alt="usuário" />
        </figure>
        <div className="col s8 m8 l8">
          <div className="row">
            <div className="col s12" style={{ ...commentUserName }}>{storageDataUsername}</div>
            <form className="col s12 m12 l12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea" onChange={e =>
                    setData({ comment: e.target.value })}></textarea>
                  <label htmlFor="textarea1">Insira o comentário</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button className="col s12 m3 l2 btn waves-effect waves-light light-blue accent-3" type="submit" name="action" onClick={() => handleForm()}>SALVAR
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}
