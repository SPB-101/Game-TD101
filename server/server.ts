import dotenv from "dotenv";

import express from "express";
import http from "http";
import https from "https";
import fs from "fs";

import compression from "compression";

import cookieParser from "cookie-parser";
import { render } from "./middleware/render";
import { checkAuth } from "./middleware/auth";
import { staticsBundle } from "./middleware/staticsBundle";
import { staticsPublic } from "./middleware/staticsPublic";
import { PORT, IS_DEV, HOST, API_VERSION } from "../constants/server";

import { sequelize } from "./database/postgres";
import "./models";

import { apiRouter } from "./routes";

const app = express();
dotenv.config();

const start = async () => {
  try {
    await sequelize.sync();
    console.log("Подключение к базе данных успешно");

    app.use(cookieParser());
    app.use(checkAuth);
    app.use(compression());
    app.use(express.json());
    app.use(`/api/${API_VERSION}`, apiRouter);
    app.use(staticsBundle());
    app.use(staticsPublic());
    app.get("/*", render);

    let server = http.createServer(app);

    try {
      if (IS_DEV) {
        const cert = fs.readFileSync("./ssl/localhost.crt");
        const key = fs.readFileSync("./ssl/localhost.key");

        server = https.createServer({ key: key, cert: cert }, app);
        server.listen({ port: PORT, host: HOST }, () => {
          console.log(`Сервер запущен на https://${HOST}:${PORT}`);
        });
      } else {
        server.listen({ port: PORT }, () => {
          console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
      }
    } catch (error) {
      if (error.code === "ENOENT" && error.syscall === "open") {
        console.error(
          "Нет сертификатов, посмотри в разделе с документацией SSL.md"
        );
      }
    }
  } catch (error) {
    console.error("Ошибка подключения к бд:", error);
  }
};

start();
