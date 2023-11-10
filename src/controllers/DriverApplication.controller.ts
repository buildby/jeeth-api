import { RequestHandler } from "express";
import * as DriverApplicationService from "../services/DriverApplication.service";
import { DriverStatus, Prisma } from "@prisma/client";

export const createDriverApplication: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const applicationData: Prisma.DriverApplicationCreateInput = {
      Campaign: { connect: { id: req.body.campaign_id } },
      Driver: { connect: { id: req.body.driver_id } },
    };

    const application = await DriverApplicationService.createDriverApplication(
      applicationData
    );

    return res.status(201).json({
      result: "success",
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

export const getApplicationById: RequestHandler = async (req, res, next) => {
  try {
    const application = await DriverApplicationService.getApplicationById(
      +req.params.id
    );

    return res.status(200).json({
      result: "success",
      data: application,
    });
  } catch (error) {
    next(error);
  }
};
