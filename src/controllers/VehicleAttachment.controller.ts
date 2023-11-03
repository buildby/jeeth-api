import { RequestHandler } from "express";
import * as VehicleAttachmentService from "../services/VehicleAttachment.service";

export const getAllDriver: RequestHandler = async (req, res, next) => {
  try {
    const sites = await VehicleAttachmentService.getAllDrivers();

    return res.status(200).json({
      result: "success",
      data: sites,
    });
  } catch (err) {
    next(err);
  }
};

export const getDriverById: RequestHandler = async (req, res, next) => {
  try {
    const vendorClient = await VehicleAttachmentService.getDriverById(
      +req.params.id
    );

    return res.status(200).json({
      result: "success",
      data: vendorClient,
    });
  } catch (error) {
    next(error);
  }
};
