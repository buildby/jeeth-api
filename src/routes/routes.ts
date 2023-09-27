import express, { Router } from "express";
import { UserRoutes } from "./User.route";

export const Routes: Router = express.Router();

Routes.use('/user', UserRoutes)

