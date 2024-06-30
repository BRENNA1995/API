import { Comment } from "@prisma/client"

export interface usuario {
   id: number,
   username: string,
   email: string,
   senha: string,
   isAdmin?: boolean,
   status: string
}

export interface statusUpdate {
   status: string,
}
export interface isAdminUpdate {
   isAdmin: boolean,
}
export interface usuariofindByEmailSenha {
   email: string,
   senha: string, 
}
export interface ParamsType {
   id: string
}
export interface UsuarioRepository {
   create(data: usuario): Promise<usuario>
   findByEmail(email: string): Promise<usuario | null>
   findUsernameByEmail(email: string): Promise<string >
   usuariofindByEmailSenha(email: string, senha: string ): Promise<usuario  | null>
   updateByIdStatus(id: number, data: statusUpdate): Promise<usuario | null>
   updateByIdAdmin(id: number, data: isAdminUpdate): Promise<usuario | null>
   getAllUsuarios(): Promise<usuario[]>
   deleteUsuario(id: number): Promise<number >
}
