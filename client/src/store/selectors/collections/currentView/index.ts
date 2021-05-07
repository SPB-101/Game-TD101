import type { State } from "@reducers/index";

export const getCurrentViewCollection = (state: State) =>
  state.collections.currentView;

export const getUserInfo = (state: State) =>
  getCurrentViewCollection(state).user;
