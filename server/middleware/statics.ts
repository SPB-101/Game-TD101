import path from "path";
import express from "express";
import type * as core from "express-serve-static-core";

const rootDir = process.cwd();
import { IS_DEV } from "../../constants/server";

export const statics = (app: core.Express) => {
  if (IS_DEV) {
    app.use(express.static(path.join(rootDir, "dist")));
    app.use(express.static(path.join(rootDir, "client/public")));
  }
};
