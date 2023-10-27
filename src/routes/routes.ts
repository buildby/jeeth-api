import express, { Router } from "express";
import { UserRoutes } from "./User.route";
import { DocumentRoutes } from "./Document.route";
import { VendorClientRoutes } from "./VendorClient.route";
import { AuthRoutes } from "./Auth.routes";
import { DriverRoutes } from "./Driver.routes";
import { SitesRoutes } from "./Sites.routes";
import { AWSRoutes } from "./Aws.routes";

export const Routes: Router = express.Router();

Routes.use('/user', UserRoutes);
Routes.use('/document', DocumentRoutes);
Routes.use('/vendorclient', VendorClientRoutes);
Routes.use('/sites', SitesRoutes);
Routes.use('/auth', AuthRoutes);
Routes.use('/driver', DriverRoutes);
Routes.use('/uploads', AWSRoutes);
