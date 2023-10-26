import { RequestHandler } from "express";
import * as VendorClientService from "../services/VendorClient.service";

export const getVendors: RequestHandler = async (_req, res, next) => {
  try {
    const vendors = await VendorClientService.getVendors();

    return res.status(200).json({
      result: "success",
      data: vendors,
    });
  } catch (err) {
    next(err);
  }
};

export const getVendorClientsbyVendorId: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const vendorId = +req.params.vendorId;

    const vendorClients = await VendorClientService.getVendorByVendorId(
      vendorId
    );

    return res.status(200).json({
      result: "success",
      data: vendorClients,
    });
  } catch (error) {
    next(error);
  }
};
