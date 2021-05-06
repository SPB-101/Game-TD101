// @ts-ignore
import { app } from "./dist/server.js";
import http from "http";
import https from "https";
import fs from "fs";

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV === "development";
const DEV_HOST = "local.ya-praktikum.tech";

let server = http.createServer(app);

if (IS_DEV) {
  const key = fs.readFileSync("./ssl/key.pem");
  const cert = fs.readFileSync("./ssl/cert.pem");

  server = https.createServer({ key: key, cert: cert }, app);
  server.listen({ port: PORT, host: DEV_HOST }, () => {
    console.log(`server started on ${DEV_HOST}:`, PORT);
  });
} else {
  server.listen({ port: PORT }, () => {
    console.log("server started on localhost:", PORT);
  });
}
