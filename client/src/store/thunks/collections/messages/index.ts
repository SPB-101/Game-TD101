import { resolveMessages } from "@resolvers/messages";
import {
  fetch,
  fetchFailed,
  fetchFulfilled,
  setLikeFulfilled,
} from "@actions/messages";

import type { MessagesFilter } from "@resolvers/messages/types";
import type { Dispatch } from "redux";
import { getUserInfo } from "@selectors/collections/currentView";
import { State } from "@reducers/index";
import { MessageId } from "@entities/messages/types";

export const fetchMessages = (filter: MessagesFilter) => (
  dispatch: Dispatch,
  getState: () => State
) => {
  dispatch(fetch(filter));

  return resolveMessages(filter)
    .then((res) => {
      if (res.result.length > 0) {
        const currentUser = getUserInfo(getState());
        const messages = Object.values(res.entities.messages);
        const userLikes = messages.reduce<MessageId[]>((accum, message) => {
          if (message.likes.includes(currentUser.id)) {
            accum.push(message.id);
          }
          return accum;
        }, []);
        userLikes.map((like) => dispatch(setLikeFulfilled(like)));
      }

      return dispatch(fetchFulfilled(res));
    })
    .catch((err) => dispatch(fetchFailed(err)));
};
