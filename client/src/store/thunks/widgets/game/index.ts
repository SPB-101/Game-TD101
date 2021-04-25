import type { Dispatch } from "redux";

import { GetState } from "client/src/store";
import { endGame } from "@actions/game";
import { getUserInfo } from "@selectors/collections/currentView";
import { resolveAddLeaderboard } from "@resolvers/leaderboard";

import type { ResultGame } from "@reducers/widgets/game";
import type { LeaderboardAddScore } from "@resolvers/leaderboard/types";

import { LEADERBOARD_TAG } from "@constants/index";

export const endGameAndScore = (resultGame: ResultGame) => (
  dispatch: Dispatch,
  getState: GetState
) => {
  dispatch(endGame(resultGame));

  const user = getUserInfo(getState());

  resolveAddLeaderboard({
    data: {
      id: user.id,
      displayName: user.displayName,
      avatar: user.avatar,
      [LEADERBOARD_TAG]: resultGame.score,
    },
    ratingFieldName: LEADERBOARD_TAG,
  } as LeaderboardAddScore).catch((error) => console.log(error));
};
