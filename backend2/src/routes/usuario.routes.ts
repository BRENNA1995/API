import { FastifyInstance } from "fastify";
import { UsuariouseCase } from "../usecases/usuario.Usecase";
import { usuario } from "../interfaces/usuario.interface";

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
    fastify.put<{ Params: { id: number } }>('/:id', async (req: any, reply: any) => {
       const response = await usuarioUsecase.updateByIdStatusBloqueio(req.params.id);
        reply.send(response);        
    })
    fastify.put<{ Params: { id: number } }>('/liberar/:id', async (req: any, reply: any) => {
        const response = await usuarioUsecase.updateByIdStatusLiberar(req.params.id);
         reply.send(response);
         
    })        
    fastify.post<{ Body: usuario }>('/new', async (req, reply) => {
        const response = await usuarioUsecase.create(req.body);
        reply.send(response);
    })    
    fastify.get('/all', async (req, reply) => {
        const response = await usuarioUsecase.getAllUsuarios();
        reply.send(response);
    })
    fastify.delete<{ Params: { id: number}}>('/:id', async (req, reply) => {
        const data = await usuarioUsecase.deleteUsuario(req.params.id);
        reply.status(200);
    })       
}
