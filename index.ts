// @ts-ignore
import { app } from "./dist/server.js";
import https from "https";
import fs from "fs";
const key = fs.readFileSync("./ssl/key.pem");
const cert = fs.readFileSync("./ssl/cert.pem");

const PORT = process.env.PORT || 3000;

const server = https.createServer({ key: key, cert: cert }, app);

server.listen({ port: PORT, host: "local.ya-praktikum.tech" }, () => {
  console.log("server started on local.ya-praktikum.tech:", PORT);
});
