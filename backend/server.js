const router = require("./src/routes/routerAPI")
const express = require("express"); // Importa o módulo do Express Framework
const servidor = "127.0.0.1";
const port = 3002;
const cors = require("cors");



router.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});
