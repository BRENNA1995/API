import express from "express";  
import { router } from "./src/routes/routes";
const app = express();
const servidor = "127.0.0.1";
const port = 3002;
//const cors = require("cors");
app.use(express.json());
app.use(router);


app.listen(port, function () {
  console.log(`Servidor rodando em http://${servidor}:${port}`);
});

