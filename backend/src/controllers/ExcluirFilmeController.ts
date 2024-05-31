import { Request, Response } from "express";
import { prismaClient } from "../database/prismaclient";

export class ExcluirFilmeController {
  async handle(request: Request, response: Response) {
    const { filme_id } = request.params;

//Verificar se o id existe antes de excluir 

     await prismaClient.filme.delete({
      where: {
        filme_id,
      }
    });

    return response.status(204);
  }
}