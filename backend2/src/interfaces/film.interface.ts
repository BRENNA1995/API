export interface Film {
   id: number,
   title: string,
   sinopse: string,
   poster: string,
   imdbVotes: number,
   imdbRating: number,
   createdAt: Date,
}
export interface FilmCreated {
   id: number,
   title: string,
   sinopse: string,
   imdbVotes: number,
   poster: string,
   imdbRating: number,
   createdAt: Date,
}
export interface FilmfindById {
   id: number,
}
export interface ParamsType {
   id: string
}
export interface FilmRepository {
   create(data: FilmCreated): Promise<Film>
   findAll(): Promise<Film[]>
   findById(id: number): Promise<Film | null>
   delete(title: string): Promise<FilmCreated>
   //findByIdDetail(title: string): Promise<Film >
}
