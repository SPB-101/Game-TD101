import { ResultGame } from "client/src/store/reducers/widgets/game";

export type Props = {
  endGameAndScoreThunk: (resultGame: ResultGame) => Promise<void>;
};
