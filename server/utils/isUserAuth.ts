import type { Response } from "express";

export const isUserAuth = (res: Response) => !!res.locals.isUserAuth;
