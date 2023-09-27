import { RequestHandler } from "express";
import * as UserService from "../services/User.service";

export const getUsers: RequestHandler = async (_req, res, next) => {
  try {
    const users = await UserService.getUsers();

    return res.status(200).json({
      result: 'success',
      data: users,
    });

  } catch (err) {
    next(err);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    
    const user = await UserService.getUser(req.params.id);

    return res.status(200).json({
      result: 'success',
      data: user,
    });

  } catch (err) {
    next(err);
  }
};