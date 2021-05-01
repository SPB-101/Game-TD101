import type { State } from "@reducers/index";

export const getCurrentViewWidget = (state: State) =>
  state.widgets.currentViewWidget;

export const getIsLogin = (state: State) => getCurrentViewWidget(state).isLogin;
