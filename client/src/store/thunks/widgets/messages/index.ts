import type { Dispatch } from "redux";

import {
  fetchNewMessage,
  fetchNewMessageFailed,
  fetchNewMessageFulfilled,
  fetchResettingLike,
  fetchSettingLike,
  resetLikeFailed,
  resetLikeFulfilled,
  setLikeFailed,
  setLikeFulfilled,
  updateCurrentPage,
} from "@actions/messages";
import { addToast } from "@actions/toast";
import { formatError } from "@utils/formatError";
import {
  resolveAddMessage,
  resolveResetLike,
  resolveSetLike,
} from "@resolvers/messages";

import type { NewMessage } from "@resolvers/messages/types";
import type { MessageId } from "@entities/messages/types";

export const newCurrentPage = (page: number) => (dispatch: Dispatch) => {
  dispatch(updateCurrentPage(page));
};

export const createMessage = (newMessageData: NewMessage) => (
  dispatch: Dispatch
) => {
  dispatch(fetchNewMessage());

  return resolveAddMessage(newMessageData)
    .then((data) => {
      dispatch(fetchNewMessageFulfilled(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchNewMessageFailed(formatError(error)));
      dispatch(
        addToast({
          title: "cannotPostMessage",
          type: "error",
        })
      );
    });
};

export const setLike = (messageId: MessageId) => (dispatch: Dispatch) => {
  dispatch(fetchSettingLike());

  return resolveSetLike(messageId)
    .then(() => dispatch(setLikeFulfilled(messageId)))
    .catch((error) => dispatch(setLikeFailed(formatError(error))));
};

export const resetLike = (messageId: MessageId) => (dispatch: Dispatch) => {
  dispatch(fetchResettingLike());

  return resolveResetLike(messageId)
    .then(() => dispatch(resetLikeFulfilled(messageId)))
    .catch((error) => dispatch(resetLikeFailed(formatError(error))));
};
