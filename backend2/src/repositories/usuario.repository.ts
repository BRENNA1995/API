import { prisma } from "../database/prisma-client";
import { isAdminUpdate, statusUpdate, usuario,  UsuarioRepository,  } from "../interfaces/usuario.interface";

class usuarioRepositoryPrisma implements UsuarioRepository {
   async findUsernameByEmail(email: string): Promise< string > {
      const result = await prisma.usuario.findFirst({
         where: { email },
      }) 
      let username =result?.username ? result.username : ''
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
   async usuariofindByEmailSenha(email: string, senha: string ): Promise<usuario | null >  {
      const result = await prisma.usuario.findFirst({
         where: { email, senha },
      })
      console.log(24, result)
      return result;
   }
 
   async updateByIdStatus(id: number, data: statusUpdate): Promise<usuario | null> {
      const result = await prisma.usuario.update({
         where: { id },
         data: {
            status: data.status
         },
      });
      return result;
   }
   async updateByIdAdmin(id: number, data: isAdminUpdate): Promise<usuario | null> {
      const result = await prisma.usuario.update({
         where: { id },
         data: {
            isAdmin: data.isAdmin
         },
      });
      return result;
   }
}
export { usuarioRepositoryPrisma }; 
