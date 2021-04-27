const path = require("path");
const express = require("express");
import compression from "compression";
import render from "./middleware/render";

import type { Request, Response } from "express";

const rootDir = process.cwd();
const app = express();

const PORT = process.env.PORT || 3000;

app
  .use(compression())
  .use(express.static(path.join(rootDir, "dist")))
  .use(express.static(path.join(rootDir, "client/public")))
  .use((_req: Request, res: Response) => {
    res.sendFile(path.join(rootDir, "dist/assets/images", "favicon.ico"));
  });

app.get("/*", render);

app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
