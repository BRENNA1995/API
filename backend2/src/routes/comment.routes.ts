import { FastifyInstance } from "fastify";
import { CommentUsecase } from "../usecases/comment.Usecase";
import { CommentDelete, CommentInsert, CreatedCommentReturn } from "../interfaces/comment.interface";

export async function commentRoutes(fastify: FastifyInstance){

   const commentUsecase = new CommentUsecase()

   fastify.get('/', async (req, reply)=> {
      const response = await commentUsecase.findAllComments();
      reply.send(response);

   })

   fastify.post<{ Body: CommentInsert}>('/new', async (req, reply)=> {
      
      const response = await commentUsecase.createComment(req.body);
      
      if(response.statuscode == 201){
         reply.code(response.statuscode).send(response.body);
      }else {
         reply.code(response.statuscode).send(response.messageError)
      }
   })

   fastify.delete<{Params: { id: number }}>('/:id', async (req, reply)=> {
      const data = await commentUsecase.deleteComment(req.params.id);
      reply.send(data);
   })

}