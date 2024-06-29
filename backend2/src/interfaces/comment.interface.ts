import { Usuario } from "@prisma/client";

export interface Comment {
   id: number,
   username: string,
   comment: string,
   createdAt: Date,
   filmeId: number,
}
export interface CommentInsert {
   username: string,
   comment: string,
   filmeId: number,
}
export interface CommentDelete {
   id: number
}
export interface CreatedCommentReturn {
   statuscode: number,
   messageError: string,
   message: string,
   body: object
}
export interface CommentsRepository {
   findAll(id: number): Promise<Comment[]>
   create(data: CommentInsert): Promise<Comment>
   delete(id: number): Promise<Comment>
}
