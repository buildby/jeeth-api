import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getMetaDatas = () => prisma.user.findMany();

export const getMetaData = (id: number) => prisma.metaData.findUniqueOrThrow({ where: { id: id } });

export const getMetaDataByKey = (key: String, driver_id: number) => prisma.metaData.findFirst(
    {
        where: {
            driver_id: driver_id,
            key: key.toString(),
        },
    },);

export const createMetadata = (data: Prisma.MetaDataCreateInput) => prisma.metaData.create({ data: data });