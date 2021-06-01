export const PORT = process.env.PORT || 3000;
export const IS_DEV = process.env.NODE_ENV === "development";
export const HOST = IS_DEV
  ? "local.ya-praktikum.tech"
  : "spb-td101-4.ya-praktikum.tech";
export const URI_PG =
  process.env.DATABASE_URL_PSQL || "postgres://root:example@localhost:5436/db";
export const API_VERSION = "v1";
