import express, { Router } from "express";
import * as DriverApplication from "../controllers/DriverApplication.controller";

export const driverApplicationRoutes: Router = express.Router();

driverApplicationRoutes.post("/", DriverApplication.createDriverApplication);

driverApplicationRoutes.get("/:id", DriverApplication.getApplicationById);
