import express, { Router } from "express"
import * as VendorClient from "../controllers/VendorClient.controller";

export const VendorClientRoutes: Router = express.Router();

VendorClientRoutes.get('/:id', VendorClient.getVendorClientsbyVendorId);