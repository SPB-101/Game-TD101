import {
  Actions,
  FETCH_FORUM,
  FETCH_FORUM_FAILED,
  FETCH_FORUM_FULFILLED,
  FETCH_NEW_TOPIC,
  FETCH_NEW_TOPIC_FAILED,
  FETCH_NEW_TOPIC_FULFILLED,
  UPDATE_CURRENT_PAGE,
} from "@actions/forum";

import type { TopicId } from "@entities/forum/types";
import { TOPIC_MESSAGES_RECORD_LIMIT } from "@constants/index";

export type ForumPage = {
  list: {
    isLoading: boolean;
    offset: number;
    total: number;
    ids: TopicId[];
  };
  newTopic: {
    isLoading: boolean;
    id: number;
    errorMessage: string;
  };
};

export const initialState = {
  list: {
    isLoading: false,
    offset: 0,
    total: 0,
    ids: [],
  },
  newTopic: {
    isLoading: false,
    id: 0,
    errorMessage: "",
  },
};

export const forumPage = (state: ForumPage = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_FORUM: {
      state.list.isLoading = true;
      return state;
    }
    case FETCH_FORUM_FULFILLED: {
      state.list.isLoading = false;
      state.list.ids = action.payload.result;
      state.list.total = action.payload.total;
      return state;
    }
    case FETCH_FORUM_FAILED: {
      state.list.isLoading = false;
      return state;
    }
    case FETCH_NEW_TOPIC: {
      state.newTopic.isLoading = true;
      state.newTopic.errorMessage = "";
      return state;
    }
    case FETCH_NEW_TOPIC_FULFILLED: {
      state.newTopic.isLoading = false;
      state.newTopic.id = action.payload.id;
      state.newTopic.errorMessage = "";
      return state;
    }
    case FETCH_NEW_TOPIC_FAILED: {
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
