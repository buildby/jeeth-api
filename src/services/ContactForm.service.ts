import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const getContactForms = () => prisma.contactForm.findMany();

export const getContactForm = (id: number) => prisma.contactForm.findUniqueOrThrow({ where: { id: id } });

export const createContactForm = (data: Prisma.ContactFormCreateInput) => prisma.contactForm.create({ data });

export const updateContactForm = (id: number, data: Prisma.ContactFormUpdateInput) => prisma.contactForm.update({ where: { id }, data });

export const deleteContactForm = (id: number) => prisma.contactForm.delete({ where: { id } });
