const express = require("express"); // Importa o módulo do Express Framework
const router = express.Router(); // Inicializa um objeto de aplicação Express
const {
    getAllCommentsIdfilme,
    AddComentario,
    deleteComentario
  } = require("../controllers/controller");


router.use('/', app);
 
 router.get('/ler', getAllCommentsIdfilme )
 
 router.post('/enviar', AddComentario  ) ;

 router.delete('/excluir', deleteComentario)
 

module.exports = router;