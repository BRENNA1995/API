import { Request, Response } from "express";
import { prismaClient } from "../database/prismaclient";

export class ExcluirComentarioController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const comentarioid = await prismaClient.comentario.delete({
      where: {
        id,
      }
    });

    return response.json(comentarioid);
  }
}