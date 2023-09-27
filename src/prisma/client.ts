import { PrismaClient } from "@prisma/client";

const isLoggingEnabled = process.env.PRISMA_LOGGING == 'enabled';

const prisma = new PrismaClient({
  log: isLoggingEnabled ? ['query', 'info', 'warn', 'error'] : [],
});

export default prisma;
