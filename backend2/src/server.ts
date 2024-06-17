import fastify, { FastifyInstance } from "fastify";
import { filmRoutes } from './routes/filme.routes'
import { commentRoutes } from "./routes/comment.routes";
import { usuarioRoutes } from "./routes/usuario.routes";

const server: FastifyInstance = fastify({
   logger: true 
})

server.register(filmRoutes,{
   prefix: '/filmes'
});

server.register(commentRoutes, {
   prefix: '/comentarios'
});

server.register(usuarioRoutes, {
   prefix: '/usuarios'
});

server.listen(
   {
      port: 3003,
   }, 
   ()=> console.log('Server executing in port 3003'),
);
