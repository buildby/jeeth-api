import express, { Router } from "express";
import * as VendorClient from "../controllers/VendorClient.controller";
import { verifyToken } from "../middleware/verifyToken";

export const VendorClientRoutes: Router = express.Router();

VendorClientRoutes.get("/",verifyToken,VendorClient.getVendors);

VendorClientRoutes.post("/", VendorClient.createVendor);

VendorClientRoutes.post("/:id", VendorClient.updateVendor);

VendorClientRoutes.delete("/:id", VendorClient.deleteVendor);

VendorClientRoutes.get("/:id", VendorClient.getVendorClientsbyVendorId);
