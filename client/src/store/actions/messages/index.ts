import type { Action } from "@actions/index";
import {
  NewMessage,
  MessagesFilter,
  NewMessageResult,
  ResolveMessagesResult,
} from "@resolvers/messages/types";

export const FETCH_MESSAGES = "messages/FETCH_MESSAGES";
export const FETCH_MESSAGES_FULFILLED = "messages/FETCH_MESSAGES_FULFILLED";
export const FETCH_MESSAGES_FAILED = "messages/FETCH_MESSAGES_FAILED";

export const FETCH_NEW_MESSAGE = "messages/FETCH_NEW_MESSAGE";
export const FETCH_NEW_MESSAGE_FULFILLED =
  "messages/FETCH_NEW_MESSAGE_FULFILLED";
export const FETCH_NEW_MESSAGE_FAILED = "messages/FETCH_NEW_MESSAGE_FAILED";

export const UPDATE_CURRENT_PAGE = "messages/UPDATE_CURRENT_PAGE";

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

export type Actions =
  | FetchMessageAction
  | FulfilledMessageAction
  | FailedMessageAction
  | FetchNewMessageAction
  | FulfilledNewMessageAction
  | FailedNewMessageAction
  | UpdateCurrentPageAction;

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
