import { RequestHandler } from "express";
import * as VendorClientService from "../services/VendorClient.service";

export const getVendorClientsbyVendorId: RequestHandler = async (req, res, next) => {
  try {

    const vendorId = +req.params.vendorId;

    const vendorClients = await VendorClientService.getVendorClientByVendorId(vendorId);

    res.status(200).json({
      result: 'success',
      data: vendorClients,
    });

  } catch (error) {
    next(error);
  }

}