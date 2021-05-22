import { IS_DEV } from "../../constants/server";
import type {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";

export const errorHandler = () => (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (IS_DEV) {
    console.error(err);
  }

  res.status(500).json({ reason: err });
};
