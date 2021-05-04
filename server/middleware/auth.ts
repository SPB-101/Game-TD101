import { Request, Response, NextFunction } from "express";
import { setUserAuth } from "../utils/setUserAuth";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authCookie } = req.cookies;
    if (authCookie) setUserAuth(res);
  } catch (err) {
    console.log(err);
  }
  next();
};
