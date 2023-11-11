import { Prisma } from "@prisma/client";
import { RequestHandler } from "express";
import prisma from "../prisma/client";
import * as DriverService from "../services/Driver.service";
import * as MetadataService from "../services/metaData.service";

export const editDriverProfile: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { driver, owner, vehicle } = req.body;
        let dataToUpdate: Prisma.DriverUpdateInput;

        if (driver) {
            const { name, address, dob, gender, bankName, email, accNumber, ifscCode, avatar } = driver;


            dataToUpdate = avatar
                ? { avatar }
                : { name, address, dob: new Date(dob), gender, email, bankName, accNumber, ifscCode }

        } else if (owner) {
            const { ownerName, ownerPhoneNumber, ownerAddress, vehicleImage } = owner;

            dataToUpdate = vehicleImage
                ? { vehicleImage }
                : { ownerName, ownerPhoneNumber, ownerAddress, }

        } else {
            const { vehicleType, vehicleModel, vehicleMake, vehicleYear, vehicleNumber, vehicleFuelType } = vehicle;

            dataToUpdate =
                { vehicleModel, vehicleMake, vehicleType, vehicleYear, vehicleNumber, vehicleFuelType }
        }





        const updatedDriver = await DriverService.updateDriver(+id, dataToUpdate);

        return res.status(200).json({

            result: updatedDriver != null ? 'success' : 'failure',
            data: updatedDriver,
        });

    } catch (err) {
        next(err);
    }
};


export const refreshUserEarnings: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;

        const metaData = await MetadataService.getDriverMetaDataByKey('Earnings', +id);

        return res.status(200).json({

            result: metaData != null ? 'success' : 'failure',
            data: metaData,
        });

    } catch (err) {
        next(err);
    }
};


export const updateDriverEarnings: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { key, accrued, currentMonth } = req.body;
        let data;

        if (!accrued && !currentMonth) {
            return res.status(200).json({
                result: 'failure',
            });
        }

        const earningsData = await MetadataService.getDriverMetaDataByKey(key, +id);

        if (!earningsData) {
            return res.status(200).json({
                result: 'failure',
                messsage: 'Meta data not found',
            });
        }

        data = JSON.parse(earningsData.value);

        if (accrued) {
            data['Accrued'] = accrued;
        }
        if (currentMonth) {
            data['Current Month'] = currentMonth;
        }

        const metaData = await MetadataService.updateMetadataByDriverId(+id, key, { value: JSON.stringify(data) });

        return res.status(200).json({
            result: metaData != null ? 'success' : 'failure',
            data: metaData,
        });

    } catch (err) {
        next(err);
    }
};