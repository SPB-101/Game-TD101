import type { State } from "@reducers/index";

export const getUsersWidget = (state: State) => state.widgets.users;

export const getIds = (state: State) => getUsersWidget(state).ids;

export const getIsUsersLoading = (state: State) =>
  getUsersWidget(state).isLoading;
