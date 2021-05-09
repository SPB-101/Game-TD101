// eslint-disable-next-line
// @ts-ignore
import { app } from "../dist/server.js";
import http from "http";
import https from "https";
import fs from "fs";

import { PORT, HOST } from "../constants/server";

let server = http.createServer(app);

const start = () => {
  try {
    const cert = fs.readFileSync("./ssl/localhost.crt");
    const key = fs.readFileSync("./ssl/localhost.key");

    server = https.createServer({ key: key, cert: cert }, app);
    server.listen({ port: PORT, host: HOST }, () => {
      console.log(`server started on https://${HOST}:${PORT}`);
    });
  } catch (error) {
    if (error.syscall === "open" && error.path === "./ssl/localhost.crt") {
      console.log("Для HTTPS - Сгенерируйте сертификаты 'npm run ssl'");
    }

    server.listen({ port: PORT }, () => {
      console.log(`server started on http://localhost:${PORT}`);
    });
  }
};

start();
