CREATE TABLE filmes (
comentario_filme_id SERIAL PRIMARY KEY NOT NULL,
nomefilme VARCHAR(50) NOT NULL
);

CREATE TABLE comentario (
id serial primary KEY NOT NULL,
comentario_filme_id INTEGER NOT NULL,
nome_usuario VARCHAR(15) NOT NULL,
data_inseriu_comentario DATE NOT NULL,
comentario VARCHAR(100) NOT NULL,
FOREIGN KEY(comentario_filme_id ) 
REFERENCES filmes (comentario_filme_id )
);

CREATE TABLE usuario (
id serial primary KEY NOT NULL,
nome_usuario VARCHAR(15) NOT NULL,
status_usuario  VARCHAR(100) NOT NULL,
administrador_sistema BOOLEAN NOT NULL
);