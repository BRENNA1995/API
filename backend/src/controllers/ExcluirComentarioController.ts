import { Request, Response } from "express";
import { prismaClient } from "../database/prismaclient";

export class ExcluirComentarioController {
  async handle(request: Request, response: Response) {
    const { comentario_filme_id, filme_id} = request.params;

    const comentarioid = await prismaClient.comentario.delete({
      where: {
        comentario_filme_id,filme_id,
      }
    });

    return response.status(204);
  }
}