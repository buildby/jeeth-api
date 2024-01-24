import express, { Router } from "express";
import * as EarningsController from "../controllers/Earning.controller";
import { verifyToken } from "../middleware/verifyToken";

export const EarningsRoutes: Router = express.Router();

EarningsRoutes.post(
  "/fetchPastWeekEarning",
  EarningsController.fetchPastWeekEarning
);

EarningsRoutes.post("/", verifyToken, EarningsController.uploadEarnings);

EarningsRoutes.post("/fetchAllEarnings", EarningsController.fetchAllEarnings);
