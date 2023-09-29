import express, { Router } from "express";
import { UserRoutes } from "./User.route";
import { DocumentRoutes } from "./Document.route";

export const Routes: Router = express.Router();

Routes.use('/user', UserRoutes);
Routes.use('/document', DocumentRoutes);

