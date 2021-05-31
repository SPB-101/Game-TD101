import { FETCH_COMMENTS_FULFILLED } from "@actions/comments";

import type { Actions } from "@actions/comments";
import type { Comment } from "@entities/comments/types";

export type Comments = Record<string, Comment>;

export const initialState = {};

export const comments = (state: Comments = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_COMMENTS_FULFILLED: {
      return action.payload.entities.comments;
    }
  }

  return state;
};
