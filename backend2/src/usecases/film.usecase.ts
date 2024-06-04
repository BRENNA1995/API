import { Film, FilmCreated, FilmRepository } from "../interfaces/film.interface";
import { FilmRepositoryPrisma } from "../repositories/filmes.repository";

class FilmuseCase {
   private filmRepository: FilmRepository

   constructor(){
      this.filmRepository = new FilmRepositoryPrisma()
   }

   async findAllFilms(): Promise<Film[]>{
      const result = await this.filmRepository.findAll()
      return result
   }

   async findUniqueFilm(id: string): Promise<Film | null>{
      const result = await this.filmRepository.findByIdOrTitle(id)
      return result;
   }
   
   async create(data: FilmCreated): Promise<Film>{
      const verifyFilmExists = await this.filmRepository.findByIdOrTitle(data.title)
      if(verifyFilmExists) {
         throw new Error('Film already exists');
      }

      const result = await this.filmRepository.create(data)
      return result;
   }

   async delete(id: string): Promise<FilmCreated>{
      const result = await this.filmRepository.delete(id)
      return result;
   }
}

export { FilmuseCase }