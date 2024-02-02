import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const uploadEarnings = (data: Prisma.EarningCreateInput) =>
  prisma.earning.create({ data: data });

export const fetchPastWeekEarning = (
  phone: any,
  lastWeekStart: any,
  today: any
) =>
  prisma.earning.findMany({
    where: {
      phone: phone,
      tripDate: {
        gte: lastWeekStart,
        lt: today,
      },
    },
    include: {
      ClientSite: {
        include: {
          BusinessModel: true,
        },
      },
    },
  });

export const fetchAllEarnings = () => prisma.earning.findMany({});

export const createEarningRecord = (data: Prisma.EarningUploadHistoryCreateInput) =>
  prisma.earningUploadHistory.create({ data: data });
