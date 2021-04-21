import { endGame } from "../../../actions/game";

import type { Dispatch } from "redux";
import type { ResultGame } from "client/src/store/reducers/widgets/game";
import { getUserInfo } from "../../../selectors/collections/currentView";

import type { LeaderboardAddScore } from "../../../../../app/resolvers/leaderboard/types";
import { resolveAddLeaderboard } from "../../../../../app/resolvers/leaderboard";
import { LEADERBOARD_TAG } from "../../../../constants";

import { GetState } from "client/src/store";

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
