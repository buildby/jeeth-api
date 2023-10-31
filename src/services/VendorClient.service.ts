import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getVendors = () => prisma.vendor.findMany();

export const getVendor = (id: number) =>
  prisma.vendor.findUniqueOrThrow({ where: { id: id } });

export const createVendor = (data: Prisma.VendorCreateInput) =>
  prisma.vendor.create({ data });

export const updateVendor = (id: number, data: Prisma.VendorUpdateInput) =>
  prisma.vendor.update({ where: { id }, data });

export const deleteVendor = (id: number) =>
  prisma.vendor.delete({ where: { id } });

export const getVendorByVendorId = (id: number) => {
  return prisma.vendor.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      phone: true,
      email: true,
      address: true,
      pincode: true,
      state: true,
      city: true,
      Documents: true,
      MetaData: true,
      avatar: true,
    },
  });
};
