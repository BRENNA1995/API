import { FastifyInstance } from "fastify";
import { UsuariouseCase } from "../usecases/usuario.Usecase";
import { isAdminUpdate, statusUpdate, usuario } from "../interfaces/usuario.interface";

export async function usuarioRoutes(fastify: FastifyInstance) {
    const usuarioUsecase = new UsuariouseCase()

    fastify.post<{ Body: { email: string, senha: string } }>('/login', async (req, reply) => {
        const response = await usuarioUsecase.usuarioBooleanByEmailSenha(req.body.email, req.body.senha);
        if (response) {
            const res = await usuarioUsecase.findUsernameByEmail(req.body.email)
            await reply.send(res)
        }
        else {
            reply.status(401)
        }
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
    fastify.get('/all', async (req, reply) => {
        console.log(33, 'get all')
        const response = await usuarioUsecase.getAllUsuarios();
        reply.send(response);
    })

    fastify.delete<{ Body: usuario }>('/:id', async (req, reply) => {
        const data = await usuarioUsecase.deleteUsuario(req.body.id);
        reply.status(200);
    })
    
    
}
