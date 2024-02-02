import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getSites = (vendor_id: number) =>
  prisma.clientSite.findMany({
    where: { vendor_id: vendor_id, isDeleted: false, isActive: true },
    include: { BusinessModel: true },
  });

export const fetchVendorSites = (id: number) =>
  prisma.clientSite.findMany({
    where: { vendor_id: id },
    include: { BusinessModel: true },
  });

export const getSiteById = (id: number) =>
  prisma.clientSite.findFirst({
    where: { id: id },
    include: { BusinessModel: true },
  });

export const createSite = (data: Prisma.ClientSiteCreateInput) =>
  prisma.clientSite.create({ data: data });

export const updateSite = (id: number, data: Prisma.ClientSiteUpdateInput) =>
  prisma.clientSite.update({ where: { id }, data });

export const deleteSite = (id: number, data: Prisma.ClientSiteUpdateInput) =>
  prisma.clientSite.update({ where: { id: id }, data });

export const fetchAllModels = () => prisma.businessModel.findMany();

export const fetchAllModelsByVendor = (id: number) =>
  prisma.businessModel.findMany({ where: { vendor_id: id } });
