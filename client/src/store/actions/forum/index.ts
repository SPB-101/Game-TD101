import type { Action } from "@actions/index";
import { ForumFilter, ResolveForumResult } from "@resolvers/forum/types";

export const FETCH_FORUM = "forum/FETCH_FORUM";
export const FETCH_FORUM_FULFILLED = "forum/FETCH_FORUM_FULFILLED";
export const FETCH_FORUM_FAILED = "forum/FETCH_FORUM_FAILED";
export const UPDATE_CURRENT_PAGE = "forum/UPDATE_CURRENT_PAGE";

export type FetchAction = Action<typeof FETCH_FORUM, ForumFilter>;
export type FulfilledAction = Action<
  typeof FETCH_FORUM_FULFILLED,
  ResolveForumResult
>;
export type FailedAction = Action<typeof FETCH_FORUM_FAILED, string>;
export type UpdateCurrentPageAction = Action<
  typeof UPDATE_CURRENT_PAGE,
  number
>;
export type Actions =
  | FetchAction
  | FulfilledAction
  | FailedAction
  | UpdateCurrentPageAction;

export const fetch = (payload: ForumFilter) =>
  ({
    type: FETCH_FORUM,
    payload,
  } as FetchAction);

export const fetchFulfilled = (payload: ResolveForumResult) =>
  ({
    type: FETCH_FORUM_FULFILLED,
    payload,
  } as FulfilledAction);

export const fetchFailed = (payload: string) =>
  ({
    type: FETCH_FORUM_FAILED,
    payload,
  } as FailedAction);

export const updateCurrentPage = (payload: number) =>
  ({
    type: UPDATE_CURRENT_PAGE,
    payload,
  } as UpdateCurrentPageAction);
