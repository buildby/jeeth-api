import { RequestHandler } from "express";
import * as BusinessModelService from "../services/BusinessModel.service";
import * as SiteService from "../services/Site.service";
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
    const models = await BusinessModelService.getModels(
      type,
      +req.headers["vendor-id"]!
    );

    return res.status(200).json({
      result: "success",
      data: models,
    });
  } catch (err) {
    next(err);
  }
};

export const fetchModelByVendor: RequestHandler = async (req, res, next) => {
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
    const models = await BusinessModelService.fetchModelByVendor(
      type,
      +req.params.id
    );

    return res.status(200).json({
      result: "success",
      data: models,
    });
  } catch (err) {
    next(err);
  }
};

export const createModel: RequestHandler = async (req, res, next) => {
  try {
    const modelData: Prisma.BusinessModelCreateInput = {
      name: req.body.name,
      modeldata: req.body.modeldata,
      type: req.body.type,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: +req.headers["vendor-id"]! } },
    };

    const model = await BusinessModelService.createModel(modelData);

    const clientSite = await SiteService.getSiteById(req.body.site_id);

    // Update the ClientSite's BusinessModel reference
    if (clientSite) {
      const dataToUpdate: Prisma.ClientSiteUpdateInput = {
        BusinessModel: { connect: { id: model.id } },
      };
      await SiteService.updateSite(req.body.site_id, dataToUpdate);
    }

    return res.status(201).json({
      result: "success",
      data: model,
    });
  } catch (error) {
    next(error);
  }
};

export const updateModel: RequestHandler = async (req, res, next) => {
  try {
    const updateModelData: Prisma.BusinessModelUpdateInput = {
      name: req.body.name,
      modeldata: req.body.modeldata,
      type: req.body.type,
      ClientSite: { connect: { id: req.body.site_id } },
      Vendor: { connect: { id: +req.headers["vendor-id"]! } },
    };

    const model = await BusinessModelService.updateModel(
      +req.params.id,
      updateModelData
    );

    const clientSite = await SiteService.getSiteById(req.body.site_id);

    // Update the ClientSite's BusinessModel reference
    if (clientSite) {
      const dataToUpdate: Prisma.ClientSiteUpdateInput = {
        BusinessModel: { connect: { id: model.id } },
      };
      await SiteService.updateSite(req.body.site_id, dataToUpdate);
    }

    return res.status(201).json({
      result: "success",
      data: model,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteModel: RequestHandler = async (req, res, next) => {
  try {
    const model = await BusinessModelService.deleteModel(+req.params.id);
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
    const model = await BusinessModelService.getModelById(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: model,
    });
  } catch (error) {
    next(error);
  }
};
