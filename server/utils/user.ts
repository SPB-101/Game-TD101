import type { Response } from "express";
import type { User } from "../../client/app/entities/user/types";

export const isUserAuth = (res: Response) => !!res.locals.isUserAuth;

export const setUserAuth = (res: Response) => {
  res.locals.isUserAuth = true;
};

export const getUserInfo = (res: Response) => {
  return res.locals.userInfo as User;
};

export const setUserInfo = (res: Response, user: User) => {
  res.locals.userInfo = user;
};
