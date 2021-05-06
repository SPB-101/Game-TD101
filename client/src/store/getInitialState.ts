import { initialState as currentViewCollection } from "@reducers/collections/currentView";
import { initialState as leaderboard } from "@reducers/collections/leaderboard";
import { initialState as currentViewWidget } from "@reducers/widgets/currentView";
import { initialState as loginPage } from "@reducers/widgets/loginPage";
import { initialState as registrationPage } from "@reducers/widgets/registrationPage";
import { initialState as profilePage } from "@reducers/widgets/profilePage";
import { initialState as leaderboardPage } from "@reducers/widgets/leaderboardPage";
import { initialState as game } from "@reducers/widgets/game";
import type { State } from "@reducers/index";

import type { RouterState } from "connected-react-router";

export const getInitialState = (pathname = "/"): State => {
  return {
    collections: {
      currentView: currentViewCollection,
      leaderboard,
    },
    widgets: {
      currentView: currentViewWidget,
      loginPage,
      registrationPage,
      profilePage,
      leaderboardPage,
      game,
    },
    router: {
      location: { pathname, search: "", hash: "", key: "" },
      action: "POP",
    } as RouterState,
  };
};
