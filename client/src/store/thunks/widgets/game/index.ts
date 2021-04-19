import { endGame } from "../../../actions/game";

import type { Dispatch } from "redux";
import type { ResultGame } from "client/src/store/reducers/widgets/game";

export const fetchLogin = (resultGame: ResultGame) => (dispatch: Dispatch) => {
  dispatch(endGame(resultGame));
  // resolveLogin(user); LEADERBOARD
};
