import type { State } from "@reducers/index";
import { TopicId } from "@entities/forum/types";

export const getCommentsCollection = (state: State) =>
  state.collections.comments;

export const getComment = (state: State, id: TopicId) =>
  getCommentsCollection(state)[id];

export const getUserId = (state: State, id: TopicId) =>
  getComment(state, id).userId;
