import express, { Router } from "express";
import * as VehicleAttachment from "../controllers/VehicleAttachment.controller";

export const VehicleAttachmentRoutes: Router = express.Router();

VehicleAttachmentRoutes.get("/profile", VehicleAttachment.getAllDriver);

VehicleAttachmentRoutes.get(
  "/newApplication",
  VehicleAttachment.getAllNewApplication
);

VehicleAttachmentRoutes.get("/:id", VehicleAttachment.getDriverById);
