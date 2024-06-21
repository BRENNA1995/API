import { Comment } from "@prisma/client"

export interface usuario {
   id: number,
   username: string,
   email: string,
   senha: string,
   isAdmin: boolean,
   status: string,

}

export interface usuarioComComentario extends usuario{
   comment: Comment[]
}

export interface usuarioCreated {
   id: number,
   username: string,
   email: string,
   senha: string,
   isAdmin: boolean,
   status: string,
}
export interface statusUpdate {
   status: string,
}
export interface isAdminUpdate {
   isAdmin: boolean,
}
export interface usuariofindById {
   id: number,
}
export interface ParamsType {
   id: string
}
export interface UsuarioRepository {
   create(data: usuarioCreated): Promise<usuario>
   findAll(): Promise<usuarioComComentario[]>
   findById(id: number): Promise<usuario | null>
   updateByIdStatus(id: number, data: statusUpdate): Promise<usuario | null>
   updateByIdAdmin(id: number, data: isAdminUpdate): Promise<usuario | null>
   //delete(id: number): Promise<usuarioCreated>    
}
