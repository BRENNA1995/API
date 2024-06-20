import { FastifyInstance } from "fastify";
import { CommentUsecase } from "../usecases/comment.Usecase";
import { CommentDelete, CommentInsert, CreatedCommentReturn } from "../interfaces/comment.interface";

export async function commentRoutes(fastify: FastifyInstance) {

   const commentUsecase = new CommentUsecase()

   fastify.get<{ Params: { id: number } }>('/', async (req, reply) => {
      const response = await commentUsecase.findAllComments(Number(req.params.id));
      reply.send(response);
   })
   fastify.post<{ Params: { id: number }, Body: { usuarioId: number, comment: string } }>('/new', async (req, reply) => {
      const resposta: CommentInsert = { usuarioId: req.body.usuarioId, comment: req.body.comment, filmeId: Number(req.params.id) }
      const response = await commentUsecase.createComment(resposta);

      if (response.statuscode == 201) {
         reply.code(response.statuscode).send(response.body);
      } else {
         reply.code(response.statuscode).send(response.messageError)
      }
   })
   fastify.delete<{ Params: { id: number } }>('/:id', async (req, reply) => {
      const data = await commentUsecase.deleteComment(Number(req.params.id));
      reply.code(200);
   })
}
