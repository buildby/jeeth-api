import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getVendors = () => prisma.vendor.findMany();

export const getVendor = (id: number) => prisma.vendor.findUniqueOrThrow({ where: { id: id } });

export const createVendor = (data: Prisma.VendorCreateInput) => prisma.vendor.create({ data });

export const updateVendor = (id: number, data: Prisma.VendorUpdateInput) => prisma.vendor.update({ where: { id }, data });

export const deleteVendor = (id: number) => prisma.vendor.delete({ where: { id } });

export const getVendorByVendorId = (vendor_id: number) => {
  return prisma.vendor.findMany({
    where: {
      user_id: vendor_id
    },
    select: {
      Documents: true,
    }
  })
}
