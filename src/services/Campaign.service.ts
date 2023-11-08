import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const fetchAllCampaigns = () =>
  prisma.campaign.findMany({
    include: {
      ClientSite: true,
    },
  });

export const fetchCampiagnById = (id: number) =>
  prisma.campaign.findFirst({ where: { id: id } });

export const createCampaign = (data: Prisma.CampaignCreateInput) =>
  prisma.campaign.create({ data: data });

export const updateCampaign = (id: number, data: Prisma.CampaignUpdateInput) =>
  prisma.campaign.update({ where: { id }, data });

export const deleteCampaign = (id: number) =>
  prisma.campaign.delete({ where: { id: id } });
