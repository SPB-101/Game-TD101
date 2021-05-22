import path from "path";
import express from "express";
import type * as core from "express-serve-static-core";

const rootDir = process.cwd();
import { IS_DEV } from "../../constants/server";

export const staticsBundle = () => {
  if (IS_DEV) {
    return express.static(path.join(rootDir, "dist"));
  }
  return (req, res, next) => next();
};
