import { BusinessModelType, Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getModels = (type: BusinessModelType) =>
  prisma.businessModel.findMany({
    where: { type: type },
    select: {
      name: true,
      ClientSite: true,
      id: true,
      Vendor: true,
      modeldata: true,
    },
  });

export const fetchModelByVendor = (type: BusinessModelType, id: number) =>
  prisma.businessModel.findMany({
    where: { type: type, vendor_id: id },
    select: {
      name: true,
      ClientSite: true,
      id: true,
      Vendor: true,
      modeldata: true,
    },
  });

export const getModelById = (id: number) =>
  prisma.businessModel.findFirst({ where: { id: id } });

export const createModel = (data: Prisma.BusinessModelCreateInput) =>
  prisma.businessModel.create({ data: data });

export const updateModel = (
  id: number,
  data: Prisma.BusinessModelUpdateInput
) => prisma.businessModel.update({ where: { id }, data });

export const deleteModel = (id: number) =>
  prisma.businessModel.delete({ where: { id: id } });
