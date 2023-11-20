import { DriverStatus, Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getAllDrivers = (vendor_id: number) =>
  prisma.driver.findMany({
    where: {
      status: DriverStatus.ACTIVE,
      vendor_id: vendor_id,
    },
    include: {
      Vendor: true,
      ClientSite: true,
    },
  });

export const fetchVendorsDriver = (id: number) =>
  prisma.driver.findMany({
    where: {
      status: DriverStatus.ACTIVE,
      vendor_id: id,
    },
    include: {
      Vendor: true,
      ClientSite: true,
    },
  });

export const getAllNewApplication = (vendor_id: number) =>
  prisma.driverApplication.findMany({
    where: {
      Campaign: {
        vendor_id: vendor_id,
      },
    },
    include: { Driver: { include: { ClientSite: true } }, Campaign: true },
  });

export const fetchVendorApplications = (id: number) =>
  prisma.driverApplication.findMany({
    where: {
      Campaign: {
        vendor_id: id,
      },
    },
    include: {
      Driver: { include: { ClientSite: true } },
      Campaign: { include: { Vendor: true } },
    },
  });

export const getDriverApplicationById = (id: number) => {
  return prisma.driverApplication.findFirst({
    where: {
      id: id,
    },
    include: { Driver: true },
  });
};

export const getDriverById = (id: number) => {
  return prisma.driver.findFirst({
    where: {
      id: id,
    },
    include: {
      Documents: true,
      ClientSite: true,
      Vendor: true,
    },
  });
};
