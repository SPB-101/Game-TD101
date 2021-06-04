import type { Action } from "@actions/index";
import type {
  ForumAddTopic,
  ForumFilter,
  NewTopicResult,
  ResolveForumResult,
  TopicInfo,
} from "@resolvers/forum/types";

export const FETCH_FORUM = "forum/FETCH_FORUM";
export const FETCH_FORUM_FULFILLED = "forum/FETCH_FORUM_FULFILLED";
export const FETCH_FORUM_FAILED = "forum/FETCH_FORUM_FAILED";

export const FETCH_NEW_TOPIC = "forum/FETCH_NEW_TOPIC";
export const FETCH_NEW_TOPIC_FULFILLED = "forum/FETCH_NEW_TOPIC_FULFILLED";
export const FETCH_NEW_TOPIC_FAILED = "forum/FETCH_NEW_TOPIC_FAILED";

export const UPDATE_CURRENT_PAGE = "forum/UPDATE_CURRENT_PAGE";

export const SELECT_TOPIC = "forum/SELECT_TOPIC";
export const RESET_TOPIC = "forum/RESET_TOPIC";

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

export type SelectTopicAction = Action<typeof SELECT_TOPIC, TopicInfo>;
export type ResetTopicAction = Action<typeof RESET_TOPIC>;

export type Actions =
  | FetchForumAction
  | FulfilledForumAction
  | FailedForumAction
  | FetchNewTopicAction
  | FulfilledNewTopicAction
  | FailedNewTopicAction
  | UpdateCurrentPageAction
  | SelectTopicAction
  | ResetTopicAction;

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

export const selectTopic = (payload: TopicInfo) =>
  ({
    type: SELECT_TOPIC,
    payload,
  } as SelectTopicAction);

export const resetTopic = () =>
  ({
    type: RESET_TOPIC,
  } as ResetTopicAction);
