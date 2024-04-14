const express = require('express'); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
const morgan = require('morgan'); 
app.use(morgan('common'));
const port = 3001
const servidor = '127.0.0.1'

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();
// //POST SEM A PARTE DE ID
// app.post('/api/produtos', (req,res) =>{
//   req.body.id=produtos.length + 1;
//   produtos,push(req.body);
//   res.status(201).json ({
//     message: 'Produto Adicionado com sucesso',
//     data:{ id: req.body.id }
//   });
//   })

// //GET SEM A PARTE DE ID
// app.get('/api/produtos', (req,res) =>{
//   res.json(produtos);
// })

// //GET COM  A PARTE DE ID
// app.get('/api/produtos/:id', (req,res) =>{
//   let produto=produtos.find (p=>p.id == req.params.id);
//   res.json(produto);
// })

// //PUT COM  A PARTE DE ID
// app.put('/api/produtos/:id', (req,res) =>{
//   let produto=produtos.find (p=>p.id == req.params.id);
//   res.json(produto);
// })

// //DELETE COM  A PARTE DE ID
// app.delete('/api/produtos/:id', (req,res) =>{
//   let produto=produtos.find (p=>p.id == req.params.id);
//   res.json(produto);
// })

// Inicializa o servidor HTTP na porta 3001
//porta 3000 minha não funciona


app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
 });
