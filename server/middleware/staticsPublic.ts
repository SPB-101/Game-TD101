import path from "path";
import express from "express";

const rootDir = process.cwd();
import { IS_DEV } from "../../constants/server";

export const staticsPublic = () => {
  if (IS_DEV) {
    return express.static(path.join(rootDir, "client/public"));
  }
  return (req, res, next) => next();
};
