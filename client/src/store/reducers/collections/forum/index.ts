import { FETCH_FORUM_FULFILLED } from "@actions/forum";

import type { Actions } from "@actions/forum";
import type { Topic } from "@entities/forum/types";

export type Forum = Record<string, Topic>;

export const initialState = {};

export const forum = (state: Forum = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_FORUM_FULFILLED: {
      return action.payload.entities.forum;
    }
  }

  return state;
};
