import { RequestHandler } from "express";
import * as SiteService from "../services/Site.service";
import { Prisma } from "@prisma/client";

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

export const createSite: RequestHandler = async (req, res, next) => {
  try {
    const siteData: Prisma.ClientSiteCreateInput = {
      name: req.body.name,
      location: req.body.location,
      workingDays: req.body.workingDays,
      contactNumbers: req.body.contactNumbers,
      avatar: req.body.avatar,
      Vendor: { connect: { id: req.body.vendor_id } }
    };

    const site = await SiteService.createSite(siteData);

    return res.status(201).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSite: RequestHandler = async (req, res, next) => {
  try {
    const siteData: Prisma.ClientSiteUpdateInput = {
      name: req.body.name,
      location: req.body.location,
      workingDays: req.body.workingDays,
      contactNumbers: req.body.contactNumbers,
      avatar: req.body.avatar,
      Vendor: { connect: { id: req.body.vendor_id } }
    };

    const site = await SiteService.updateSite(+req.params.id, siteData);

    return res.status(201).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSite: RequestHandler = async (req, res, next) => {
  try {
    await SiteService.deleteSite(+req.params.id);
    return res.status(200).json({
      result: "success",
      data: { message: "Site deleted successfully" },
    });
  } catch (error) {
    next(error);
  }
};

export const getSiteById: RequestHandler = async (req, res, next) => {
  try {
    const site = await SiteService.getSiteById(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};
