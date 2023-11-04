import { DriverStatus } from "@prisma/client";
import prisma from "../prisma/client";

export const getAllDrivers = () =>
  prisma.driver.findMany({
    where: {
      status: DriverStatus.ACTIVE
    },
  });

export const getAllNewApplication = () =>
  prisma.driver.findMany({
    where: {
      status: DriverStatus.IN_ACTIVE
    },
  });

export const getDriverById = (id: number) => {
  return prisma.driver.findFirst({
    where: {
      id: id,
    },
  });
};
