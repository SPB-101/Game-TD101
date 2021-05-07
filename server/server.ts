import path from "path";
import express from "express";

import compression from "compression";
import cookieParser from "cookie-parser";

import render from "./middleware/render";
import { checkAuth } from "./middleware/auth";
import { hmr } from "./middleware/hmr";

const rootDir = process.cwd();
const app = express();

hmr(app);
app.use(cookieParser());
app.use(checkAuth);
app.use(compression());
app.use(express.static(path.join(rootDir, "dist")));
app.use(express.static(path.join(rootDir, "client/public")));
app.get("/*", render);

export { app };
