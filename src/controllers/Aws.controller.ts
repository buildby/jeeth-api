import { RequestHandler } from "express";
import * as AwsService from "../services/Aws.service";

export const getSignedUrl: RequestHandler = async (req, res, next) => {
  try {

    const { fileName } = req.params;
    const contentType = req.headers['content-type'] || 'application/octet-stream';

    const url = await AwsService.getSignedUrl(fileName, contentType);

    return res.status(200).json({
      result: url != '' ? "success" : 'failure',
      data: { signedUrl: url, }
    });
  } catch (err) {
    next(err);
  }
};

