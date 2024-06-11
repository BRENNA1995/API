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

   async findByTitle(title: string): Promise<Film | null> {
      const result = await this.filmRepository.findByTitle(title)
      return result;
   }

   // async findByTitleDetail(title: string): Promise<Film> {
   //    const verifyFilmExists = await this.filmRepository.findByTitle(title)
   //    const start = new Date(Date.now());
   //    let result={id:'',title:'',sinopse:'',poster:'',imdbVotes:0,imdbRating:0,createdAt: start}

   //    if(verifyFilmExists) {
   //       result= this.filmRepository.findByTitle(title)
   //    }
   //    return result;
   // } 

   async create(data: FilmCreated): Promise<Film>{
      const verifyFilmExists = await this.filmRepository.findByTitle(data.title)
      if(verifyFilmExists) {
         throw new Error('Filme já existe');
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