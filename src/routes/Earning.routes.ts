import express, { Router } from "express";
import * as EarningsController from "../controllers/Earning.controller";
import { verifyToken } from "../middleware/verifyToken";

export const EarningsRoutes: Router = express.Router();

EarningsRoutes.post("/", verifyToken, EarningsController.uploadEarnings);

EarningsRoutes.get("/" , EarningsController.fetchPastWeekEarning);
