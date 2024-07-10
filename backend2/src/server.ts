import fastify, { FastifyInstance } from "fastify";
import { filmRoutes } from './routes/filme.routes'
import { commentRoutes } from './routes/comment.routes'
import { usuarioRoutes } from "./routes/usuario.routes";
require("dotenv").config();

import cors from "@fastify/cors"
const port= process.env.PORT ?? 3003 


const server: FastifyInstance = fastify({
   logger: true
})
server.register(cors, {
   origin: '*',
   methods: ['GET','DELETE','POST', 'PUT']
})
server.register(filmRoutes, {
   prefix: '/filmes'
});
server.register(commentRoutes, {
   prefix: '/filmes/:id/comentarios'
});

server.register(usuarioRoutes, {
   prefix: '/usuarios'
});
server.listen({ port: process.env.PORT ?? '3003' }).then(() => {
   console.log('Server is running')
}
);

