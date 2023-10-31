import express, { Router } from "express";
import * as VendorClient from "../controllers/VendorClient.controller";

export const VendorClientRoutes: Router = express.Router();

VendorClientRoutes.get("/", VendorClient.getVendors);

VendorClientRoutes.post("/", VendorClient.createVendor);

VendorClientRoutes.post("/:id", VendorClient.updateVendor);

VendorClientRoutes.delete("/:id", VendorClient.deleteVendor);

VendorClientRoutes.get("/:id", VendorClient.getVendorClientsbyVendorId);
