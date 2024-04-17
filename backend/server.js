const express = require('express'); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
const servidor = '127.0.0.1';
const port=3001;
//Configurações e conexão com o  Banco
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'brenna',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Utilização da rota para realizar o CRUD dos comentarios 
const routerAPI = require('./routes/routerAPI');
app.use ('/api', routerAPI);

app.use ((req, res) => {    
    res.status(404);
    res.send('Recurso solicitado não existe');
})

app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
