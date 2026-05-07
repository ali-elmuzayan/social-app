import jwt from "jsonwebtoken";
import type { Response } from "express";
import type { Types } from "mongoose";
import { env } from "../config/env";

export const generateAuthToken = (userId: Types.ObjectId | string): string => {
  return jwt.sign({ userId: userId.toString() }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};

/**
 * Sets a secure HTTP-only cookie containing the JWT.
 * The cookie is the only mechanism used to authenticate subsequent requests.
 */
export const setAuthCookie = (res: Response, token: string): void => {
  res.cookie("token", token, {
    httpOnly: true, // not accessible from JS
    secure: env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  });
};
