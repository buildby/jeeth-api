import { RequestHandler } from "express";
import * as VendorClientService from "../services/VendorClient.service";
import * as UserService from "../services/User.service";
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
      avatar: req.body.avatar,
      phone: req.body.phone,
      pincode: req.body.pincode,
      state: req.body.state,
      // random rating from 4.1 to 5,0
      rating: req.body.rating,
      ageOfCompany: req.body.ageOfCompany,
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
            key: MetaDataTypes.PROMOTER_DESIGNATION,
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
      avatar: req.body.avatar,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      rating: req.body.rating,
      ageOfCompany: req.body.ageOfCompany,
      Documents: {
        connect: [],
      },
    };
    if (updateData.Documents) {
      for (const documentId of req.body.documents) {
        (updateData.Documents.connect as { id: number }[]).push({
          id: documentId,
        });
      }
    }
    const metadataToUpdate = [];
    if (req.body.metadata) {
      for (const metadata of req.body.metadata) {
        metadataToUpdate.push({
          where: { id: metadata.id },
          data: { value: metadata.value }, // Update the value directly
        });
      }
    }

    if (metadataToUpdate.length > 0) {
      // Perform metadata updates collectively
      updateData["MetaData"] = {
        updateMany: metadataToUpdate,
      };
    }

    const vendor = await VendorClientService.updateVendor(
      +req.params.id,
      updateData
    );

    if (vendor) {
      await UserService.updateUser(vendor.user_id, {
        email: req.body.email,
        phone: req.body.phone,
      });
    }

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
    let data = { isActive: false, isDeleted: true };
    await VendorClientService.deleteVendor(+req.params.id, data);
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

function isEqualArrays(arr1: any, arr2: any) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  if (set1.size !== set2.size) {
    return false;
  }

  for (const item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }

  return true;
}
