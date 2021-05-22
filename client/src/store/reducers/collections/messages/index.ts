import { FETCH_MESSAGES_FULFILLED } from "@actions/messages";

import type { Actions } from "@actions/messages";
import type { Message } from "@entities/messages/types";

export type Messages = Record<string, Message>;

export const initialState = {};

export const messages = (state: Messages = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_MESSAGES_FULFILLED: {
      return action.payload.entities.messages;
    }
  }

  return state;
};
