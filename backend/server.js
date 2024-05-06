const express = require("express"); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
const servidor = "127.0.0.1";
const port = 3002;
const cors = require("cors");
const routerAPI = require('./src/routes/routerAPI');
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", "views");
//const URL_BASE = `http://${servidor}:3003`;
//Configurações e conexão com o  Banco

// let dados = {
//   idFilme: 0,
//   nomeFilme: "",
//   comentario: "",
//   nomeUsuario: ""  
// }

let dados = {
  idFilme: 693134,
  nomeFilme: "Dune: Part Two",
  items: [
    {
      comentario: "Adorei o filme, quero ver de novo",
      nomeUsuario: "Maria"
    },
    {
      comentario: "é ok",
      nomeUsuario: "José"
    }
  ]
}

app.use('/', routerAPI);

app.get('/comentarios/:id', (req, res) => {
  const { id } = req.params
  // const movie = dados.filter((movi) => movi.idFilme == id)

  if (dados.idFilme == id)
    res.send(dados).status(200)
})

app.post('/ler', (req, res) => {
  res.status(200);
  // console.log(req.body);
});
app.post('/enviar', (req, res) => {

  res.status(200);
  // console.log(req.body);
});

app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
