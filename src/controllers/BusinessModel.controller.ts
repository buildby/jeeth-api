import { RequestHandler } from "express";
import * as SlabModelService from "../services/BusinessModel.service";
import { BusinessModelType, Prisma } from "@prisma/client";

export const getModels: RequestHandler = async (req, res, next) => {
  try {
    var type: BusinessModelType = "SLAB";
    switch (req.params.type) {
      case "SLAB":
        type = BusinessModelType.SLAB;
        break;

      case "KM_FARE":
        type = BusinessModelType.KM_FARE;
        break;

      case "PACKAGE":
        type = BusinessModelType.PACKAGE;
        break;

      default:
        break;
    }
    const sites = await SlabModelService.getModels(type);

    return res.status(200).json({
      result: "success",
      data: sites,
    });
  } catch (err) {
    next(err);
  }
};

export const createModel: RequestHandler = async (req, res, next) => {
  try {
    const slabModelData: Prisma.BusinessModelCreateInput = {
      name: req.body.name,
      modeldata: req.body.modeldata,
      type: req.body.type,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const site = await SlabModelService.createModel(slabModelData);

    return res.status(201).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export const updateModel: RequestHandler = async (req, res, next) => {
  try {
    const siteData: Prisma.BusinessModelUpdateInput = {
      name: req.body.name,
      modeldata: req.body.modeldata,
      type: req.body.type,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const site = await SlabModelService.updateModel(+req.params.id, siteData);

    return res.status(201).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteModel: RequestHandler = async (req, res, next) => {
  try {
    const model = await SlabModelService.deleteModel(+req.params.id);
    return res.status(200).json({
      result: "success",
      data: { message: `${model.type} model deleted successfully` },
    });
  } catch (error) {
    next(error);
  }
};

export const getModelById: RequestHandler = async (req, res, next) => {
  try {
    var type: BusinessModelType = "SLAB";
    switch (req.params.type) {
      case "SLAB":
        type = BusinessModelType.SLAB;
        break;

      case "KM_FARE":
        type = BusinessModelType.KM_FARE;
        break;

      case "PACKAGE":
        type = BusinessModelType.PACKAGE;
        break;

      default:
        break;
    }
    const site = await SlabModelService.getModelById(+req.params.id, type);

    return res.status(200).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};
