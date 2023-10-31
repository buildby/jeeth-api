import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";



export const createAppConfig = (data: Prisma.AppConfigCreateInput) => prisma.appConfig.create({ data: data });


export const fetchAppConfig = (type: string) => prisma.appConfig.findFirst({ where: { type: type } });

// export const fetchCommonAppConfig = (commonType: string) => prisma.appConfig.findMany({ where: { commonType: commonType } });

// export const fetchAllRoutes = (type: string) => prisma.appConfig.findMany({ where: { commonType: type } });

