-- DropIndex
DROP INDEX "comentarios_username_key";

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_username_fkey" FOREIGN KEY ("username") REFERENCES "usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
