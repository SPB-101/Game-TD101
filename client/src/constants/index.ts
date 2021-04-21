console.log("APP VERSION " + VERSION);
console.log("NODE_ENV " + NODE_ENV);

export const IS_DEV = NODE_ENV === "development";

export const LS = "v1";

export const WS = "wss";
export const HTTP = "https";
export const HOST = "://ya-praktikum.tech";
export const API_HOST = `${HTTP}${HOST}/api/v2`;
export const API_MESSAGES = `${WS}${HOST}/ws/chats`;

export const THEME_LS = `${LS}_theme`;
export const THEME_LIGHT = "light-theme";
export const THEME_DARK = "dark-theme";

export const GAME_WIN = "gameWin";
export const GAME_LOSE = "gameLose";
export const GAME_WAVE_END = 3;

import type { LeaderboardTag } from "../../app/resolvers/leaderboard/types";
export const LEADERBOARD_TAG: LeaderboardTag = IS_DEV
  ? "TD101Dev1"
  : "TD101Score";
