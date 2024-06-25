import { useState } from "react";
import { styles } from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const textTitleStart = {
    fontSize: "2em",
    fontWeight: "600",
    color: "#393960",
    textAlign: "center",
  };

  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log("enviando dados para login");

    try {
      axios.get(`http://localhost:3003/usuarios/login`, {
          senha: userPassword,
          email: userEmail,
        })
        .then(function (response) {
          if (userEmail === response.data.email && userPassword === response.data.senha) {
            navigate("/home", { replace: true });
          } 
          else {
            alert("Usuário ou senha inválidos");
          }
        });
        } catch (err) {
      console.error("Erro ao enviar o GET:", err);
    }
  
  setUserEmail("");
  setUserPassword("");
  }
  return (
    <div className="container">
      <h2 style={{ ...textTitleStart }}>Entrar</h2>
      <form onSubmit={handleOnSubmit}>
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
          Entrar
        </button>
      </form>
    </div>
  );
}
