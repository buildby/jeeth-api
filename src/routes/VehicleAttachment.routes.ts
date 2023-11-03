import express, { Router } from "express";
import * as DriverModel from "../controllers/VehicleAttachment.controller";

export const VehicleAttachmentRoutes: Router = express.Router();

VehicleAttachmentRoutes.get("/", DriverModel.getAllDriver);

VehicleAttachmentRoutes.get("/:id", DriverModel.getDriverById);
