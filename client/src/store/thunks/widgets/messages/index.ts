import type { Dispatch } from "redux";

import {
  fetchNewMessage,
  fetchNewMessageFailed,
  fetchNewMessageFulfilled,
  updateCurrentPage,
} from "@actions/messages";
import { addToast } from "@actions/toast";
import { formatError } from "@utils/formatError";
import { resolveAddMessage } from "@resolvers/messages";
import { fetchMessages } from "@thunks/collections/messages";

import type { NewMessage } from "@resolvers/messages/types";

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
    .then(() => {
      // dispatch(fetchMessages(filter))
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
