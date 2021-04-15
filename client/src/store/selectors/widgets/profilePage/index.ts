import type { State } from "../../../reducers";

export const getIsLoading = (state: State) =>
  state.widgets.profilePage.isLoading;

export const getUser = (state: State) => state.widgets.profilePage.user;
