import type { TopicId } from "@entities/forum/types";
import type { State } from "@reducers/index";

export const getForumCollection = (state: State) => state.collections.forum;

export const getTopic = (state: State, id: TopicId) =>
  getForumCollection(state)[id];
