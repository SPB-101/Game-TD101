console.log("APP VERSION " + VERSION);
console.log("NODE_ENV " + NODE_ENV);

export const IS_DEV = NODE_ENV === "development";

export const LS = "v1";

export const HOST = IS_DEV ? "http://localhost:3000" : "prod-todo";

export const WS = "wss";
export const HTTP = "https";
export const API_DOMAIN = "ya-praktikum.tech";
export const API_HOST = `${HTTP}://${API_DOMAIN}/api/v2`;
export const API_MESSAGES = `${WS}://${API_DOMAIN}/ws/chats`;
export const OAUTH_YANDEX =
  "https://oauth.yandex.ru/authorize?response_type=code";

export const THEME_LS = `${LS}_theme`;
export const THEME_LIGHT = "light-theme";
export const THEME_DARK = "dark-theme";

export const GAME_WIN = "gameWin";
export const GAME_LOSE = "gameLose";
export const GAME_WAVE_END = 10;

import type { LeaderboardTag } from "@resolvers/leaderboard/types";
export const LEADERBOARD_TAG: LeaderboardTag = IS_DEV
  ? "TD101Dev1"
  : "TD101Score";
export const LEADERBOARD_RECORD_LIMIT = 5;
export const LEADERBOARD_PAGE_LIMIT = 5;
