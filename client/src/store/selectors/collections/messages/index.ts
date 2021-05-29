import type { State } from "@reducers/index";
import { TopicId } from "@entities/forum/types";

export const getMessagesCollection = (state: State) =>
  state.collections.messages;

export const getMessage = (state: State, id: TopicId) =>
  getMessagesCollection(state)[id];

export const getUserId = (state: State, id: TopicId) =>
  getMessage(state, id).userId;
