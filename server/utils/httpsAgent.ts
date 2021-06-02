import https from "https";
import { IS_DEV } from "../../constants/server";

export const fixDevCert = (req, res, next) => {
  if (IS_DEV) {
    https.globalAgent.options.rejectUnauthorized = false;
  }
  next();
};
