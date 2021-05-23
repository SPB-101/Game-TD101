import type { Dispatch } from "redux";

import {
  fetchNewMessage,
  fetchNewMessageFailed,
  fetchNewMessageFulfilled,
  selectTopic,
  updateCurrentPage,
} from "@actions/messages";
import { addToast } from "@actions/toast";
import { formatError } from "@utils/formatError";
import { resolveAddMessage, resolveGetTopic } from "@resolvers/messages";

import type { NewMessage } from "@resolvers/messages/types";
import type { TopicId } from "@entities/forum/types";

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

export const getCurrentTopic = (id: TopicId) => (dispatch: Dispatch) => {
  return resolveGetTopic(id).then((data) => dispatch(selectTopic(data)));
};
