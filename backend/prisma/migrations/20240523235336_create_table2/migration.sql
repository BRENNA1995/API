/*
  Warnings:

  - You are about to drop the column `comentario` on the `Comentario` table. All the data in the column will be lost.
  - Added the required column `comentario_inserido` to the `Comentario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "comentario",
ADD COLUMN     "comentario_inserido" TEXT NOT NULL;
