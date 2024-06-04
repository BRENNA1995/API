import { PrismaClient } from "@prisma/client";
import { warn } from "console";

export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})
