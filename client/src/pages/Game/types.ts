import type { ResultGame } from "@reducers/widgets/game";

export type Props = {
  endGameAndScoreThunk: (resultGame: ResultGame) => Promise<void>;
  resetGame: () => void;
};
