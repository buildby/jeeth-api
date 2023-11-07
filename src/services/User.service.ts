import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getUsers = () => prisma.user.findMany();

export const getUser = (id: number) => prisma.user.findUniqueOrThrow({ where: { id: id } });

export const createUser = (data: Prisma.UserCreateInput) => prisma.user.create({ data: data });

export const deleteUser = (id: number) => prisma.user.delete({ where: { id: id } });

export const findUserByPhone = (phone: string) => prisma.user.findUnique({ where: { phone: phone } });

