import { CampaignStatus, Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const fetchAllCampaigns = (id:number) =>
  prisma.campaign.findMany({
    where: { vendor_id: id },
    include: {
      ClientSite: true,
    },
  });

export const fetchVendorCampaigns = (id: number) =>
  prisma.campaign.findMany({
    where: { vendor_id: id },
    include: {
      ClientSite: true,
    },
  });

export const fetchActiveCampaigns = () =>
  prisma.campaign.findMany({
    where: {
      status: CampaignStatus.ACTIVE,
    },
    include: {
      ClientSite: {
        include: {
          BusinessModel: true,
        },
      },
      Vendor: true,
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
