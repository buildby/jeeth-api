import express, { Router } from "express";
import { UserRoutes } from "./User.route";
import { DocumentRoutes } from "./Document.route";
import { VendorClientRoutes } from "./VendorClient.route";
import { AuthRoutes } from "./Auth.routes";
import { DriverRoutes } from "./Driver.routes";
import { SitesRoutes } from "./Sites.routes";
import { AWSRoutes } from "./Aws.routes";
import { BusinessModelRoutes } from "./BusinessModel.routes";
import { AppConfigRoutes } from "./appConfig.routes";
import { VehicleAttachmentRoutes } from "./VehicleAttachment.routes";
import { CampaignRoutes } from "./Campaign.routes";
import { driverApplicationRoutes } from "./DriverApplication.routes";

export const Routes: Router = express.Router();

Routes.use("/user", UserRoutes);
Routes.use("/document", DocumentRoutes);
Routes.use("/vendorclient", VendorClientRoutes);
Routes.use("/sites", SitesRoutes);
Routes.use("/businessModel", BusinessModelRoutes);
Routes.use("/vehicleAttachment", VehicleAttachmentRoutes);
Routes.use("/driverApplication", driverApplicationRoutes);
Routes.use("/campaign", CampaignRoutes);
Routes.use("/auth", AuthRoutes);
Routes.use("/driver", DriverRoutes);
Routes.use("/aws", AWSRoutes);
Routes.use("/appConfig", AppConfigRoutes);
