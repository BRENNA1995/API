import { useState } from "react";
import { styles } from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import useDataContext from "../../hooks/useDataContext";

export function Login(sendDataConnect) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const textTitleStart = {
    fontSize: "2em",
    fontWeight: "600",
    color: "#393960",
    textAlign: "center",
  };

  const { setLogin } = useDataContext()
  function handleOnSubmit(event) {
    event.preventDefault();
    //navigate("/home", { replace: true });
    try {
      axios.post(`http://localhost:3003/usuarios/login`, {
        senha: userPassword,
        email: userEmail,
      })
        .then(function (response) {
          if (response !== '') {
            localStorage.setItem('userName', (response.data))
            localStorage.setItem('userEmail', (userEmail))

            setLogin(true)
            navigate("/home", { replace: true });
          }
          else {
            setLogin(false)
            alert("Usuário ou senha inválidos");
          }
        });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Erro 401: Não autorizado');
        navigate("/login", { replace: true });
      } else {
        console.error('Outro erro:', error.message);
      }}
    
    //TODO: CHAMADA UPDATE
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
          Continuar
        </button>
      </form>
    </div>
  );
}
