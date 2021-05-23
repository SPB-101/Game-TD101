import type { State } from "@reducers/index";

export const getMessagesCollection = (state: State) =>
  state.collections.messages;
