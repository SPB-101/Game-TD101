import axios from "axios";
import { setUserAuth, setUserInfo } from "../utils/user";
import { cookieToString } from "../utils/cookie";
import { resolveUserInfo } from "../../client/app/resolvers/auth";
import type { Request, Response, NextFunction } from "express";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authCookie } = req.cookies;
  if (authCookie) {
    setUserAuth(res);

    axios.defaults.headers["Cookie"] = cookieToString(req.cookies);

    resolveUserInfo()
      .then((user) => {
        setUserInfo(res, user);
      })
      .finally(() => {
        next();
      });
  } else {
    next();
  }
};
