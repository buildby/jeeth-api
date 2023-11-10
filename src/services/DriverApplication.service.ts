import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const createDriverApplication = (
  data: Prisma.DriverApplicationCreateInput
) => prisma.driverApplication.create({ data: data });

export const getApplicationById = (id: number) =>
  prisma.driverApplication.findMany({
    where: { driver_id: id },
    include: {
      Campaign: true,
      Driver: true,
    },
  });
