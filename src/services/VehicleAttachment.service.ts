import prisma from "../prisma/client";

export const getAllDrivers = () => prisma.driver.findMany({});

export const getDriverById = (id: number) => {
  return prisma.driver.findFirst({
    where: {
      id: id,
    },
  });
};
