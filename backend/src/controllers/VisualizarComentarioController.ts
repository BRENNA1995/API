import { Request, Response } from "express";
import { prismaClient } from "../database/prismaclient";

export class VisualizarComentarioController {
  async handle(request: Request, response: Response) {
    const { comentario_filme_id } = request.params;

    const filmeid = await prismaClient.comentario.findFirst({
      where: {
        comentario_filme_id,
      }
    });

    return response.json(filmeid);
  }
}