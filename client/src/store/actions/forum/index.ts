import type { Action } from "@actions/index";
import {
  ForumAddTopic,
  ForumFilter,
  NewTopicResult,
  ResolveForumResult,
} from "@resolvers/forum/types";

export const FETCH_FORUM = "forum/FETCH_FORUM";
export const FETCH_FORUM_FULFILLED = "forum/FETCH_FORUM_FULFILLED";
export const FETCH_FORUM_FAILED = "forum/FETCH_FORUM_FAILED";

export const FETCH_NEW_TOPIC = "forum/FETCH_NEW_TOPIC";
export const FETCH_NEW_TOPIC_FULFILLED = "forum/FETCH_NEW_TOPIC_FULFILLED";
export const FETCH_NEW_TOPIC_FAILED = "forum/FETCH_NEW_TOPIC_FAILED";

export const UPDATE_CURRENT_PAGE = "forum/UPDATE_CURRENT_PAGE";

export type FetchForumAction = Action<typeof FETCH_FORUM, ForumFilter>;
export type FulfilledForumAction = Action<
  typeof FETCH_FORUM_FULFILLED,
  ResolveForumResult
>;
export type FailedForumAction = Action<typeof FETCH_FORUM_FAILED, string>;

export type FetchNewTopicAction = Action<typeof FETCH_NEW_TOPIC, ForumAddTopic>;
export type FulfilledNewTopicAction = Action<
  typeof FETCH_NEW_TOPIC_FULFILLED,
  NewTopicResult
>;
export type FailedNewTopicAction = Action<
  typeof FETCH_NEW_TOPIC_FAILED,
  string
>;

export type UpdateCurrentPageAction = Action<
  typeof UPDATE_CURRENT_PAGE,
  number
>;
export type Actions =
  | FetchForumAction
  | FulfilledForumAction
  | FailedForumAction
  | FetchNewTopicAction
  | FulfilledNewTopicAction
  | FailedNewTopicAction
  | UpdateCurrentPageAction;

export const fetch = (payload: ForumFilter) =>
  ({
    type: FETCH_FORUM,
    payload,
  } as FetchForumAction);

export const fetchFulfilled = (payload: ResolveForumResult) =>
  ({
    type: FETCH_FORUM_FULFILLED,
    payload,
  } as FulfilledForumAction);

export const fetchFailed = (payload: string) =>
  ({
    type: FETCH_FORUM_FAILED,
    payload,
  } as FailedForumAction);

export const updateCurrentPage = (payload: number) =>
  ({
    type: UPDATE_CURRENT_PAGE,
    payload,
  } as UpdateCurrentPageAction);

export const fetchNewTopic = () =>
  ({
    type: FETCH_NEW_TOPIC,
  } as FetchNewTopicAction);

export const fetchNewTopicFulfilled = (payload: NewTopicResult) =>
  ({
    type: FETCH_NEW_TOPIC_FULFILLED,
    payload,
  } as FulfilledNewTopicAction);

export const fetchNewTopicFailed = (payload: string) =>
  ({
    type: FETCH_NEW_TOPIC_FAILED,
    payload,
  } as FailedNewTopicAction);
