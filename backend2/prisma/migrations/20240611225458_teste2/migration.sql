/*
  Warnings:

  - You are about to drop the column `username` on the `comentarios` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_username_fkey";

-- DropIndex
DROP INDEX "usuario_username_key";

-- AlterTable
ALTER TABLE "comentarios" DROP COLUMN "username",
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
