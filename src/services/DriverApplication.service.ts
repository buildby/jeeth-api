import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const createDriverApplication = (
  data: Prisma.DriverApplicationCreateInput
) => prisma.driverApplication.create({ data: data });

export const getApplicationById = (id: number) =>
  prisma.driverApplication.findMany({
    where: { driver_id: id },
    include: {
      Campaign: {
        include: {
          ClientSite: true,
          Vendor: true,
        }
      }
    },
  });

export const fetchDriverApplicationById = (id: number, campaignId: number) =>
  prisma.driverApplication.findFirst({
    where: { driver_id: id, campaign_id: campaignId },

  });

export const updateStatusOfDriver = (
  id: number,
  data: Prisma.DriverApplicationUpdateInput
) => prisma.driverApplication.update({ where: { id }, data });
