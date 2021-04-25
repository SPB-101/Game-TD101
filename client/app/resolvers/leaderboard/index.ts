import axios from "axios";
import { normalize } from "normalizr";

import { leaderboardListEntity } from "@entities/leaderboard";

import type { Resolver } from "@resolvers/types";
import type {
  LeaderboardFilter,
  LeaderboardAddScore,
  ResolveLeaderboardResult,
} from "./types";

import { API_HOST } from "@constants/index";

export const resolveLeaderboard: Resolver<
  LeaderboardFilter,
  ResolveLeaderboardResult
> = (filter) =>
  axios
    .post(`${API_HOST}/leaderboard/all`, filter)
    .then(({ data }) => normalize(data, leaderboardListEntity));

export const resolveAddLeaderboard: Resolver<LeaderboardAddScore, void> = (
  score
) => axios.post(`${API_HOST}/leaderboard`, score);
