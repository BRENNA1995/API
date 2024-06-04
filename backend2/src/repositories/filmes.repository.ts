import { prisma } from "../database/prisma-client";
import { Film, FilmCreated, FilmRepository } from "../interfaces/film.interface";

class FilmRepositoryPrisma implements FilmRepository{
  
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

   async findByIdOrTitle(id: string, title: string): Promise<Film | null> {
      const result = await prisma.filme.findFirst({
         where:{
            OR:[
               {
                  id,                  
               },
               {
                  title,
               }
            ],                           
         },         
      })
      return result;
   }
   
   async delete(id: string): Promise<FilmCreated> {
      const result = await prisma.filme.delete({
         where: {
            id
         }
      })
      return result;
   }
   
}

export { FilmRepositoryPrisma };