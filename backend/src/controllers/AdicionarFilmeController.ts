import { prismaClient } from "../database/prismaclient";
import { Request, Response } from "express";

export class AdicionarFilmeController {
  async handle(request: Request, response: Response) {
    const {nomefilme ,filme_id, sinopse , data_lancamento , Nota, popularidade, duracao,comentario } = request.body;

//VERIFICAR SE O FILME EXISTE ANTES DE ACRESCENTAR 

     await prismaClient.filme.create({
        data: {
                nomefilme,
                filme_id,
                sinopse ,
                data_lancamento ,
                Nota  ,
                popularidade ,
                duracao ,
                comentario, 
      },
 
    });

    return response.status(201);
  }
}