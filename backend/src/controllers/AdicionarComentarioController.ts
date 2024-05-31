import { prismaClient } from "../database/prismaclient";
import { Request, Response } from "express";

export class AdicionarComentarioController {
  async handle(request: Request, response: Response) {
    const {nome_usuario , comentario_inserido , comentario_filme_id, filme_id} = request.body;

    const comentario = await prismaClient.comentario.create({
      data: {
        comentario_inserido , nome_usuario ,comentario_filme_id,
          filme:{
            create:[ filme_id],
            
          },

      },
 
    });

    return response.json(comentario);
  }
}