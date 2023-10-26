import { RequestHandler } from "express";
import * as MSG91Service from "../services/Msg91.service";
import * as AuthService from "../services/Auth.service";
import * as UserService from "../services/User.service";
import { UserRole } from "@prisma/client";


export const login: RequestHandler = async (req, res, next) => {
  try {
    const accessToken = AuthService.createAccessToken(1);
    return res.status(200).send({
      result: 'success',
      data: {
        accessToken,
        userId: 1,
        message: 'dummy-access-token'
      }
    });
  }
  catch (error) {
    next(error);
  }
};

export const sendOtp: RequestHandler = async (req, res, next) => {
  try {
    const { phoneNumber, countryCode = "+91" } = req.body;

    if (!phoneNumber) {
      return res.status(400).send({
        result: 'failure',
        message: "Phone number is required",
      });
    }

    // Send dummy OTP success response in development mode
    if (process.env.NODE_ENV !== 'production') {
      return res.status(200).send({
        result: 'success',
        data: { type: 'success' },

      });
    }

    const otpResponse = await MSG91Service.sendOTP(phoneNumber, countryCode);

    return res.status(200).send({
      result: 'success',
      data: otpResponse.data,
    });

  } catch (error) {
    next(error);
  }

};

export const resendOtp: RequestHandler = async (req, res, next) => {
  try {
    const { phoneNumber, type = "text", countryCode = "+91" } = req.body;

    if (!phoneNumber) {
      return res.status(400).send({
        success: false,
        result: "Phone number is required",
      });
    }

    // Send dummy OTP success response in development mode
    if (process.env.NODE_ENV !== 'production') {
      return res.status(200).send({
        result: 'success',
      });
    }

    const retryOtpResponse = await MSG91Service.resendOTP(phoneNumber, countryCode, type);

    return res.status(200).send({
      result: 'success',
      data: retryOtpResponse.data,
    });

  } catch (error) {
    next(error);
  }
};

export const verifyOtp: RequestHandler = async (req, res, next) => {
  try {

    const { phoneNumber, otp, countryCode = "+91" } = req.body;

    if (!phoneNumber) {
      return res.status(400).send({
        result: 'failure',
        message: "Phone number is required",
      });
    }

    if (!otp) {
      return res.status(400).send({
        result: 'failure',
        message: "OTP is required",
      });
    }

    // Send dummy OTP success response in development mode
    // if (process.env.NODE_ENV !== 'production') {
    //   return res.status(200).send({
    //     result: 'success',
    //   });
    // }

    let verifyOtpResponse;

    if (process.env.NODE_ENV == 'production') {
      verifyOtpResponse = await MSG91Service.verifyOTP(phoneNumber, otp, countryCode);

    } else {
      verifyOtpResponse = { data: { type: 'success' } };
    }

    if (verifyOtpResponse.data.type === 'success') {

      let user = await UserService.findUserByPhone(phoneNumber);

      if (!user) {
        user = await UserService.createUser({
          phone: phoneNumber,
          role: UserRole.DRIVER,
          Driver: {
            create: {
              phone: phoneNumber,
            }
          }
        });
      }

      // generate accessToken
      const token = AuthService.createAccessToken(user.id);

      return res.status(200).send({
        result: 'success',
        data: user,
        token: token,
      });
    }

    // If OTP verification fails, return error response
    return res.status(400).send({
      result: 'failure',
      data: verifyOtpResponse.data,
    });

  } catch (error) {
    next(error);
  }
};




