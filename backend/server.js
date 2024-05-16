const router = require("./src/routes/routerAPI")
const express = require("express"); // Importa o módulo do Express Framework
const servidor = "127.0.0.1";
const port = 3002;
const cors = require("cors");



app.use('/', routerAPI);

app.get('/comentarios/:id', (req, res) => {
  const { id } = req.params
  console.log(39,id)
  // const movie = dados.filter((movi) => movi.idFilme == id)

  if (dados.idFilme == id){
    console.log(44,id)
    res.send(dados).status(200)
  }
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
