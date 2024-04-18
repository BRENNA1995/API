const express = require('express');
const routerAPI = express.Router();
import axios from 'axios'; 
const axios = require("axios"); 
// processa o corpo da requisição e insere os dados recebidos 
// como atributos de req.body
routerAPI.use(express.json());
routerAPI.use(express.urlencoded({ extended: true }))

//INSERT 
axios.post('https://api.themoviedb.org/3/movie', userData)
    .then(response => {
    console.log(response.data);
})
    .catch(error => {
    console.error(error);
});

axios.get('https://your-api-url.com/users')
    .then(response => {
    console.log(response.data);
})
    .catch(error => {
    console.error(error);
});
    
      
axios.put('https://your-api-url.com/users/1', updatedUserData)
    .then(response => {
    console.log(response.data);
})
    .catch(error => {
    console.error(error);
});
        
axios.delete('https://your-api-url.com/users/1')
    .then(response => {
    console.log(response.data);
})
    .catch(error => {
    console.error(error);
});
  



// routerAPI.get ('/comentario', (_req, res) => {
//     res.json (comentario);
// })

// routerAPI.get ('/comentario/:id', (req, res) => {
//     let comentario = comentario.find (p => p.id == req.params.id);
//     res.json (comentario);
// })

// routerAPI.post('/comentario', (req, res) => {
//     console.log (req.body);
//     req.body.id = comentario.length + 1;
//     comentario.push (req.body);+

//     res.status(201).json( { 
//         message: 'Produto adicionado com sucesso',
//         data: { id: req.body.id } });  
// })

module.exports = routerAPI;