import type { State } from "../../../reducers";

export const getCurrentViewWidget = (state: State) => state.widgets.currentView;
export const getCurrentViewCollection = (state: State) =>
  state.collections.currentView;

export const getIsLogin = (state: State) => getCurrentViewWidget(state).isLogin;

export const getUserInfo = (state: State) =>
  getCurrentViewCollection(state).user;
