const path = require("path");
const express = require("express");
import compression from "compression";
import render from "./middleware/render";

const rootDir = process.cwd();
const app = express();

app
  .use(compression())
  .use(express.static(path.join(rootDir, "dist")))
  .use(express.static(path.join(rootDir, "client/public")));

app.get("/*", render);

export { app };
