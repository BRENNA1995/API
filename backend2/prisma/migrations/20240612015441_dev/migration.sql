/*
  Warnings:

  - The primary key for the `filmes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `filmeId` on the `comentarios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `filmes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_filmeId_fkey";

-- AlterTable
ALTER TABLE "comentarios" DROP COLUMN "filmeId",
ADD COLUMN     "filmeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "filmes" DROP CONSTRAINT "filmes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "filmes_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "filmes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
