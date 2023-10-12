
import express, { Router } from "express";
export const AuthRoutes: Router = express.Router();

import {
    sendOTPtoUser,
    verifyOTPofUser,
    resendOTPtoUser,


} from "./auth.controllers";

// /api/auth/sendOTPtoUser
AuthRoutes.post("/sendOTPtoUser", sendOTPtoUser);

// /api/auth/verifyOTPofUser
AuthRoutes.post("/verifyOTPofUser", verifyOTPofUser);

// /api/auth/resendOTPtoUser
AuthRoutes.post("/resendOTPtoUser", resendOTPtoUser);



