import { sign } from "jsonwebtoken";

export const createAccessToken = (userId: number): string => {
  const accessToken = sign({ userId: userId }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "30d",
  });
  return accessToken;
};

