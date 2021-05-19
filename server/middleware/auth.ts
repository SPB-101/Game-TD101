import axios from "axios";
import { setUserAuth, setUserInfo } from "../utils/user";
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
    setUserAuth(res);

    axios.defaults.headers["Cookie"] = cookieToString(req.cookies);

    resolveUserInfo()
      .then((user) => {
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
