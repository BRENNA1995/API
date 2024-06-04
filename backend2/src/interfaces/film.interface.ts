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
export interface FilmFindByIdOrTitle {
   id: string,
   title: string,
}

export interface ParamsType {
   id: string
}

export interface FilmRepository {
   create(data: FilmCreated): Promise<Film>
   findAll(): Promise<Film[]>
   findByIdOrTitle(id?: string, title?: string): Promise<Film | null>
   delete(id: string): Promise<FilmCreated>
}

