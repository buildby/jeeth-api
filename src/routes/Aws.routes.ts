import express, { Router } from "express";
import * as AwsController from "../controllers/Aws.controller";

export const AWSRoutes: Router = express.Router();

AWSRoutes.get("/:fileName", AwsController.getUploadFileUrl);