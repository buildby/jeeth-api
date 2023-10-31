import { RequestHandler } from "express";
import * as SlabModelService from "../services/SlabModel.service";
import { BusinessModelType, Prisma } from "@prisma/client";

export const getSlabModels: RequestHandler = async (_req, res, next) => {
  try {
    const sites = await SlabModelService.getSlabModels();

    return res.status(200).json({
      result: "success",
      data: sites,
    });
  } catch (err) {
    next(err);
  }
};

export const createSlabModel: RequestHandler = async (req, res, next) => {
  try {
    const slabModelData: Prisma.BusinessModelCreateInput = {
      name: req.body.name,
      modeldata: req.body.modeldata,
      type: BusinessModelType.SLAB,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const site = await SlabModelService.createSlabModel(slabModelData);

    return res.status(201).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSlabModel: RequestHandler = async (req, res, next) => {
  try {
    const siteData: Prisma.BusinessModelUpdateInput = {
      name: req.body.name,
      modeldata: req.body.modeldata,
      type: BusinessModelType.SLAB,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const site = await SlabModelService.updateSlabModel(
      +req.params.id,
      siteData
    );

    return res.status(201).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSlabModel: RequestHandler = async (req, res, next) => {
  try {
    await SlabModelService.deleteSlabModel(+req.params.id);
    return res.status(200).json({
      result: "success",
      data: { message: "Site deleted successfully" },
    });
  } catch (error) {
    next(error);
  }
};

export const getSlabModelById: RequestHandler = async (req, res, next) => {
  try {
    const site = await SlabModelService.getSlabModelById(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};
