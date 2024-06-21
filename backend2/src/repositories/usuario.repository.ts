import { prisma } from "../database/prisma-client";
import { isAdminUpdate, statusUpdate, usuario, usuarioComComentario, usuarioCreated, UsuarioRepository } from "../interfaces/usuario.interface";

class usuarioRepositoryPrisma implements UsuarioRepository {

   async create(data: usuarioCreated): Promise<usuario> {
      try {
         const result = await prisma.usuario.create({ data })
         return result;
      } catch (e) {
         throw e
      }
   }
   // async findAll(): Promise<usuario[]> {
   //    const result = await prisma.usuario.findMany()
   //    return result;
   // }

   async findAll(id: number): Promise<usuarioComComentario[]> {
      return  await prisma.usuario.findMany({
         where: {id: id },
         include: {comment: true},
      });
     
   }

   async findById(id: number): Promise<usuario | null> {
      const result = await prisma.usuario.findFirst({
         where: { id },
      })
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
