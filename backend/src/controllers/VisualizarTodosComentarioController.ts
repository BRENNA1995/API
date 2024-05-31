import { Request, Response } from "express";
import { prismaClient } from "../database/prismaclient";

export class VisualizarTodosComentarioController {
  async handle(request: Request, response: Response) {
    const { comentario_filme_id } = request.params;

    const filmeid = await prismaClient.comentario.findMany({
      where: {
        comentario_filme_id,
      }
    });

    return response.json(filmeid);
  }
}