import express, { Router } from "express";
import * as SlabModel from "../controllers/BusinessModel.controller";

export const SlabModelRoutes: Router = express.Router();

SlabModelRoutes.get("/:type", SlabModel.getModels);

SlabModelRoutes.post("/", SlabModel.createModel);

SlabModelRoutes.post("/:id", SlabModel.updateModel);

SlabModelRoutes.delete("/:id", SlabModel.deleteModel);

SlabModelRoutes.get("/:id", SlabModel.getModelById);
