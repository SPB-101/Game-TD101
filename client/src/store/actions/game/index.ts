import type { Action } from "../../actions";
import type { ResultGame, Level } from "../../reducers/widgets/game";

export const START_GAME = "game/START_GAME";
export const END_GAME = "game/END_GAME";

export type StartGameAction = Action<typeof START_GAME, Level>;
export type EndGameAction = Action<typeof END_GAME, ResultGame>;

export type Actions = StartGameAction | EndGameAction;

export const startGame = (payload: Level) =>
  ({
    type: START_GAME,
    payload,
  } as StartGameAction);

export const endGame = (payload: ResultGame) =>
  ({
    type: END_GAME,
    payload,
  } as EndGameAction);
