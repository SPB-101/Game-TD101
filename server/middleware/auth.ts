import axios from "axios";
import { setUserAuth, setUserInfo, getUserInfo } from "../utils/user";
import { cookieToString } from "../utils/cookie";
import { resolveUserInfo } from "../../client/app/resolvers/auth";

import type { Request, Response, NextFunction } from "express";

export const checkAuth = () => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authCookie } = req.cookies;
  if (authCookie) {
    axios.defaults.headers["Cookie"] = cookieToString(req.cookies);

    resolveUserInfo()
      .then((user) => {
        setUserAuth(res);
        setUserInfo(res, user);
        console.log("User", user.id, user.firstName);
      })
      .catch(() => {
        console.log("User not auth, cookie not valid");
      })
      .finally(() => {
        next();
      });
  } else {
    console.log("User not auth");
    next();
  }
};

export const protectedAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = getUserInfo(res);
  if (user === undefined) {
    return res.status(401).send("You are not authorized for api requests");
  }
  next();
};
