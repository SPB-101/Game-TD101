import type { State } from "../../../reducers";

export const getCurrentViewCollection = (state: State) =>
  state.collections.currentView;

export const getUserInfo = (state: State) =>
  getCurrentViewCollection(state).user;
