import { useState } from "react";
import { styles } from "./start.module.css";
import axios from "axios";

export function Start() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const textTitleStart = {
    fontSize: "2em",
    fontWeight: "600",
    color: "#393960",
    textAlign: "center",
  };
  const textSubtitleStart = {
    fontSize: "1.5em",
    fontWeight: "400",
    color: "#000000",
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    try {
      axios.post(`process.env.HOSTNAME_API/usuarios/new`, {
        username: userName,
        senha: userPassword,
        email: userEmail,
        status: "ATIVO",
      }).then( function (response) 
      {
        response.data === true ? alert("Cadastro realizado com sucesso") : alert("Usuario já existe");
      });
    } catch (err) {
      console.error("Erro ao enviar o POST:", err);
    } 
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  }

  return (
    <div className="container">
      <h2 style={{ ...textTitleStart }}>
        Encontre os principais filmes do cinema, seus detalhes, notas e
        comentários
      </h2>
      <p style={{ ...textSubtitleStart }}>Cadastre-se gratuitamente</p>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="Nome de Usuário"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="email"
          value={userEmail}
          placeholder="Email"
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <input
          type="text"
          value={userPassword}
          placeholder="Senha"
          onChange={(event) => setUserPassword(event.target.value)}
        />
        <button
          className="btn waves-effect waves-light light-blue accent-4"
          type="submit"
          name="action"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
