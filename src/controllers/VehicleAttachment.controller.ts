import { RequestHandler } from "express";
import * as VehicleAttachmentService from "../services/VehicleAttachment.service";
import { DriverApplicationStatus, DriverStatus, Prisma } from "@prisma/client";

export const getAllDriver: RequestHandler = async (req, res, next) => {
  try {
    const drivers = await VehicleAttachmentService.getAllDrivers(
      +req.headers["vendor-id"]!
    );

    return res.status(200).json({
      result: "success",
      data: drivers,
    });
  } catch (err) {
    next(err);
  }
};

export const fetchVendorsDriver: RequestHandler = async (req, res, next) => {
  try {
    const drivers = await VehicleAttachmentService.fetchVendorsDriver(
      +req.params.id
    );

    return res.status(200).json({
      result: "success",
      data: drivers,
    });
  } catch (err) {
    next(err);
  }
};

export const fetchVendorApplications: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const applications = await VehicleAttachmentService.fetchVendorApplications(
      +req.params.id
    );

    return res.status(200).json({
      result: "success",
      data: applications,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllNewApplication: RequestHandler = async (req, res, next) => {
  try {
    const newApplications =
      await VehicleAttachmentService.getAllNewApplication(+req.headers["vendor-id"]!);

    return res.status(200).json({
      result: "success",
      data: newApplications,
    });
  } catch (err) {
    next(err);
  }
};

export const getDriverApplicationById: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const driver = await VehicleAttachmentService.getDriverApplicationById(
      +req.params.id
    );

    return res.status(200).json({
      result: "success",
      data: driver,
    });
  } catch (error) {
    next(error);
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

export const deleteDriverById: RequestHandler = async (req, res, next) => {
  try {
    await VehicleAttachmentService.deleteDriverById(+req.params.id);
    return res.status(200).json({
      result: "success",
      data: { message: "Vendor deleted successfully" },
    });
  } catch (error) {
    next(error);
  }
};
