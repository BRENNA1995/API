import { FastifyInstance } from "fastify";
import { UsuariouseCase } from "../usecases/usuario.Usecase";
import { isAdminUpdate, statusUpdate, usuarioCreated } from "../interfaces/usuario.interface";

export async function usuarioRoutes(fastify: FastifyInstance){

   const usuarioUsecase = new UsuariouseCase()

    fastify.get('/', async (req, reply)=> {
        const response = await usuarioUsecase.findAll();
        reply.send(response);

   })
    fastify.get<{Params: { id: number }}>('/:id', async (req, reply)=> {
        const response = await usuarioUsecase.findById(req.params.id);
        reply.send(response);
    })

    fastify.put<{Params: { id: number,tipo: string  }}>('/:id', async (req: any , reply: any)=> {
        if (req.params.tipo=='STATUS')
            {
            const response = await usuarioUsecase.updateByIdStatus(req.params.id,req.body );
            reply.send(response);
            }
        if (req.params.tipo=='ADMIN')
            {
            const response = await usuarioUsecase.updateByIdAdmin(req.params.id,req.body );
            reply.send(response);
            }
    })


   fastify.post<{ Body: usuarioCreated}>('/new', async (req, reply)=> {
        const response = await usuarioUsecase.create(req.body);
        reply.send(response);
   })

 

}