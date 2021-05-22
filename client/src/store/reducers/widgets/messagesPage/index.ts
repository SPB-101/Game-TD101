import {
  Actions,
  FETCH_MESSAGES,
  FETCH_MESSAGES_FAILED,
  FETCH_MESSAGES_FULFILLED,
  FETCH_NEW_MESSAGE,
  FETCH_NEW_MESSAGE_FAILED,
  FETCH_NEW_MESSAGE_FULFILLED,
  UPDATE_CURRENT_PAGE,
} from "@actions/messages";

import type { MessageId } from "@entities/messages/types";
import { TOPIC_MESSAGES_RECORD_LIMIT } from "@constants/index";

export type MessagesPage = {
  list: {
    isLoading: boolean;
    topicId: number | null;
    offset: number;
    total: number;
    ids: MessageId[];
  };
  newTopic: {
    isLoading: boolean;
    errorMessage: string;
  };
};

export const initialState = {
  list: {
    isLoading: false,
    topicId: null,
    offset: 0,
    total: 0,
    ids: [],
  },
  newTopic: {
    isLoading: false,
    errorMessage: "",
  },
};

export const messagesPage = (
  state: MessagesPage = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_MESSAGES: {
      state.list.isLoading = true;
      return state;
    }
    case FETCH_MESSAGES_FULFILLED: {
      state.list.isLoading = false;
      // добавить topicId в currentView
      // state.list.topicId = action.payload.topicId;
      state.list.ids = action.payload.result;
      state.list.total = action.payload.total;
      return state;
    }
    case FETCH_MESSAGES_FAILED: {
      state.list.isLoading = false;
      return state;
    }
    case FETCH_NEW_MESSAGE: {
      state.newTopic.isLoading = true;
      state.newTopic.errorMessage = "";
      return state;
    }
    case FETCH_NEW_MESSAGE_FULFILLED: {
      state.newTopic.isLoading = false;
      state.newTopic.errorMessage = "";
      return state;
    }
    case FETCH_NEW_MESSAGE_FAILED: {
      state.newTopic.isLoading = false;
      state.newTopic.errorMessage = action.payload;
      return state;
    }
    case UPDATE_CURRENT_PAGE: {
      state.list.offset = (action.payload - 1) * TOPIC_MESSAGES_RECORD_LIMIT;
      return state;
    }
  }

  return state;
};
