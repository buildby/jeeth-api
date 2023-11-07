import express, { Router } from "express";
import * as AuthController from "../controllers/Auth.controller";

export const AuthRoutes: Router = express.Router();

AuthRoutes.post("/login", AuthController.login);
AuthRoutes.get("/driverAutoLogin/:phone", AuthController.driverAutoLogin);
AuthRoutes.post("/send-otp", AuthController.sendOtp);
AuthRoutes.post("/resend-otp", AuthController.resendOtp);
AuthRoutes.post("/verify-otp", AuthController.verifyOtp);
AuthRoutes.post("/web-send-otp", AuthController.webSendOtp);
AuthRoutes.post("/web-verify-otp", AuthController.webVerifyOtp);
