const express = require("express"); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
const servidor = "127.0.0.1";
const port = 3002;
const axios = require("axios");

const URL_BASE = `http://${servidor}:3003`;
//Configurações e conexão com o  Banco
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "brenna",
  port: 5432,
});

async function obterTarefas() {
  try {
    const response = await axios.get(`${URL_BASE}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter tarefas:", error);
  }
}

obterTarefas()


client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


app.use((req, res) => {
  res.status(404);
  res.send("Recurso solicitado não existe");
});

app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
