import express, { Router } from "express";
import * as DriverController from "../controllers/Driver.controller";


export const DriverRoutes: Router = express.Router();

DriverRoutes.put('/editDriverProfile', DriverController.editDriverProfile);
