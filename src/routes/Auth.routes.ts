import express, { Router } from "express";
import * as AuthController from "../controllers/Auth.controller";

export const AuthRoutes: Router = express.Router();

AuthRoutes.post("/send-otp", AuthController.sendOTPtoUser);
AuthRoutes.post("/resend-otp", AuthController.resendOTPtoUser);
AuthRoutes.post("/verify-otp", AuthController.verifyOTPofUser);
