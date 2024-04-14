const express = require('express'); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
const morgan = require('morgan'); 
app.use(morgan('common'));





// Inicializa o servidor HTTP na porta 3001
//porta 3000 minha não funciona
const port = 3001
const servidor = '127.0.0.1'
app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
