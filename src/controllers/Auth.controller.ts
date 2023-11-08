import { RequestHandler } from "express";
import * as MSG91Service from "../services/Msg91.service";
import * as AuthService from "../services/Auth.service";
import * as DriverService from "../services/Driver.service";
import * as MetaDataService from "../services/metaData.service";


import * as UserService from "../services/User.service";
import { DriverStatus, UserRole } from "@prisma/client";
import prisma from "../prisma/client";
import { MetadataService } from "aws-sdk";

export const login: RequestHandler = async (req, res, next) => {
  try {
    const accessToken = AuthService.createAccessToken(1);
    return res.status(200).send({
      result: "success",
      data: {
        accessToken,
        userId: 1,
        message: "dummy-access-token",
      },
    });
  } catch (error) {
    next(error);
  }
};

export const sendOtp: RequestHandler = async (req, res, next) => {
  try {
    const { phoneNumber, countryCode = "+91" } = req.body;

    if (!phoneNumber) {
      return res.status(400).send({
        result: "failure",
        message: "Phone number is required",
      });
    }

    // Send dummy OTP success response in development mode
    if (process.env.NODE_ENV !== "production") {
      return res.status(200).send({
        result: "success",
        data: { type: "success" },
      });
    }

    const otpResponse = await MSG91Service.sendOTP(phoneNumber, countryCode);

    return res.status(200).send({
      result: "success",
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
    if (process.env.NODE_ENV !== "production") {
      return res.status(200).send({
        result: "success",
      });
    }

    const retryOtpResponse = await MSG91Service.resendOTP(
      phoneNumber,
      countryCode,
      type
    );

    return res.status(200).send({
      result: "success",
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
        result: "failure",
        message: "Phone number is required",
      });
    }

    if (!otp) {
      return res.status(400).send({
        result: "failure",
        message: "OTP is required",
      });
    }

    // Send dummy OTP success response in development mode
    // if (process.env.NODE_ENV !== 'production') {
    //   return res.status(200).send({
    //     result: 'success',
    //   });
    // }

    let verifyOtpResponse: any;

    if (process.env.NODE_ENV == "production") {
      verifyOtpResponse = await MSG91Service.verifyOTP(
        phoneNumber,
        otp,
        countryCode
      );
    } else {
      verifyOtpResponse = { data: { type: "success" } };
    }

    if (verifyOtpResponse.data.type === "success") {
      let user = await UserService.findUserByPhone(phoneNumber);

      if (!user) {
        user = await UserService.createUser({
          phone: phoneNumber,
          role: UserRole.DRIVER,
          Driver: {
            create: {
              phone: phoneNumber,
              status: DriverStatus.IN_ACTIVE
            },

          },
        });

      }

      // generate accessToken
      const token = AuthService.createAccessToken(user.id);

      const driver = await DriverService.getDriver(user.id);

      return res.status(200).send({
        result: "success",
        data: { user, driver },
        token: token,
      });
    }

    // If OTP verification fails, return error response
    return res.status(400).send({
      result: "failure",
      data: verifyOtpResponse.data,
    });
  } catch (error) {
    next(error);
  }
};

export const webSendOtp: RequestHandler = async (req, res, next) => {
  try {
    const { phoneNumber, countryCode = "+91" } = req.body;

    if (!phoneNumber) {
      return res.status(400).send({
        result: "failure",
        data: {
          message: "Phone number is required",
          type: "error",
        },
      });
    }

    let user = await UserService.findUserByPhone(phoneNumber);

    if (!user) {
      return res.status(400).send({
        result: "failure",
        data: {
          message: "No user found with this phone number",
          type: "error",
        },
      });
    }

    // Send dummy OTP success response in development mode
    if (process.env.NODE_ENV !== "production") {
      return res.status(200).send({
        result: "success",
        data: { type: "success" },
      });
    }

    const otpResponse = await MSG91Service.sendOTP(phoneNumber, countryCode);

    return res.status(200).send({
      result: "success",
      data: otpResponse.data,
    });
  } catch (error) {
    next(error);
  }
};

export const webVerifyOtp: RequestHandler = async (req, res, next) => {
  try {
    const { phoneNumber, otp, countryCode = "+91" } = req.body;

    if (!phoneNumber) {
      return res.status(400).send({
        result: "failure",
        data: {
          message: "Phone number is required",
          type: "error",
        },
      });
    }

    if (!otp) {
      return res.status(400).send({
        result: "failure",
        data: {
          message: "OTP is required",
          type: "error",
        },
      });
    }

    let verifyOtpResponse;

    if (process.env.NODE_ENV == "production") {
      verifyOtpResponse = await MSG91Service.verifyOTP(
        phoneNumber,
        otp,
        countryCode
      );
    } else {
      verifyOtpResponse = { data: { type: "success" } };
    }

    if (verifyOtpResponse.data.type === "success") {
      let user = await UserService.findUserByPhone(phoneNumber);

      // generate accessToken
      const token = AuthService.createAccessToken(user!.id);

      return res.status(200).send({
        result: "success",
        data: user,
        token: token,
      });
    }

    // If OTP verification fails, return error response
    return res.status(400).send({
      result: "failure",
      data: verifyOtpResponse.data,
    });
  } catch (error) {
    next(error);
  }
};

export const driverAutoLogin: RequestHandler = async (req, res, next) => {
  try {
    let { phone }: any = req.params;
    let driver, token;
    const user = await UserService.findUserByPhone(phone);

    if (user) {
      driver = await DriverService.getDriver(user.id);
      token = AuthService.createAccessToken(user.id);
    }

    res.status(200).send({
      result: "success",
      data: { user, driver },
      token: token,
    });

    return res.status(400).send({
      result: "failure",
    });

  } catch (error) {
    next(error);
  }
};
