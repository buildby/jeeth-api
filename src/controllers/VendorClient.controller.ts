import { RequestHandler } from "express";
import * as VendorClientService from "../services/VendorClient.service";

import { Prisma, UserRole } from "@prisma/client";
import { MetaDataTypes } from "../types/MetaData.type";

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
      MetaData: {
        create: [
          {
            key: MetaDataTypes.PROMOTER_NAME,
            value: req.body.promoterName,
          },
          {
            key: MetaDataTypes.PROMOTER_Designation,
            value: req.body.promoterDesignation,
          },
          {
            key: MetaDataTypes.HELPLINE_NUMBER,
            value: req.body.helpLineNumber,
          },
        ],
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
    const updateData: Prisma.VendorUpdateInput = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
    };

    if (req.body.documents) {
      const documentsToConnect = req.body.documents.map((docId: any) => ({
        id: docId,
      }));

      updateData["Documents"] = {
        connect: documentsToConnect,
      };
    }

    const vendor = await VendorClientService.updateVendor(
      +req.params.id,
      updateData
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
    return res.status(200).json({
      result: "success",
      data: { message: "Vendor deleted successfully" },
    });
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
    const vendorClient = await VendorClientService.getVendorByVendorId(
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
