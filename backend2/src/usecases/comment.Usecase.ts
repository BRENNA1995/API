import { CommentInsert, CommentsRepository } from "../interfaces/comment.interface";
import { CommentRepositoryPrisma } from "../repositories/comments.repository";

class CommentUsecase {
   private commentRepository: CommentsRepository
   constructor(){
      this.commentRepository = new CommentRepositoryPrisma();
   }

   async findAllComments(){
      const result = await this.commentRepository.findAll();
      return result;
   }

   async createComment(data: CommentInsert){
      if (data.filmeId == null || data.filmeId == "" || data.username == null || data.username == "" ||
      data.filmeId == null || data.filmeId == ""){
         return {
            statuscode: 400,
            messageError: 'Bad request',
            message: 'Um dos campos esta nulo ou o dado nao correponde ao esperado, Verifique e tente novamente.',
            body: {}
         }
      }
      
      const result = await this.commentRepository.create(data);
      return {
         statuscode: 201,
         messageError: '',
         message: 'Created',
         body: { result }
         };
   }

   async deleteComment(id: number){      
      const result = await this.commentRepository.delete(id);
      return result;
   }
}

export { CommentUsecase }