import express, { Router } from "express";
import * as SitesController from "../controllers/Sites.controller";

export const SitesRoutes: Router = express.Router();

SitesRoutes.get("/", SitesController.getSites);
