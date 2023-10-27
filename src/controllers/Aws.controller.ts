import { RequestHandler } from "express";
import * as AwsService from "../services/Aws.service";

export const getUploadFileUrl: RequestHandler = async (req, res, next) => {
  try {
    const url = await AwsService.getUploadFileUrl(req.params.fileName);

    return res.status(200).json({
      result: "success",
      signedUrl: url,
    });
  } catch (err) {
    next(err);
  }
};
