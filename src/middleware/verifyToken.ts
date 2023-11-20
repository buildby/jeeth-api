import { RequestHandler } from "express";
import * as UserService from "../services/User.service";
import { verify } from "jsonwebtoken";

export const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const authorization: string = req.headers.authorization || "";

    if (authorization) {
      const token = authorization.split(" ")[1];
      const payload: any = await verify(
        token,
        process.env.ACCESS_TOKEN_SECRET!
      );

      if (payload != undefined) {
        let user: any;
        user = await UserService.findUser(payload.userId);
        if (user != null) {
          req.body.user = user._id;
          return next();
        } else {
          res
            .status(401)
            .json({ success: false, message: "You are not authenticated." });
        }
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "You are not authenticated." });
    }
  } catch (error) {
    next(error);
  }
};
