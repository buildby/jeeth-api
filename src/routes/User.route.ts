import express, { Router } from "express"
import * as UserController from "../controllers/User.controller";

export const UserRoutes: Router = express.Router();


UserRoutes.get('/', UserController.getUsers);
UserRoutes.get('/:id', UserController.getUser);