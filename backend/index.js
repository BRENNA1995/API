const express = require('express'); // Importa o módulo do Express Framework
const app = express(); // Inicializa um objeto de aplicação Express
// Inicializa o servidor HTTP na porta 3001
//porta 3000 minha não funciona
const port = 3001
app.use(express.json());

const servidor = '127.0.0.1'
app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
