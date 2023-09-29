import { Prisma } from "@prisma/client";

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const userData: Prisma.UserCreateInput = {
    name: 'Vipin',
    email: 'vipiny35@gmail.com',
    Document: {
      create: {
        type: 'DRIVER_LICENSE',
        filename: 'driver_license.pdf',
        url: 'https://www.google.com',
      },
    }
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