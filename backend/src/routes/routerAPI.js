const express = require('express');
const routerAPI = express.Router();
routerAPI.use(express.json());
routerAPI.use(express.urlencoded({ extended: true }))

routerAPI.get ('/movie/:comentario_filme_id', (req, res) => {
    let id=req.params.comentario_filme_id;
    knex('comentario').where('id','id')
    .then((dados)=> {
        res.json(dados);
    })
    .catch((err) => {
    res.json({ message:`Erro ao inserir os produtos: ${err.message}`});
    })
})

routerAPI.post('/movie/:comentario_filme_id', (req, res) => {
    console.log (req.body);
    
    knex('comentario')
        .insert(req.body,['comentario_filme_id'])
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

routerAPI.delete('/movie/:comentario_filme_id', (req, res)=> {
    knex('comentario').where('comentario_filme_id', req.params.id)
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