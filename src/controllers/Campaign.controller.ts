import { RequestHandler } from "express";
import * as CampaignService from "../services/Campaign.service";
import { Prisma } from "@prisma/client";

export const fetchAllCampaigns: RequestHandler = async (req, res, next) => {
  try {
    const campaign = await CampaignService.fetchAllCampaigns();

    return res.status(200).json({
      result: "success",
      data: campaign,
    });
  } catch (err) {
    next(err);
  }
};

export const fetchVendorCampaigns: RequestHandler = async (req, res, next) => {
  try {
    const campaign = await CampaignService.fetchVendorCampaigns(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: campaign,
    });
  } catch (err) {
    next(err);
  }
};

export const createCampaign: RequestHandler = async (req, res, next) => {
  try {
    const campaignData: Prisma.CampaignCreateInput = {
      name: req.body.name,
      data: req.body.data,
      avgFare: parseInt(req.body.avgFare),
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const campaign = await CampaignService.createCampaign(campaignData);

    return res.status(201).json({
      result: "success",
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCampaign: RequestHandler = async (req, res, next) => {
  try {
    const campaignData: Prisma.CampaignUpdateInput = {
      name: req.body.name,
      data: req.body.data,
      avgFare: req.body.avgFare,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const campaign = await CampaignService.updateCampaign(
      +req.params.id,
      campaignData
    );

    return res.status(201).json({
      result: "success",
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCampaign: RequestHandler = async (req, res, next) => {
  try {
    await CampaignService.deleteCampaign(+req.params.id);
    return res.status(200).json({
      result: "success",
      data: { message: `Campaign deleted successfully` },
    });
  } catch (error) {
    next(error);
  }
};

export const fetchCampiagnById: RequestHandler = async (req, res, next) => {
  try {
    const campaign = await CampaignService.fetchCampiagnById(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: campaign,
    });
  } catch (error) {
    next(error);
  }
};



export const fetchAllCampaignsApp: RequestHandler = async (req, res, next) => {
  try {
    const campaign = await CampaignService.fetchActiveCampaigns();

    return res.status(200).json({
      result: "success",
      data: campaign,
    });
  } catch (err) {
    next(err);
  }
};
