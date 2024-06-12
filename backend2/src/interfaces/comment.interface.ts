export interface Comment {
   id: number,
   usuarioId: number,
   comment: string,
   createdAt: Date,
   filmeId: string,

}

export interface CommentInsert {
   usuarioId: number,
   comment: string,
   filmeId: string,
}

export interface CommentsRepository{
   findAll(): Promise<Comment[]>
   create(data: CommentInsert): Promise<Comment>
   delete(id: number): Promise<Comment>
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