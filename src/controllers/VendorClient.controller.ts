import { RequestHandler } from "express";
import * as VendorClientService from "../services/VendorClient.service";
import { Prisma, UserRole } from "@prisma/client";

export const getVendorClientsbyVendorId: RequestHandler = async (req, res, next) => {
  try {

    const vendorId = +req.params.vendorId;

    const vendorClients = await VendorClientService.getVendorByVendorId(vendorId);

    return res.status(200).json({
      result: 'success',
      data: vendorClients,
    });

  } catch (error) {
    next(error);
  }

}

export const createVendorClient: RequestHandler = async (req, res, next) => {
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
          role: UserRole.VENDOR
        }
      },
      MetaData: {
        create: [
          {
            key: "promoter_name",
            value: req.body.promoter_name,
          },
          {
            key: "promoter_phone",
            value: req.body.promoter_phone,
          },
          {
            key: "helpdesk_phone",
            value: req.body.helpdesk_phone,
          }
        ]
      },
      Documents: {
        connect: [
          {
            id: req.body.documents[0]
          },
          {
            id: req.body.documents[1]
          },
          {
            id: req.body.documents[2]
          }
        ]
      }
      
    };
    const vendorClient = await VendorClientService.createVendor(vendorData);

    return res.status(200).json({
      result: 'success',
      data: vendorClient,
    });

  } catch (error) {
    next(error);
  }
}