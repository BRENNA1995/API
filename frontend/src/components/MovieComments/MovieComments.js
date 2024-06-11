import styles from "./movieComments.module.css";
import userImage from "../../images/user.png";
import axios from "axios";
import React, { useState } from "react";

export function MovieComments(props) {
  const [data, setData] = useState({
    id: "",
    name: "",
    comentario: "",
    nome_usuario: ""
  });

  const handleForm = async () => {
    try {
      axios
        .post("http://localhost:3003/new", {
          filmeId: data.id,
          coment: data.comentario,
          username: data.nome_usuario,
        })
    }
    catch (err) {
      console.error("Erro ao enviar o POST:", err);
    }
  }

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3002/enviar", {
  //       idFilme: data.id,
  //       nomeFilme: data.name,
  //       comentario: data.comentario,
  //       nome_usuario: data.nome_usuario,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao enviar o POST:", error);
  //     });
  // }, [data]);

  const avatarUser = { width: '50px', height: '50px', borderRadius: '18%', marginRight: '12px' }
  const commentUserName = { fontWeight: '500', fontSize: '20px', marginRight: '10px' }

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
            <div className="col s12" style={{ ...commentUserName }}>Usuário</div>
            <form className="col s12 m12 l12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea" onChange={e =>
                    setData({ comentario: e.target.value })}></textarea>
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
