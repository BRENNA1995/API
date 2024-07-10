import { prisma } from "../database/prisma-client";
import {  usuario, UsuarioRepository } from "../interfaces/usuario.interface";

class usuarioRepositoryPrisma implements UsuarioRepository {
   async findUsernameByEmail(email: string): Promise<string> {
      const result = await prisma.usuario.findFirst({
         where: { email },
      })
      let username = result?.username ? result.username : ''
      return username
   }
   async create(data: usuario): Promise<usuario> {
      try {
         const result = await prisma.usuario.create({ data })
         return result;
      } catch (e) {
         throw e
      }
   }
   async findByEmail(email: string): Promise<usuario | null> {
      const result = await prisma.usuario.findFirst({
         where: { email },
      })
      return result;
   }
   async usuariofindByEmailSenha(email: string, senha: string): Promise<usuario | null> {
      const result = await prisma.usuario.findFirst({
         where: { email, senha },
      })
      return result;
   }   
   async updateByIdStatusBloqueio(id: number): Promise<usuario | null> {
      id=Number(id)
      const result = await prisma.usuario.update({
            where: { id },
                 
            data: {status: 'INATIVO'},
         })
      return result;
   }   
   async updateByIdStatusLiberar(id: number): Promise<usuario | null> {
      id=Number(id)
          const result = await prisma.usuario.update({
            where: { id },
                 
            data: {status: 'ATIVO'},
         })
            
      return result;
   }   
   async getAllUsuarios(): Promise<usuario[]> {
      return await prisma.usuario.findMany({
         orderBy: {
            username: 'asc'
         }
      }) 
   }
   async  deleteUsuario(id: number): Promise<usuario>{
      id=Number(id)
      const result = await prisma.usuario.delete({
         where:{id}
      })
         return result; 
   }   
}
export { usuarioRepositoryPrisma };
