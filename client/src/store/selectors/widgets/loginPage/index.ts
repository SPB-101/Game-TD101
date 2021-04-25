import type { State } from "@reducers/index";

export const getLoginPageWidget = (state: State) => state.widgets.loginPage;

export const getIsLoading = (state: State) =>
  getLoginPageWidget(state).isLoading;

export const getErrorMessage = (state: State) =>
  getLoginPageWidget(state).errorMessage;
