import express, { Router } from "express";
import * as AwsController from "../controllers/Aws.controller";

export const AWSRoutes: Router = express.Router();

AWSRoutes.get("/getSignedUrl/:fileName", AwsController.getSignedUrl);