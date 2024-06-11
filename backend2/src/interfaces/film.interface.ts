export interface Film {
   id: string,
   title: string,
   sinopse: string,
   poster: string,
   imdbVotes: number,
   imdbRating: number,
   createdAt: Date
}

export interface FilmCreated {
   title: string,
   sinopse: string,
   imdbVotes: number,
   poster: string,
   imdbRating: number,
   createdAt: Date
}
export interface FilmfindByTitle {
   title: string,
}

export interface ParamsType {
   id: string
}

export interface FilmRepository {
   create(data: FilmCreated): Promise<Film>
   findAll(): Promise<Film[]>
   findByTitle(title: string): Promise<Film | null>
   delete(title: string): Promise<FilmCreated>
}

