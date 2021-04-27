import type { State } from "@reducers/index";

export const getCurrentViewWidget = (state: State) => state.widgets.currentView;

export const getIsLogin = (state: State) => getCurrentViewWidget(state).isLogin;

export const getToastList = (state: State) =>
  Object.values(getCurrentViewWidget(state).toastList);
