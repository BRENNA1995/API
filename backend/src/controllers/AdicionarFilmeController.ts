import { prismaClient } from "../database/prismaclient";
import { Request, Response } from "express";
import { Filme } from "../interfaces/filme.interfaces";

const API_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDE2YWY1ZDRmYWVlNjRlMjVhYjAwMWQ4N2FhYjVjMyIsInN1YiI6IjVkMzQ3ZmJhNmEzMDBiMTMzM2ExZjE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5u8zvrHbSXgYs7Z4-tJpdGvUsyNt9Gi34C7EVN1RGxI'


export class AdicionarFilmeController<Filme> {
  async handle(request: Request, response: Response) {
    //const {nomefilme ,filme_id, sinopse , data_lancamento , Nota, popularidade, duracao,imageUrl } = request.body;

     let filmes={};
    console.log(10, 'Hello');
 
     await fetch('https://api.themoviedb.org/3/movie/popular', {
       headers: {
        'Authorization': `Bearer ${API_TOKEN}`,

      } })
      .then(response => {        
       filmes = response.json()

        console.log(23,filmes)
        
      }
    
    )
    response.send(filmes);
    
          

        

    
    

    

  //   //VERIFICAR SE O FILME EXISTE ANTES DE ACRESCENTAR 
  //     const Filme = await prismaClient.filme.findUnique({
  //       where: {
  //         filme_id,
  //       },
  //     });

  //     if(!Filme){
  //         await prismaClient.filme.create({
  //           data: {
  //                   nomefilme,
  //                   filme_id,
  //                   sinopse,
  //                   data_lancamento ,
  //                   Nota  ,
  //                   popularidade ,
  //                   duracao ,
  //                   imageUrl,
                  
  //         },
    
  //       });
  //         return response.status(201);
  //     }
   

  // };
    }}