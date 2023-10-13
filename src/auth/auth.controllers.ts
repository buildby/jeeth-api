import { Response, Request, NextFunction } from "express";
import "dotenv/config";


const axios = require("axios").default;

const templateId = process.env.MSG91TEMPLATEID;
const authKey = process.env.MSG91AUTHKEY;

export const sendOTPtoUser = async (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { mobileNo, cc = "91" } = req.body;

    //DEV
    if (process.env.NODE_ENV == 'development') {
      return response.status(200).send({
        success: true,
        result: { type: "success" },
      });

    } else {
      // PROD
      let URL = `https://api.msg91.com/api/v5/otp?template_id=${templateId}&mobile=+${cc}${mobileNo}&authkey=${authKey}&otp_length=4`;

      let putItem = new Promise(async (res, rej) => {
        try {
          axios
            .get(URL)
            .then(async function (otpResponse: any) {

              // res.status(200).send();
              res({ success: true, result: otpResponse.data });
            })
            .catch(async function (error: any) {
              rej({ success: false, error: error });
            });

        } catch (error) {
          rej({ success: true, error: error });
        }
      });

      const result = await putItem;
      return response.status(200).send(result);
    }

  } catch (error) {
    return response.status(500).send({
      success: false,
      result: error
    });
  }

};

export const resendOTPtoUser = async (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { mobileNo, type = "text", cc = "91" } = req.body;

    // DEV
    if (process.env.NODE_ENV == 'development') {
      return response.status(200).send({
        success: true,
        result: { type: "success" },
      });

    } else {
      // // PROD
      let URL = `https://api.msg91.com/api/v5/otp/retry?authkey=${authKey}&retrytype=${type}&mobile=+${cc}${mobileNo}&otp=123456`;

      let putItem = new Promise(async (res, rej) => {
        try {
          axios
            .get(URL)
            .then(async function (otpResponse: any) {

              // res.status(200).send();
              res({ success: true, result: otpResponse.data });
            })
            .catch(async function (error: any) {
              rej({ success: false, error: error });
            });

        } catch (error) {
          rej({ success: true, error: error });
        }
      });

      const result = await putItem;
      return response.status(200).send(result);
    }

  } catch (error) {
    return response.status(500).send({
      success: false,
      result: error
    });
  }
};

export const verifyOTPofUser = async (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { mobileNo, otp, cc = "91" } = req.body;

    //DEV
    if (process.env.NODE_ENV == 'development') {
      return response.status(200).send({
        success: true,
        result: { type: "success" },
      });

    } else {

      // // PROD
      const URL = `https://api.msg91.com/api/v5/otp/verify?authkey=${authKey}&mobile=+${cc}${mobileNo}&otp=${otp}`;

      let putItem = new Promise(async (res, rej) => {
        try {
          axios
            .get(URL)
            .then(async function (otpResponse: any) {

              // res.status(200).send();
              res({ success: true, result: otpResponse.data });
            })
            .catch(async function (error: any) {
              rej({ success: false, error: error });
            });

        } catch (error) {
          rej({ success: true, error: error });
        }
      });

      const result = await putItem;
      return response.status(200).send(result);
    }

  } catch (error) {
    return response.status(500).send({
      success: false,
      result: error
    });
  }
};




