// eslint-disable-next-line
// @ts-ignore
import { app } from "../dist/server.js";
import http from "http";
import https from "https";
import fs from "fs";

import { PORT, IS_DEV, HOST } from "../constants/server";

let server = http.createServer(app);

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
