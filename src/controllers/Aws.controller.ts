import { RequestHandler } from "express";
import * as AwsService from "../services/Aws.service";

export const getSignedUrl: RequestHandler = async (req, res, next) => {
  try {
    const url = await AwsService.getSignedUrl(req.params.fileName);

    return res.status(200).json({
      result: url != '' ? "success" : 'failure',
      data: { signedUrl: url, }
    });
  } catch (err) {
    next(err);
  }
};

