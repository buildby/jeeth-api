import { Prisma } from "@prisma/client";
import { RequestHandler } from "express";
import prisma from "../prisma/client";
import * as DriverService from "../services/Driver.service";

export const editDriverProfile: RequestHandler = async (req, res, next) => {
    try {

        const { id, name, address, dob, gender, bankName, email, accNumber, ifscCode, avatar } = req.body;

        const dataToUpdate: Prisma.DriverUpdateInput = avatar
            ? { avatar }
            : { name, address, dob: new Date(dob), gender, bankName, email, accNumber, ifscCode }

        const driver = await DriverService.updateDriver(+id, dataToUpdate);

        return res.status(200).json({

            result: driver != null ? 'success' : 'failure',
            data: driver,
        });

    } catch (err) {
        next(err);
    }
};