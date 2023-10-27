import { RequestHandler } from "express";
import * as VendorClientService from "../services/VendorClient.service";
import { Prisma, UserRole } from "@prisma/client";

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

export const createVendor: RequestHandler = async (req, res, next) => {
  try {
    const vendorData: Prisma.VendorCreateInput = {
      address: req.body.address,
      city: req.body.city,
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      pincode: req.body.pincode,
      state: req.body.state,
      User: {
        create: {
          phone: req.body.phone,
          role: UserRole.VENDOR,
        },
      },
      Documents: {
        connect: [],
      },
    };

    if (vendorData.Documents) {
      for (const documentId of req.body.documents) {
        (vendorData.Documents.connect as { id: number }[]).push({
          id: documentId,
        });
      }
    }

    const vendor = await VendorClientService.createVendor(vendorData);

    return res.status(201).json({
      result: "success",
      data: vendor,
    });
  } catch (error) {
    next(error);
  }
};

export const updateVendor: RequestHandler = async (req, res, next) => {
  try {
    const vendor = await VendorClientService.updateVendor(
      +req.params.id,
      req.body
    );

    return res.status(200).json({
      result: "success",
      data: vendor,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteVendor: RequestHandler = async (req, res, next) => {
  try {
    await VendorClientService.deleteVendor(+req.params.id);
    return res.status(204);
  } catch (error) {
    next(error);
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
