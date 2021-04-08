import { combineReducers } from "redux";
// import { collections } from "./collections";
// import { widgets } from "./widgets";

import type { Immutable } from "immer";
import type { Collections } from "./collections";
import type { Widgets } from "./widgets";

export type State = Immutable<{
  widgets: Widgets;
  collections: Collections;
}>;

// export const rootReducer = combineReducers({
//   collections,
//   widgets,
// });

export const rootReducer = combineReducers({});
