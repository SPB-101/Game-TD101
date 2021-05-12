export const PORT = process.env.PORT || 3000;
export const IS_DEV = process.env.NODE_ENV === "development";
export const HOST = IS_DEV ? "local.ya-praktikum.tech" : "prod-todo";
