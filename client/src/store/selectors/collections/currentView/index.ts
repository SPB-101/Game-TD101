import type { State } from "@reducers/index";

export const getCurrentViewCollection = (state: State) =>
  state.collections.currentViewCollection;

export const getUserInfo = (state: State) =>
  getCurrentViewCollection(state).user;
