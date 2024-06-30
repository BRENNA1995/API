import { Filme } from "@prisma/client";
import { Film, FilmCreated, FilmRepository } from "../interfaces/film.interface";
import { FilmRepositoryPrisma } from "../repositories/filmes.repository";

class FilmuseCase {
   private filmRepository: FilmRepository

   constructor() {
      this.filmRepository = new FilmRepositoryPrisma()
   }
   async findAllFilms(): Promise<Film[]> {
      const result = await this.filmRepository.findAll()
      return result
   }
   async findById(id: number): Promise<Film | null> {
      const result = await this.filmRepository.findById(id)
      return result;
   }
   async create(data: FilmCreated): Promise<Film | null > {
      const verifyFilmExists = await this.filmRepository.findById(data.id)
      if (verifyFilmExists) {
         console.log('Filme já existe');
      }
      else
      {
        return await this.filmRepository.create(data) 
      }
      return null;
   }
   async delete(id: string): Promise<FilmCreated> {
      const result = await this.filmRepository.delete(id)
      return result;
   }
}
export { FilmuseCase }
