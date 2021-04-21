import axios from "axios";
import { normalize } from "normalizr";

import { API_HOST } from "../../../src/constants";

import { leaderboardListEntity } from "../../entities/leaderboard";

import type { Resolver } from "../types";
import type {
  LeaderboardFilter,
  LeaderboardAddScore,
  ResolveLeaderboardResult,
} from "./types";

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
