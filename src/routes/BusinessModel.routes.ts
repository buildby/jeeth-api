import express, { Router } from "express";
import * as SlabModel from "../controllers/BusinessModel.controller";

export const BusinessModelRoutes: Router = express.Router();

BusinessModelRoutes.get("/:type", SlabModel.getModels);

BusinessModelRoutes.post("/", SlabModel.createModel);

BusinessModelRoutes.post("/:id", SlabModel.updateModel);

BusinessModelRoutes.delete("/:id", SlabModel.deleteModel);

BusinessModelRoutes.get("/:id/:type", SlabModel.getModelById);
