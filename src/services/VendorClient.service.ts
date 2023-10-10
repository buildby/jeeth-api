import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getVendorClients = () => prisma.vendorClient.findMany();

export const getVendorClient = (id: number) => prisma.vendorClient.findUniqueOrThrow({ where: { id: id } });

export const createVendorClient = (data: Prisma.VendorClientCreateInput) => prisma.vendorClient.create({ data });

export const updateVendorClient = (id: number, data: Prisma.VendorClientUpdateInput) => prisma.vendorClient.update({ where: { id }, data });

export const deleteVendorClient = (id: number) => prisma.vendorClient.delete({ where: { id } });

export const getVendorClientByVendorId = (vendorId: number) => {
  return prisma.vendorClient.findMany({
    where: {
      userId: vendorId
    }
  })
}
