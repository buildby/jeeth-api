import { DriverStatus, Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getAllDrivers = () =>
  prisma.driver.findMany({
    where: {
      status: DriverStatus.ACTIVE,
    },
  });

export const getAllNewApplication = () =>
  prisma.driverApplication.findMany({ include: { Driver: true } });

export const getDriverById = (id: number) => {
  return prisma.driver.findFirst({
    where: {
      id: id,
    },
  });
};

export const updateStatusOfDriver = (
  id: number,
  data: Prisma.DriverUpdateInput
) => prisma.driver.update({ where: { id }, data });
