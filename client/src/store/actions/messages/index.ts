import type { Action } from "@actions/index";
import {
  NewMessage,
  MessagesFilter,
  NewMessageResult,
  ResolveMessagesResult,
} from "@resolvers/messages/types";
import { MessageId } from "@entities/messages/types";

export const FETCH_MESSAGES = "messages/FETCH_MESSAGES";
export const FETCH_MESSAGES_FULFILLED = "messages/FETCH_MESSAGES_FULFILLED";
export const FETCH_MESSAGES_FAILED = "messages/FETCH_MESSAGES_FAILED";

export const FETCH_NEW_MESSAGE = "messages/FETCH_NEW_MESSAGE";
export const FETCH_NEW_MESSAGE_FULFILLED =
  "messages/FETCH_NEW_MESSAGE_FULFILLED";
export const FETCH_NEW_MESSAGE_FAILED = "messages/FETCH_NEW_MESSAGE_FAILED";

export const UPDATE_CURRENT_PAGE = "messages/UPDATE_CURRENT_PAGE";
export const SET_LIKE = "messages/SET_LIKE";
export const SET_LIKE_FULFILLED = "messages/SET_LIKE_FULFILLED";
export const SET_LIKE_FAILED = "messages/SET_LIKE_FAILED";
export const RESET_ALL_LIKES = "messages/RESET_ALL_LIKES";
export const RESET_LIKE = "messages/RESET_LIKE";
export const RESET_LIKE_FULFILLED = "messages/RESET_LIKE_FULFILLED";
export const RESET_LIKE_FAILED = "messages/RESET_LIKE_FAILED";

export type FetchMessageAction = Action<typeof FETCH_MESSAGES, MessagesFilter>;
export type FulfilledMessageAction = Action<
  typeof FETCH_MESSAGES_FULFILLED,
  ResolveMessagesResult
>;
export type FailedMessageAction = Action<typeof FETCH_MESSAGES_FAILED, string>;

export type FetchNewMessageAction = Action<
  typeof FETCH_NEW_MESSAGE,
  NewMessage
>;
export type FulfilledNewMessageAction = Action<
  typeof FETCH_NEW_MESSAGE_FULFILLED,
  NewMessageResult
>;
export type FailedNewMessageAction = Action<
  typeof FETCH_NEW_MESSAGE_FAILED,
  string
>;

export type UpdateCurrentPageAction = Action<
  typeof UPDATE_CURRENT_PAGE,
  number
>;

export type SetLikeAction = Action<typeof SET_LIKE>;
export type SetLikeFulfilledAction = Action<
  typeof SET_LIKE_FULFILLED,
  MessageId
>;
export type SetLikeFailedAction = Action<typeof SET_LIKE_FAILED, string>;
export type ResetLikeAction = Action<typeof RESET_LIKE>;
export type ResetLikeFulfilledAction = Action<
  typeof RESET_LIKE_FULFILLED,
  MessageId
>;
export type ResetLikeFailedAction = Action<typeof RESET_LIKE_FAILED, string>;

export type ResetAllLikesAction = Action<typeof RESET_ALL_LIKES>;

export type Actions =
  | FetchMessageAction
  | FulfilledMessageAction
  | FailedMessageAction
  | FetchNewMessageAction
  | FulfilledNewMessageAction
  | FailedNewMessageAction
  | UpdateCurrentPageAction
  | SetLikeAction
  | SetLikeFulfilledAction
  | SetLikeFailedAction
  | ResetLikeAction
  | ResetLikeFulfilledAction
  | ResetLikeFailedAction
  | ResetAllLikesAction;

export const fetch = (payload: MessagesFilter) =>
  ({
    type: FETCH_MESSAGES,
    payload,
  } as FetchMessageAction);

export const fetchFulfilled = (payload: ResolveMessagesResult) =>
  ({
    type: FETCH_MESSAGES_FULFILLED,
    payload,
  } as FulfilledMessageAction);

export const fetchFailed = (payload: string) =>
  ({
    type: FETCH_MESSAGES_FAILED,
    payload,
  } as FailedMessageAction);

export const updateCurrentPage = (payload: number) =>
  ({
    type: UPDATE_CURRENT_PAGE,
    payload,
  } as UpdateCurrentPageAction);

export const fetchNewMessage = () =>
  ({
    type: FETCH_NEW_MESSAGE,
  } as FetchNewMessageAction);

export const fetchNewMessageFulfilled = (payload: NewMessageResult) =>
  ({
    type: FETCH_NEW_MESSAGE_FULFILLED,
    payload,
  } as FulfilledNewMessageAction);

export const fetchNewMessageFailed = (payload: string) =>
  ({
    type: FETCH_NEW_MESSAGE_FAILED,
    payload,
  } as FailedNewMessageAction);

export const fetchSettingLike = () =>
  ({
    type: SET_LIKE,
  } as SetLikeAction);

export const setLikeFulfilled = (payload: MessageId) =>
  ({
    type: SET_LIKE_FULFILLED,
    payload,
  } as SetLikeFulfilledAction);

export const setLikeFailed = (payload: string) =>
  ({
    type: SET_LIKE_FAILED,
    payload,
  } as SetLikeFailedAction);

export const fetchResettingLike = () =>
  ({
    type: RESET_LIKE,
  } as ResetLikeAction);

export const resetLikeFulfilled = (payload: MessageId) =>
  ({
    type: RESET_LIKE_FULFILLED,
    payload,
  } as ResetLikeFulfilledAction);

export const resetLikeFailed = (payload: string) =>
  ({
    type: RESET_LIKE_FAILED,
    payload,
  } as ResetLikeFailedAction);

export const resetAllLikes = () =>
  ({
    type: RESET_ALL_LIKES,
  } as ResetAllLikesAction);
