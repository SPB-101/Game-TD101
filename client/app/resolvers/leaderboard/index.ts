import axios from "axios";
import { normalize } from "normalizr";

import { leaderboardListEntity } from "@entities/leaderboard";
import { formatLeaderBoard } from "@utils-entity/leaderboard";

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
    .post(`${API_HOST}/leaderboard/all`, filter, { withCredentials: true })
    .then(({ data }) => formatLeaderBoard(data))
    .then(({ data }) => normalize(data, leaderboardListEntity));

export const resolveAddLeaderboard: Resolver<LeaderboardAddScore, void> = (
  score
) => axios.post(`${API_HOST}/leaderboard`, score, { withCredentials: true });
