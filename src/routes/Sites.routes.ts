import express, { Router } from "express";
import * as SitesController from "../controllers/Sites.controller";

export const SitesRoutes: Router = express.Router();

SitesRoutes.get("/", SitesController.getSites);

SitesRoutes.post("/", SitesController.createSite);

SitesRoutes.post("/:id", SitesController.updateSite);

SitesRoutes.delete("/:id", SitesController.deleteSite);

SitesRoutes.get("/:id", SitesController.getSiteById);