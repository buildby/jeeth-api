import express, { Router } from "express";
import * as Campaign from "../controllers/Campaign.controller";
import { verifyToken } from "../middleware/verifyToken";

export const CampaignRoutes: Router = express.Router();

CampaignRoutes.get("/", verifyToken, Campaign.fetchAllCampaigns);

CampaignRoutes.get("/fetchAllCampaignsApp", Campaign.fetchAllCampaignsApp);

CampaignRoutes.post("/", verifyToken, Campaign.createCampaign);

CampaignRoutes.post("/:id", verifyToken, Campaign.updateCampaign);

CampaignRoutes.delete("/:id", Campaign.deleteCampaign);

CampaignRoutes.get("/:id", Campaign.fetchCampiagnById);
