import path from "path";
import express from "express";
import http from "http";
import https from "https";
import fs from "fs";

import compression from "compression";

import cookieParser from "cookie-parser";

import { render } from "./middleware/render";
import { checkAuth } from "./middleware/auth";
import { hmr } from "./middleware/hmr";
import { PORT, IS_DEV, HOST } from "../constants/server";

const rootDir = process.cwd();
const app = express();

hmr(app);
app.use(cookieParser());
app.use(checkAuth);
app.use(compression());
app.use(express.static(path.join(rootDir, "dist")));
app.use(express.static(path.join(rootDir, "client/public")));
app.get("/*", render);

let server = http.createServer(app);

try {
  if (IS_DEV) {
    const cert = fs.readFileSync("./ssl/localhost.crt");
    const key = fs.readFileSync("./ssl/localhost.key");

    server = https.createServer({ key: key, cert: cert }, app);
    server.listen({ port: PORT, host: HOST }, () => {
      console.log(`server started on https://${HOST}:${PORT}`);
    });
  } else {
    server.listen({ port: PORT }, () => {
      console.log(`server started on http://localhost:${PORT}`);
    });
  }
} catch (error) {
  if (error.code === "ENOENT" && error.syscall === "open") {
    console.error(
      "Нет сертификатов, посмотри в разделе с документацией SSL.md"
    );
  }
}
