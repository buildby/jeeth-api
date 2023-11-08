import { RequestHandler } from "express";
import * as BusinessModelService from "../services/BusinessModel.service";
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
    const models = await BusinessModelService.getModels(type);

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
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const model = await BusinessModelService.createModel(modelData);

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
      Vendor: { connect: { id: req.body.vendor_id } },
    };

    const model = await BusinessModelService.updateModel(
      +req.params.id,
      updateModelData
    );

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
    const model = await BusinessModelService.getModelById(+req.params.id, type);

    return res.status(200).json({
      result: "success",
      data: model,
    });
  } catch (error) {
    next(error);
  }
};
