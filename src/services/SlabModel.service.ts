import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getSlabModels = () => prisma.businessModel.findMany();

export const getSlabModelById = (id: number) =>
  prisma.businessModel.findFirst({ where: { id: id } });

export const createSlabModel = (data: Prisma.BusinessModelCreateInput) =>
  prisma.businessModel.create({ data: data });

export const updateSlabModel = (
  id: number,
  data: Prisma.BusinessModelUpdateInput
) => prisma.businessModel.update({ where: { id }, data });

export const deleteSlabModel = (id: number) =>
  prisma.businessModel.delete({ where: { id: id } });
