import type { Response } from "express";

export const setUserAuth = (res: Response) => {
  res.locals.isUserAuth = true;
};
