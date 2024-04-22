const express = require("express"); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
const servidor = "127.0.0.1";
const port = 3002;
const cors=require("cors");
app.use(express.json());
app.use(cors());

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

// client.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


app.get('/', (req, res) => {
  res.status(200);
  res.send('hello, world!');
});

app.post('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200);
  console.log(req.body);
});




app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
