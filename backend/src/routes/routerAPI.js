const express = require('express');
const routerAPI = express.Router();
routerAPI.use(express.json());
routerAPI.use(express.urlencoded({ extended: true }))

routerAPI.get ('/comentario/:id', (req, res) => {
    let id=req.params.id;
    knex('comentario').where('id','id')
    .then((dados)=> {
        res.json(dados);
    })
    .catch((err) => {
    res.json({ message:`Erro ao inserir os produtos: ${err.message}`});
    })
})

routerAPI.post('/comentario', (req, res) => {
    console.log (req.body);
    
    knex('comentario')
        .insert(req.body,['id'])
        .then((dados)=> {
            if (dados.length > 0){
                const id=dados[0].id;
                res.status(201).json( { 
                    message: 'Produto adicionado com sucesso',
                    data: { id} } ); 
            }
        })
        .catch((err) => {
        res.json({ message:`Erro ao inserir os produtos: ${err.message}`});
        })

}) 

routerAPI.delete('/comentario/:id', (req, res)=> {
    knex('comentario').where('id', req.params.id)
        .del()
        .then((dados)=>  {
                knex.select()
                .from('comentario')
                .then((dados)=> {
                    res.json(dados);
                })
        })
        .catch((err) => {
            res.json({ message:`Erro ao excluir o produto: ${err.message}`});
        })
    })



module.exports = routerAPI;