import express, { Router } from "express";
import * as AuthController from "../controllers/Auth.controller";

export const AuthRoutes: Router = express.Router();

AuthRoutes.post("/login", AuthController.login);
AuthRoutes.post("/send-otp", AuthController.sendOtp);
AuthRoutes.post("/resend-otp", AuthController.resendOtp);
AuthRoutes.post("/verify-otp", AuthController.verifyOtp);
