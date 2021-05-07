import type { LeaderboardTag } from "@resolvers/leaderboard/types";

export const IS_DEV = NODE_ENV === "development";

export const LS = "v1";

export const PORT = PORT_ENV ? Number(PORT_ENV) : 3000;
export const HOST = IS_DEV
  ? `https://local.ya-praktikum.tech:${PORT}`
  : "prod-todo";

export const HTTP = "https";
export const API_DOMAIN = "ya-praktikum.tech";
export const API_HOST = `${HTTP}://${API_DOMAIN}/api/v2`;
export const OAUTH_YANDEX =
  "https://oauth.yandex.ru/authorize?response_type=code";

export const THEME_LS = `${LS}_theme`;
export const THEME_LIGHT = "light-theme";
export const THEME_DARK = "dark-theme";

export const GAME_WIN = "gameWin";
export const GAME_LOSE = "gameLose";
export const GAME_WAVE_END = 10;

export const LEADERBOARD_TAG: LeaderboardTag = IS_DEV
  ? "TD101Dev1"
  : "TD101Score";
export const LEADERBOARD_RECORD_LIMIT = 5;
export const LEADERBOARD_PAGE_LIMIT = 5;

console.log("APP VERSION " + VERSION);
console.log("IS_DEV " + IS_DEV);
