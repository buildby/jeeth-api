import { Prisma } from "@prisma/client";

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const userData: Prisma.UserCreateInput = {
    name: 'vipin',
    email: 'vipin@test.com',
  }
  await prisma.user.create({ data: userData });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });