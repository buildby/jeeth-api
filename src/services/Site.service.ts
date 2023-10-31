import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getSites = () => prisma.clientSite.findMany();

export const getSiteById = (id: number) =>
  prisma.clientSite.findFirst({ where: { id: id } });

export const createSite = (data: Prisma.ClientSiteCreateInput) =>
  prisma.clientSite.create({ data: data });

export const updateSite = (id: number, data: Prisma.ClientSiteUpdateInput) =>
  prisma.clientSite.update({ where: { id }, data });

export const deleteSite = (id: number) =>
  prisma.clientSite.delete({ where: { id: id } });
