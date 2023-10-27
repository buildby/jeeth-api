import prisma from "../prisma/client";

export const getSites = () => prisma.clientSite.findMany();