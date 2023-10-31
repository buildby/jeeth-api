import express, { Router } from "express";
import * as SlabModel from "../controllers/SlabModel.controller";

export const SlabModelRoutes: Router = express.Router();

SlabModelRoutes.get("/", SlabModel.getSlabModels);

SlabModelRoutes.post("/", SlabModel.createSlabModel);

SlabModelRoutes.post("/:id", SlabModel.updateSlabModel);

SlabModelRoutes.delete("/:id", SlabModel.deleteSlabModel);

SlabModelRoutes.get("/:id", SlabModel.getSlabModelById);
