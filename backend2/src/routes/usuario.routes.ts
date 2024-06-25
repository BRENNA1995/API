import { FastifyInstance } from "fastify";
import { UsuariouseCase } from "../usecases/usuario.Usecase";
import { isAdminUpdate, statusUpdate,usuario } from "../interfaces/usuario.interface";

export async function usuarioRoutes(fastify: FastifyInstance) {

    const usuarioUsecase = new UsuariouseCase()

  
    fastify.get<{ Body: usuario }>('/login', async (req, reply) => {
        const response = await usuarioUsecase.usuariofindByEmailSenha(req.body.email, req.body.senha);
        reply.send(response);
    })


    fastify.put<{ Params: { id: number, tipo: string } }>('/:id', async (req: any, reply: any) => {
        if (req.params.tipo == 'STATUS') {
            const response = await usuarioUsecase.updateByIdStatus(req.params.id, req.body);
            reply.send(response);
        }
        if (req.params.tipo == 'ADMIN') {
            const response = await usuarioUsecase.updateByIdAdmin(req.params.id, req.body);
            reply.send(response);
        }
    })
    fastify.post<{ Body: usuario }>('/new', async (req, reply) => {
        const response = await usuarioUsecase.create(req.body);
        reply.send(response);
    })
}
