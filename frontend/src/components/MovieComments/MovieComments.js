import styles from "./movieComments.module.css";
import userImage from "../../images/user.png";
import axios from "axios";
import React, { useState, useEffect } from "react";

export function MovieComments(props) {
  const [data, setData] = useState({
    id: 0,
    name: "",
    comentario:"",
    nome_usuario:""
  });
//INSERIR COMENTARIO NO FRONTEND E ENVIAR PRO BACK
  axios.post("http://localhost:3002/", { idFilme: data.id, nomeFilme: data.name,  comentario: data.comentario, nome_usuario: data.nome_usuario })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar o POST:', error)
    });



//BUSCAR COMENTARIO QUE JÁ EXISTE 
  useEffect(() => {
    axios.post("http://localhost:3002/", { idFilme: data.id, nomeFilme: data.name })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erro ao enviar o POST:', error)
      })
  }, [data]);




  return (
    <div>
      <button id={styles.btnClear} state="submit" onClick={() => setData({ ...data, id: props.idFilme, name: props.nomeFilme})}>
        Salvar
      </button>
      
      <div className={styles.titleGroup}>
        <h3 className={styles.title}>Comentários</h3>
        <span className={styles.line}></span>
      </div>
      <div className={styles.comment}>
        <div>
          <figure>
            <img src={userImage} className={styles.userImage} alt="usuário" />
          </figure>
        </div>
        <div>
          <div className={styles.commentUserName}>Senhor Carvalho</div>
          <div className={styles.commentText}>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">Insira o comentario sobre o filme</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
