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
    // return next(err);
    return next();
  }

  res.status(500).json({ reason: err });
};
