import express, { Router } from "express";
import * as Campaign from "../controllers/Campaign.controller";

export const CampaignRoutes: Router = express.Router();

CampaignRoutes.get("/", Campaign.fetchAllCampaigns);

CampaignRoutes.get("/fetchAllCampaignsApp", Campaign.fetchAllCampaignsApp);

CampaignRoutes.post("/", Campaign.createCampaign);

CampaignRoutes.post("/:id", Campaign.updateCampaign);

CampaignRoutes.delete("/:id", Campaign.deleteCampaign);

CampaignRoutes.get("/:id", Campaign.fetchCampiagnById);
