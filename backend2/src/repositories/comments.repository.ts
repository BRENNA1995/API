import { prisma } from "../database/prisma-client";
import { Comment, CommentInsert, CommentsRepository } from "../interfaces/comment.interface";

class CommentRepositoryPrisma implements CommentsRepository{
   async findAll(id: number): Promise<Comment[]> {
      const result = await prisma.comment.findMany({where: {
         filmeId: id
      }})
      return result;
   }
   async create(data: CommentInsert): Promise<Comment> {
      try {
         const result = await prisma.comment.create({ data })
         return result;
         
      } catch (error) {
         throw error         
      }
   }
   async delete(id: number): Promise<Comment> {
      const result = await prisma.comment.delete({
         where:{
            id
         }
      })
      return result;
   }
}
//update
export{ CommentRepositoryPrisma }
