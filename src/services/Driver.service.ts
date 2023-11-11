import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const updateDriver = (id: number, data: Prisma.DriverUpdateInput) => prisma.driver.update({
    where: { id }, data
});
export const getDriver = (id: number) => prisma.driver.findFirst({
    where: { user_id: id },
    include: {
        MetaData: true
    }
});
export const getDriverByPhone = (phone: String) => prisma.driver.findFirst({
    where: { phone: phone.toString() },
});
