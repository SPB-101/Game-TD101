import type { State } from "@reducers/index";

export const getCurrentViewWidget = (state: State) => state.widgets.currentView;

export const getIsLogin = (state: State) => getCurrentViewWidget(state).isLogin;
