import { combineReducers } from "redux";
import type { Immutable } from "immer";

import { widgets } from "./widgets";
import type { Widgets } from "./widgets";

export type State = Immutable<{
  widgets: Widgets;
}>;

export const rootReducer = combineReducers({
  widgets,
});
