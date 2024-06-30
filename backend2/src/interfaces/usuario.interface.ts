export interface usuario {
   id: number,
   username: string,
   email: string,
   senha: string,
   isAdmin?: boolean,
   status: string
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
   updateByIdStatusBloqueio(id: number): Promise<usuario | null>
   updateByIdStatusLiberar(id: number): Promise<usuario | null>
   getAllUsuarios(): Promise<usuario[]>
   deleteUsuario(id: number): Promise<usuario >
}
