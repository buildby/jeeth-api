import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getDocuments = () => prisma.document.findMany();

export const getDocument = (id: number) => prisma.document.findUniqueOrThrow({ where: { id: id } });

export const getDocumentByDriverId = (driver_id: number) => prisma.document.findMany({ where: { driver_id } });

export const getDocumentByVendorId = (vendor_id: number) => prisma.document.findMany({ where: { vendor_id } });

export const createDocument = (data: Prisma.DocumentCreateInput) => prisma.document.create({ data });

export const updateDocument = (id: number, data: Prisma.DocumentUpdateInput) => prisma.document.update({ where: { id }, data });

export const deleteDocument = (id: number) => prisma.document.delete({ where: { id } });
