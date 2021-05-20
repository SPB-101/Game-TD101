import {
  Actions,
  FETCH_FORUM,
  FETCH_FORUM_FULFILLED,
  FETCH_FORUM_FAILED,
  UPDATE_CURRENT_PAGE,
} from "@actions/forum";

import type { TopicId } from "@entities/forum/types";

export type ForumPage = {
  isLoading: boolean;
  offset: number;
  total: number;
  ids: TopicId[];
};

export const initialState = {
  isLoading: false,
  offset: 0,
  total: 0,
  ids: [],
};

export const forumPage = (state: ForumPage = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_FORUM: {
      state.isLoading = true;
      return state;
    }
    case FETCH_FORUM_FULFILLED: {
      state.isLoading = false;
      state.ids = action.payload.result;
      state.total = action.payload.total;
      return state;
    }
    case FETCH_FORUM_FAILED: {
      state.isLoading = false;
      return state;
    }
    case UPDATE_CURRENT_PAGE: {
      state.offset = action.payload;
      return state;
    }
  }

  return state;
};
