import express, { Router } from "express";
import { UserRoutes } from "./User.route";
import { DocumentRoutes } from "./Document.route";
import { VendorClientRoutes } from "./VendorClient.route";
import { AuthRoutes } from "../auth/auth.routes";

export const Routes: Router = express.Router();

Routes.use('/user', UserRoutes);
Routes.use('/document', DocumentRoutes);
Routes.use('/vendorclient', VendorClientRoutes);
Routes.use('/auth', AuthRoutes);
