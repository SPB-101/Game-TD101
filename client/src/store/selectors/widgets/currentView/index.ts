import { createSelector, Selector } from "reselect";
import type { State } from "@reducers/index";
import type { Toast } from "@reducers/widgets/currentView/types";

export const getCurrentViewWidget = (state: State) => state.widgets.currentView;

export const getIsLogin = (state: State) => getCurrentViewWidget(state).isLogin;
export const getToastCollection = (state: State) =>
  getCurrentViewWidget(state).toastCollection;

export const getToastList: Selector<
  State,
  Toast[]
> = createSelector(getToastCollection, (collection) =>
  Object.values(collection)
);
