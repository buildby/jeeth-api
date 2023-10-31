import express, { Router } from "express";
import * as AppConfigController from "../controllers/appConfig.controller";


export const AppConfigRoutes: Router = express.Router();

AppConfigRoutes.get('/fetchVehicleConfigs', AppConfigController.fetchVehicleConfigs);
AppConfigRoutes.put('/createVehicleConfigs', AppConfigController.createVehicleConfigs);
