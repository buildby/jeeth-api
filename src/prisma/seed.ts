import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userData: Prisma.DriverCreateInput = {
    name: "John Doe",
    address: "123 Main St",
    phone: "123-456-7890",
    User: {
      create: {
        phone: "123-456-7890",
      }
    }
  }
  const driver = await prisma.driver.create({
    data: userData,
  })
  console.log({ driver })
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });