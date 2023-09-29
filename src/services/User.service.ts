import prisma from "../prisma/client";

export const getUsers = () => prisma.user.findMany();

export const getUser = (id: number) => prisma.user.findUniqueOrThrow({ where: { id: id } });