import { prismaClient } from "../database/prismaclient";
import { Request, Response } from "express";

export class AdicionarComentarioController {
  async handle(request: Request, response: Response) {
    const {nome_usuario , comentario_inserido ,  data_inseriu_comentario, comentario_filme_id } = request.body;

    const comentario = await prismaClient.comentario.create({
      data: {
        comentario_inserido , nome_usuario , data_inseriu_comentario,comentario_filme_id
      },
    });

    return response.json(comentario);
  }
}