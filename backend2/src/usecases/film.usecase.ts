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
   // async findByIdDetail(title: string): Promise<Film> {
   //    const verifyFilmExists = await this.filmRepository.findById(title)
   //    const start = new Date(Date.now());
   //    let result={id:'',title:'',sinopse:'',poster:'',imdbVotes:0,imdbRating:0,createdAt: start}

   //    if(verifyFilmExists) {
   //       result= this.filmRepository.findById(title)
   //    }
   //    return result;
   // } 

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
