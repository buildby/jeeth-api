import express, { Router } from "express";
import * as DriverController from "../controllers/Driver.controller";


export const DriverRoutes: Router = express.Router();

DriverRoutes.put('/editDriverProfile/:id', DriverController.editDriverProfile);

DriverRoutes.get('/refreshUserEarnings/:id', DriverController.refreshUserEarnings);

DriverRoutes.post('/updateDriverEarnings/:phone', DriverController.updateDriverEarnings);
