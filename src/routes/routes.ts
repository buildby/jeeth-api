import express, { Router } from "express";
import { UserRoutes } from "./User.route";
import { DocumentRoutes } from "./Document.route";
import { VendorClientRoutes } from "./VendorClient.route";
import { AuthRoutes } from "./Auth.routes";
import { DriverRoutes } from "./Driver.routes";

export const Routes: Router = express.Router();

Routes.use('/user', UserRoutes);
Routes.use('/document', DocumentRoutes);
Routes.use('/vendorclient', VendorClientRoutes);
Routes.use('/auth', AuthRoutes);
Routes.use('/driver', DriverRoutes);

