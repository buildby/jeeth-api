import { Prisma } from "@prisma/client";
import { RequestHandler } from "express";
import prisma from "../prisma/client";
import * as DriverService from "../services/Driver.service";

export const editDriverProfile: RequestHandler = async (req, res, next) => {
    try {

        // {
        //     address: req.body.address,
        //     name: req.body.name,
        //     dob: req.body.dob,
        //     gender: req.body.gender,
        //     email: req.body.email,
        //     accNumber: req.body.accNumber,
        //     ifscCode: req.body.ifscCode,
        // }

        const { id, name, address, dob, gender, bankName, email, accNumber, ifscCode } = req.body;

        const driver = await DriverService.updateDriver(parseInt(id), { name, address, dob: new Date(dob), gender, bankName, email, accNumber, ifscCode });

        return res.status(200).json({

            result: driver != null ? 'success' : 'failure',
            data: driver,
        });

    } catch (err) {
        next(err);
    }
};