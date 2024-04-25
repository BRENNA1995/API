import styles from "./movieComments.module.css";
import userImage from "../../images/user.png";
import axios from "axios";
import React, { useState, useEffect } from "react";

export function MovieComments(props) {
  const [data, setData] = useState({
    id: 0,
    name: "",
    comentario: "",
    nome_usuario: ""
  });
  //INSERIR COMENTARIO NO FRONTEND E ENVIAR PRO BACK
  // axios.post("http://localhost:3002/", { idFilme: data.id, nomeFilme: data.name, comentario: data.comentario, nome_usuario: data.nome_usuario })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Erro ao enviar o POST:', error)
  //   });



  //BUSCAR COMENTARIO QUE JÁ EXISTE 
  // useEffect(() => {
  //   console.log(data)
  //   axios.post("http://localhost:3002/dev", { idFilme: data.id, nomeFilme: data.name })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Erro ao enviar o POST:', error)
  //     })
  // }, [data]);

  axios
    .post("http://localhost:3002/enviar", {
      idFilme: data.id,
      nomeFilme: data.name,
      comentario: data.comentario,
      nome_usuario: data.nome_usuario,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Erro ao enviar o POST:", error);
    });

  //BUSCAR COMENTARIO QUE JÁ EXISTE
  useEffect(() => {
    console.log(data);
    axios
      .post("http://localhost:3002/ler", {
        idFilme: data.id,
        nomeFilme: data.name,
        comentario: data.comentario        
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar o POST:", error);
      });
  }, [data]);

  // return (
  //   <div>
  //     <div className={styles.titleGroup}>
  //       <h3 className={styles.title}>Comentários</h3>
  //       <span className={styles.line}></span>
  //     </div>
  //     <div className="row">
  //       <figure className="col s1">
  //         <img src={userImage} className={styles.userImage} alt="usuário" />
  //       </figure>
  //       <form className="col s7">
  //         <div className="row">
  //           <div className="input-field col s10">
  //             <textarea id="textarea1" className="materialize-textarea" onChange={e =>
  //               setData({ comentario: e.target.value })}></textarea>
  //             <label>Insira o comentario sobre o filme</label>
  //           </div>
  //           <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() =>
  //             setData({ ...data, id: props.idFilme, name: props.nomeFilme })}>SALVAR
  //             <i className="material-icons right">send</i>
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //     <div className={styles.comment}>
  //       <div>
  //         <div className={styles.commentUserName}>Senhor Carvalho</div>
  //         <div className={styles.commentText}></div>
  //       </div>
  //     </div>
  //   </div>
  // );
  // }

  return (
    <div>
      <div className={styles.titleGroup}>
        <h3 className={styles.title}>Comentários</h3>
        <span className={styles.line}></span>
      </div>


      <form className="col s7">
        <div className="row">
          <div className="input-field col s10">
          </div>
        </div>
      </form>

      {/* <textarea id="textarea1" className="materialize-textarea" onChange={e =>
        setData({ comentario: e.target.value })}></textarea>
      <label>Insira o comentario sobre o filme</label> */}

      <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() =>
        setData({ ...data, id: props.idFilme, name: props.nomeFilme })}>SALVAR
        <i className="material-icons right">send</i>
      </button>


      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" onChange={e =>
                setData({ comentario: e.target.value })}></textarea>
              <label htmlFor="textarea1">Insira o comentario sobre o filme</label>
            </div>
          </div>
        </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}