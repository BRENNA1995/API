import styles from "./movieComments.module.css";
import userImage from "../../images/user.png";
import axios from "axios";
import React, { useState, useEffect } from "react";

export function MovieComments(idFilme, nomeFilme) {
  const [data, setData] = useState({
     idFilme: 0,
    nomeFilme: ""
});
     //const [data, setData] = useState( null);
  // useEffect(() => {
  //     console.log(data);
  //     const response = axios.post("http://localhost:3002/", data);
  //     console.log(response.data); // Se quiser ver a resposta da API
  // });

   useEffect(() => {
    console.log(data);
     // Fetching data from an external API
      const response = axios.post("http://localhost:3002/",data);
      console.log(response.data);
      
   },[data]);
  
  // useEffect(() => {
  //   console.log("ok")
  //  }, []);
   
  // useEffect(() => {
  //   console.log(data.idFilme, data.nomeFilme)
  //  }, [data]);


  // function Adicionar() {
  //   setData((data.idFilme = idFilme), (data.nomeFilme = nomeFilme));

  //   try {
  //     useEffect(() => {
  //       const response = axios.post("http://localhost:3002/", data);
  //       console.log(response.data); // Se quiser ver a resposta da API
  //     });
  //   } catch (error) {
  //     console.error("Erro ao enviar o POST:", error);
  //   }
  // }


  return (
    <div>
      <button id={styles.btnClear} state="submit" onClick={()=>setData({ ...data,idFilme: idFilme, nomeFilme: nomeFilme})}>
        Inserir Comentario
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
            <p>
              Após ver um filme, uma das primeiras coisas que faço é ouvir a
              banda sonora. Acredito que a imagem e o som conseguem (pelo menos
              na maior parte dos casos) contar tão bem a história como as
              próprias personagens em si. E mais do que isso: parece que o filme
              se prolonga e que o vou vendo e revendo na minha cabeça,
              mantendo-o perto mesmo depois do fim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
