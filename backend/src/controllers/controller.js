// //const knexconfig = require("../knexfile.js");

// const coonect = require("knex")(knexconfig);

// const getAllCommentsIdfilme = (req, res) => {
//     const { comentario_filme_id } = req.params.comentario_filme_id;
//     const comentario = coonect("comentario")
//       .where("id", comentario_filme_id)
//       .then((dados) => {
//         if (dados.length > 0) {
//           res.status(200).json({
//             message: "Comentarios obtidos com sucesso",
//             data: dados[0],
//           });
//         } else {
//           res.status(404).json({
//             message: "Filme não possui comentario",
//           });
//         }
//       })
//       .catch((err) => {
//         res
//           .status(500)
//           .json({ message: `Erro ao procurar o comentario: ${err.message}` });
//       });
//     return comentario;
//   };

// const AddComentario = (req, res) => {
//     const comentario = coonect("comentario")
//       .insert(req.body)
//       .then(() => {
//         res.status(201).json({
//           message: "Comentario adicionado com sucesso",
//         });
//       })
//       .catch((err) => {
//         res
//           .status(401)
//           .json({ message: `Erro ao inserir o comentario: ${err.message}` });
//       });
//     return comentario;
//   };
  
// const deleteComentario = (req, res) => {
//     const { id } = req.params;
//     const comentario = coonect("comentario")
//       .where("id", id)
//       .del()
//       .then(() => {
//         res.status(200).json({ message: `Comentario excluido com sucesso` });
//       })
//       .catch((err) => {
//         res
//           .status(500)
//           .json({ message: `Erro ao excluir o comentario: ${err.message}` });
//       });
//     return comentario;
//   };
  
// module.exports = {
//     getAllCommentsIdfilme,
//     AddComentario,
//     deleteComentario
//   };
