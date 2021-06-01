export const PORT = process.env.PORT || 3000;
export const IS_DEV = process.env.NODE_ENV === "development";
export const HOST = IS_DEV
  ? "local.ya-praktikum.tech"
  : "spb-td101-4.ya-praktikum.tech";
export const URI_PG = IS_DEV
  ? "postgres://root:example@localhost:5436/db"
  : "postgres://root:example@postgres:5432/db";
export const API_VERSION = "v1";
