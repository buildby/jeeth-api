import express, { Router } from "express";
import * as SitesController from "../controllers/Sites.controller";
import { verifyToken } from "../middleware/verifyToken";

export const SitesRoutes: Router = express.Router();

SitesRoutes.get("/", verifyToken, SitesController.getSites);

SitesRoutes.get("/:id", verifyToken, SitesController.getSiteById);

SitesRoutes.post("/", verifyToken, SitesController.createSite);

SitesRoutes.post("/:id", verifyToken, SitesController.updateSite);

SitesRoutes.delete("/:id", SitesController.deleteSite);

SitesRoutes.post("/fetchAllModels/models", SitesController.fetchAllModels);

SitesRoutes.post(
  "/fetchAllModels/models/:id",
  SitesController.fetchAllModelsByVendor
);
