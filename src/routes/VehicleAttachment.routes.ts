import express, { Router } from "express";
import * as VehicleAttachment from "../controllers/VehicleAttachment.controller";

export const VehicleAttachmentRoutes: Router = express.Router();

VehicleAttachmentRoutes.get("/profile", VehicleAttachment.getAllDriver);

VehicleAttachmentRoutes.get(
  "/profile/:id",
  VehicleAttachment.fetchVendorsDriver
);

VehicleAttachmentRoutes.get(
  "/newApplication",
  VehicleAttachment.getAllNewApplication
);

VehicleAttachmentRoutes.get(
  "/newApplication/:id",
  VehicleAttachment.fetchVendorApplications
);

VehicleAttachmentRoutes.get("/:id", VehicleAttachment.getDriverById);

VehicleAttachmentRoutes.get(
  "/newApplication/:id",
  VehicleAttachment.getDriverApplicationById
);
