import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getMetaDatas = () => prisma.user.findMany();

export const getMetaData = (id: number) => prisma.metaData.findUniqueOrThrow({ where: { id: id } });

export const createMetadata = (data: Prisma.MetaDataCreateInput) => prisma.metaData.create({ data: data });