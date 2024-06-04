-- CreateTable
CREATE TABLE "filmes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "imdbVotes" DOUBLE PRECISION NOT NULL,
    "imdbRating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "filmeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "filmes_title_key" ON "filmes"("title");

-- CreateIndex
CREATE UNIQUE INDEX "comentarios_username_key" ON "comentarios"("username");

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "filmes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
