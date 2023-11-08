import { RequestHandler } from "express";
import * as VehicleAttachmentService from "../services/VehicleAttachment.service";

export const getAllDriver: RequestHandler = async (req, res, next) => {
  try {
    const drivers = await VehicleAttachmentService.getAllDrivers();

    return res.status(200).json({
      result: "success",
      data: drivers,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllNewApplication: RequestHandler = async (req, res, next) => {
  try {
    const newApplications =
      await VehicleAttachmentService.getAllNewApplication();

    return res.status(200).json({
      result: "success",
      data: newApplications,
    });
  } catch (err) {
    next(err);
  }
};

export const getDriverById: RequestHandler = async (req, res, next) => {
  try {
    const driver = await VehicleAttachmentService.getDriverById(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: driver,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStatusOfDriver: RequestHandler = async (req, res, next) => {
  try {
    const data = {
      status: req.body.status,
    };
    await VehicleAttachmentService.updateStatusOfDriver(+req.params.id, data);

    return res.status(200).json({
      result: "success",
    });
  } catch (error) {
    next(error);
  }
};
