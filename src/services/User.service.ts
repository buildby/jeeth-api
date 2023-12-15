import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getUsers = () => prisma.user.findMany();

export const findUser = (id: number) =>
  prisma.user.findFirst({ where: { id: id } });

export const getUser = (id: number) =>
  prisma.user.findUniqueOrThrow({ where: { id: id } });

export const createUser = (data: Prisma.UserCreateInput) =>
  prisma.user.create({ data: data });

export const updateUser = (id: number, data: Prisma.UserUpdateInput) =>
  prisma.user.update({ where: { id: id }, data });

export const deleteUser = (id: number) =>
  prisma.user.delete({ where: { id: id } });

export const findUserByPhone = (phone: string) =>
  prisma.user.findUnique({
    where: { phone: phone },
    include: { Vendor: true },
  });
