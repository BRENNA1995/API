import { Usuario } from "@prisma/client";
import { usuarioComComentario } from "./usuario.interface";

export interface Comment {
   id: number,
   usuarioId: number,
   comment: string,
   createdAt: Date,
   filmeId: number,
}


export interface CommentInsert {
   usuarioId: number,
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

