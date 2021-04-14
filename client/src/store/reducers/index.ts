import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import type { Immutable } from "immer";

import { widgets } from "./widgets";
import type { Widgets } from "./widgets";

export type State = Immutable<{
  widgets: Widgets;
}>;

export const rootReducer = (history) =>
  combineReducers({
    widgets,
    router: connectRouter(history),
  });
