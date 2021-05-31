import {
  Actions,
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_FULFILLED,
  FETCH_NEW_COMMENT,
  FETCH_NEW_COMMENT_FAILED,
  FETCH_NEW_COMMENT_FULFILLED,
  RESET_LIKE,
  RESET_LIKE_FAILED,
  RESET_LIKE_FULFILLED,
  SET_LIKE,
  SET_LIKE_FAILED,
  SET_LIKE_FULFILLED,
  UPDATE_CURRENT_PAGE,
} from "@actions/comments";

import type { CommentId } from "@entities/comments/types";
import { TOPIC_COMMENTS_RECORD_LIMIT } from "@constants/index";

export type CommentsPage = {
  list: {
    isLoading: boolean;
    topicId: number | null;
    topicTitle: string | null;
    offset: number;
    total: number;
    ids: CommentId[];
  };
  newComment: {
    isNewComment: boolean;
    isLoading: boolean;
    errorMessage: string;
  };
  likes: {
    isLoading: boolean;
    errorMessage: string;
  };
};

export const initialState = {
  list: {
    isLoading: false,
    topicId: null,
    topicTitle: null,
    offset: 0,
    total: 0,
    ids: [],
  },
  newComment: {
    isNewComment: false,
    isLoading: false,
    errorMessage: "",
  },
  likes: {
    isLoading: false,
    errorMessage: "",
  },
};

export const commentsPage = (
  state: CommentsPage = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_COMMENTS: {
      state.list.isLoading = true;
      return state;
    }
    case FETCH_COMMENTS_FULFILLED: {
      state.newComment.isNewComment = false;
      state.list.isLoading = false;
      state.list.ids = action.payload.result;
      state.list.total = action.payload.total;
      return state;
    }
    case FETCH_COMMENTS_FAILED: {
      state.list.isLoading = false;
      return state;
    }
    case FETCH_NEW_COMMENT: {
      state.newComment.isLoading = true;
      state.newComment.errorMessage = "";
      return state;
    }
    case FETCH_NEW_COMMENT_FULFILLED: {
      state.newComment.isNewComment = true;
      state.newComment.isLoading = false;
      state.newComment.errorMessage = "";
      return state;
    }
    case FETCH_NEW_COMMENT_FAILED: {
      state.newComment.isLoading = false;
      state.newComment.errorMessage = action.payload;
      return state;
    }
    case UPDATE_CURRENT_PAGE: {
      state.list.offset = (action.payload - 1) * TOPIC_COMMENTS_RECORD_LIMIT;
      return state;
    }
    case SET_LIKE: {
      state.likes.isLoading = true;
      state.likes.errorMessage = "";
      return state;
    }
    case SET_LIKE_FULFILLED: {
      state.likes.isLoading = false;
      state.likes.errorMessage = "";
      return state;
    }
    case SET_LIKE_FAILED: {
      state.likes.isLoading = false;
      state.likes.errorMessage = action.payload;
      return state;
    }
    case RESET_LIKE: {
      state.likes.isLoading = true;
      state.likes.errorMessage = "";
      return state;
    }
    case RESET_LIKE_FULFILLED: {
      state.likes.isLoading = false;
      state.likes.errorMessage = "";
      return state;
    }
    case RESET_LIKE_FAILED: {
      state.likes.isLoading = false;
      state.likes.errorMessage = action.payload;
      return state;
    }
  }

  return state;
};
