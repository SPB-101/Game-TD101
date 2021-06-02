import dotenv from "dotenv";

import express from "express";
import http from "http";
import https from "https";
import compression from "compression";
import cookieParser from "cookie-parser";

import { csrf } from "./middleware/csrf";
import { csp } from "./middleware/csp";
import { errorHandler } from "./middleware/error";
import { render } from "./middleware/render";
import { checkAuth } from "./middleware/auth";
import { staticsBundle } from "./middleware/staticsBundle";
import { staticsPublic } from "./middleware/staticsPublic";
import { PORT, IS_DEV, HOST, API_VERSION } from "../constants/server";

import { loadCrt } from "./utils/loadCrt";
import { fixDevCert } from "./utils/httpsAgent";

import { sequelize } from "./database/postgres";
import { initMockData } from "./database/postgres/initMockData";
import "./models";

import { apiRouter } from "./routes";

const app = express();
dotenv.config();

const start = async () => {
  app
    .disable("x-powered-by")
    .use(staticsBundle())
    .use(staticsPublic())
    .use(cookieParser())
    .use(csrf())
    .use(express.json())
    .use(checkAuth())
    .use(`/api/${API_VERSION}`, apiRouter)
    .get("/*", fixDevCert, render)
    .use(compression())
    .use(csp())
    .use(errorHandler());

  let server = http.createServer(app);

  try {
    await sequelize.sync({ force: IS_DEV });
    if (IS_DEV) await initMockData();
    console.log("Подключение к базе данных успешно");

    if (IS_DEV) {
      const { cert, key } = loadCrt();

      server = https.createServer({ key, cert }, app);
      server.listen({ port: PORT, host: HOST }, () => {
        console.log(`Сервер запущен на https://${HOST}:${PORT}`);
      });
    } else {
      server.listen({ port: PORT }, () => {
        console.log(`Сервер запущен на http://localhost:${PORT}`);
      });
    }
  } catch (error) {
    if (error?.code === "ENOENT" && error?.syscall === "open") {
      return console.error(
        "Нет сертификатов, посмотри в разделе с документацией SSL.md"
      );
    }

    if (
      error?.original?.code === "ECONNREFUSED" &&
      error?.original?.syscall === "connect"
    ) {
      return console.error(
        "Ошибка подключения к бд, посмотри переменные окружения (*.env)"
      );
    }

    console.error("Неизвестная ошибка:", error);
  }
};

start();
