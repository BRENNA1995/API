-- CreateTable
CREATE TABLE "Comentario" (
    "comentario_filme_id" TEXT NOT NULL,
    "nome_usuario" TEXT NOT NULL,
    "comentario_inserido" TEXT NOT NULL,
    "data_inseriu_comentario" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("comentario_filme_id")
);

-- CreateTable
CREATE TABLE "Filme" (
    "filme_id" TEXT NOT NULL,
    "nomefilme" TEXT NOT NULL,
    "comentario_id" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "data_lancamento" TIMESTAMP(3) NOT NULL,
    "Nota" TEXT NOT NULL,
    "popularidade" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("filme_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Filme_filme_id_key" ON "Filme"("filme_id");

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_comentario_id_fkey" FOREIGN KEY ("comentario_id") REFERENCES "Comentario"("comentario_filme_id") ON DELETE RESTRICT ON UPDATE CASCADE;
