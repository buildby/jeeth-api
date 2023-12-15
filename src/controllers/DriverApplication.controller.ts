import { RequestHandler } from "express";
import * as DriverApplicationService from "../services/DriverApplication.service";
import { DriverApplicationStatus, DriverStatus, Prisma } from "@prisma/client";
import * as DriverService from "../services/Driver.service";

export const createDriverApplication: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const applicationData: Prisma.DriverApplicationCreateInput = {
      Campaign: {
        connect: {
          id: req.body.campaign_id,
          // Vendor: req.body.Vendor 
        }
      },
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

export const isAlreadyAppliedApplication: RequestHandler = async (req, res, next) => {
  try {
    const application = await DriverApplicationService.fetchDriverApplicationById(
      +req.params.driverId, +req.params.campaignId
    );

    return res.status(200).json({
      result: "success",
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStatusOfDriver: RequestHandler = async (req, res, next) => {
  try {
    const data: Prisma.DriverApplicationUpdateInput = {
      status: req.body.status,
    };

    let application = await DriverApplicationService.updateStatusOfDriver(
      +req.params.applicationId,
      data
    );

    if (application && req.body.status == DriverApplicationStatus.APPROVED) {
      const dataToUpdate: Prisma.DriverUpdateInput = {
        Vendor: { connect: { id: req.body.vendorId } },
        ClientSite: { connect: { id: req.body.siteId } },
        status: "ACTIVE",
      };
      await DriverService.updateDriver(application.driver_id, dataToUpdate);
    }
    if (
      application &&
      (req.body.status == DriverApplicationStatus.REJECTED ||
        req.body.status == DriverApplicationStatus.HOLD)
    ) {
      const dataToUpdate: Prisma.DriverUpdateInput = {
        Vendor: { disconnect: { id: req.body.vendorId } },
        ClientSite: { disconnect: { id: req.body.siteId } },
        status: "IN_ACTIVE",
      };
      await DriverService.updateDriver(application.driver_id, dataToUpdate);
    }

    return res.status(200).json({
      result: "success",
    });
  } catch (error) {
    next(error);
  }
};
