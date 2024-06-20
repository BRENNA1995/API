import { prisma } from "../database/prisma-client";
import { Film, FilmCreated, FilmRepository } from "../interfaces/film.interface";

class FilmRepositoryPrisma implements FilmRepository {

   async create(data: FilmCreated): Promise<Film> {
      try {
         const result = await prisma.filme.create({ data })
         return result;
      } catch (e) {
         throw e
      }
   }
   async findAll(): Promise<Film[]> {
      const result = await prisma.filme.findMany()
      return result;
   }
   async findById(id: number): Promise<Film | null> {
      const result = await prisma.filme.findFirst({
         where: { id },
      })
      return result;
   }
   async delete(title: string): Promise<FilmCreated> {
      const result = await prisma.filme.delete({
         where: {
            title
         }
      })
      return result;
   }
}
//update 
export { FilmRepositoryPrisma }; 
