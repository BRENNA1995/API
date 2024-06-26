import { FastifyInstance } from "fastify";
import { FilmuseCase } from "../usecases/film.usecase";
import { FilmApi } from "../interfaces/film-api.interface";
import { FilmCreated, ParamsType } from "../interfaces/film.interface";

export async function filmRoutes(fastify: FastifyInstance) {
   const filmUsecase = new FilmuseCase()

   fastify.get('/', async (req, reply) => {
      const data = await filmUsecase.findAllFilms()
      reply.send(data);
   })
   fastify.get<{ Params: FilmCreated }>('/:id', async (req, reply) => {
      console.log(req.params.id)

      await fetch(`https://api.themoviedb.org/3/movie/${req.params.id}`, {
         headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
         }
      }).then(async response => {
         const { results } = await response.json()
         console.log(results)
         reply.status(200)
      })
      //salvar no banco
      const data = await filmUsecase.findById(Number(req.params.id))
      reply.send(data)
   })
   fastify.post<{ Body: FilmCreated }>('/new', async (req, reply) => {
      try {
         await filmUsecase.create({
            id: req.body.id,
            title: req.body.title,
            sinopse: req.body.sinopse,
            imdbVotes: req.body.imdbVotes,
            imdbRating: req.body.imdbRating,
            poster: req.body.poster,
            createdAt: new Date(req.body.createdAt)
         })
         reply.status(204)
      } catch (error) {
         reply.send(error)
      }
   })
   
   // fastify.post<{ Body: FilmCreated }>('/api', async (req, reply) => {
   //          filmUsecase.create({
   //                id: req.body.id,
   //                title: req.body.title,
   //                sinopse: req.body.sinopse,
   //                imdbVotes: req.body.imdbVotes,
   //                imdbRating: req.body.imdbRating,
   //                poster: req.body.poster,
   //                createdAt: new Date(req.body.createdAt)
   //                })
   //                reply.status(204)
   //          })
   



   fastify.post('/api', async (req, reply) => {

      await fetch('https://api.themoviedb.org/3/movie/popular', {
         headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
         }
      })
         .then(async response => {
            const { results } = await response.json()
            results?.forEach(async (film: FilmApi) => {
               await filmUsecase.create({
                  id: film.id,
                  title: film.title,
                  sinopse: film.overview,
                  imdbVotes: film.vote_average,
                  imdbRating: film.vote_count,
                  poster: `https://image.tmdb.org/t/p/w300${film.poster_path}`,
                  createdAt: new Date(film.release_date)
               })
               
            });
            console.log(84, results)
            reply.status(204)
         })
   }

   )
}
