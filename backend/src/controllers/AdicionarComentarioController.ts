import { prismaClient } from "../database/prismaclient";
import { Request, Response } from "express";
//import { AdicionarFilmeController } from "../AdicionarFilmeController";

export class AdicionarComentarioController {
  async handle(request: Request, response: Response) {
    const {nome_usuario , comentario_inserido ,  filme_id} = request.body;

    
//Verificar se o filme existe
//senão existe -> acrescentar
//se existe -> acrescentar


    await prismaClient.comentario.create({
      data: {
        comentario_inserido , nome_usuario ,filme_id,
            
          },
 
    });

    return response.status(201);
  }
}