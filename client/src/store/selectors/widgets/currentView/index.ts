import type { State } from "../../../reducers";

export const getCurrentViewWidget = (state: State) => state.widgets.currentView;

export const getIsLogin = (state: State) => getCurrentViewWidget(state).isLogin;
