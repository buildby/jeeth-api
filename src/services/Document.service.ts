import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getDocuments = () => prisma.document.findMany();

export const getDocument = (id: number) => prisma.document.findUniqueOrThrow({ where: { id: id } });

export const getDocumentByUserId = (userId: number) => prisma.document.findMany({ where: { userId: userId } });

export const createDocument = (data: Prisma.DocumentCreateInput) => prisma.document.create({ data });

export const updateDocument = (id: number, data: Prisma.DocumentUpdateInput) => prisma.document.update({ where: { id }, data });

export const deleteDocument = (id: number) => prisma.document.delete({ where: { id } });
