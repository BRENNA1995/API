/*
  Warnings:

  - You are about to drop the `comentarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `filmes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_filmeId_fkey";

-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_usuarioId_fkey";

-- DropTable
DROP TABLE "comentarios";

-- DropTable
DROP TABLE "filmes";

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "Filme" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "imdbVotes" DOUBLE PRECISION NOT NULL,
    "imdbRating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "filmeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Filme_title_key" ON "Filme"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
