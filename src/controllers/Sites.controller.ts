import { RequestHandler } from "express";
import * as SiteService from "../services/Site.service";

export const getSites: RequestHandler = async (_req, res, next) => {
  try {
    const sites = await SiteService.getSites();

    return res.status(200).json({
      result: "success",
      data: sites,
    });
  } catch (err) {
    next(err);
  }
};
