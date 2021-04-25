import type { Action } from "@actions/index";
import {
  LeaderboardFilter,
  ResolveLeaderboardResult,
} from "@resolvers/leaderboard/types";

export const FETCH_LEADERBOARD = "leaderboard/FETCH_LEADERBOARD";
export const FETCH_LEADERBOARD_FULFILLED =
  "leaderboard/FETCH_LEADERBOARD_FULFILLED";
export const FETCH_LEADERBOARD_FAILED = "leaderboard/FETCH_LEADERBOARD_FAILED";

export type FetchAction = Action<typeof FETCH_LEADERBOARD, LeaderboardFilter>;
export type FulfilledAction = Action<
  typeof FETCH_LEADERBOARD_FULFILLED,
  ResolveLeaderboardResult
>;
export type FailedAction = Action<typeof FETCH_LEADERBOARD_FAILED, string>;
export type Actions = FetchAction | FulfilledAction | FailedAction;

export const fetch = (payload: LeaderboardFilter) =>
  ({
    type: FETCH_LEADERBOARD,
    payload,
  } as FetchAction);

export const fetchFulfilled = (payload: ResolveLeaderboardResult) =>
  ({
    type: FETCH_LEADERBOARD_FULFILLED,
    payload,
  } as FulfilledAction);

export const fetchFailed = (payload: string) =>
  ({
    type: FETCH_LEADERBOARD_FAILED,
    payload,
  } as FailedAction);
