import { Response, Request, NextFunction } from "express";
import "dotenv/config";


const axios = require("axios").default;
const SendOtp = require("sendotp");
// const templateId = '619200684b4d6d1128154f35';
// const authKey = '341505ArKU4rb1610a478bP1';
const templateId = process.env.MSG91TEMPLATEID;
const authKey = process.env.MSG91AUTHKEY;

export const sendOTPtoUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mobileNo, cc = "91" } = req.body;

    let URL;
    if (mobileNo == "8899221111" || mobileNo == "8899331111" || mobileNo == "8899441111") {
      URL = `https://api.msg91.com/api/v5/otp?template_id=${templateId}&mobile=+${cc}${mobileNo}&authkey=${authKey}&otp_length=4&otp=1234`;
    } else {
      URL = `https://api.msg91.com/api/v5/otp?template_id=${templateId}&mobile=+${cc}${mobileNo}&authkey=${authKey}&otp_length=4`;
    }

    //DEV
    res.status(200).send({
      success: true,
      result: { type: "success" },
    });

    // PROD 
    // axios
    //   .get(URL)
    //   .then(async function (response: any) {

    //     res.status(200).send({
    //       success: true,
    //       result: response.data,
    //     });
    //   })
    //   .catch(async function (error: any) {

    //     res.status(200).send({
    //       success: true,
    //       error: error,
    //     });
    //   });

  } catch (error) {
    res.status(500).send({
      success: false,
      result: error
    });
  }

};

export const resendOTPtoUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mobileNo, type = "text", cc = "91" } = req.body;
    let URL;
    if (mobileNo == "8899221111" || mobileNo == "8899331111" || mobileNo == "8899441111") {
      URL = `https://api.msg91.com/api/v5/otp/retry?authkey=${authKey}&retrytype=${type}&mobile=+${cc}${mobileNo}&otp=123456`;
    } else {
      URL = `https://api.msg91.com/api/v5/otp/retry?authkey=${authKey}&retrytype=${type}&mobile=+${cc}${mobileNo}`;
    }

    // DEV
    res.status(200).send({
      success: true,
      result: { type: "success" },
    });

    // // PROD
    // axios
    //   .get(URL)
    //   .then(async function (response: any) {

    //     res.status(200).send({
    //       success: true,
    //       result: response.data,
    //     });
    //   })
    //   .catch(async function (error: any) {

    //     res.status(200).send({
    //       success: true,
    //       error: error,
    //     });
    //   });

  } catch (error) {
    res.status(500).send({
      success: false,
      result: error
    });
  }
};

export const verifyOTPofUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mobileNo, otp, cc = "91" } = req.body;

    const URL = `https://api.msg91.com/api/v5/otp/verify?authkey=${authKey}&mobile=+${cc}${mobileNo}&otp=${otp}`;

    //DEV
    res.status(200).send({
      success: true,
      result: { type: "success" },
    });

    // PROD
    // axios
    //   .get(URL)
    //   .then(async function (response: any) {

    //     res.status(200).send({
    //       success: true,
    //       result: response.data,
    //     });
    //   })
    //   .catch(function (error: any) {
    //     res.status(200).send({
    //       success: true,
    //       error: error,
    //     });
    //   });

  } catch (error) {
    res.status(500).send({
      success: false,
      result: error
    });
  }
};




