import type { State } from "../../../reducers";

export const getIsLoading = (state: State) => state.widgets.loginPage.isLoading;
export const getErrorMessage = (state: State) =>
  state.widgets.loginPage.errorMessage;
