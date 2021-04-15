import { combineReducers } from "redux";
import type { Immutable } from "immer";

import { widgets } from "./widgets";
import { collections } from "./collections";

import type { Widgets } from "./widgets";
import type { Collections } from "./collections";

export type State = Immutable<{
  widgets: Widgets;
  collections: Collections;
}>;

export const rootReducer = combineReducers({
  widgets,
  collections,
});
